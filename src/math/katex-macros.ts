import katex, { type KatexOptions } from 'katex'

export const KATEX_MACROS: Record<string, string> = {
  '\\Ker': '\\operatorname{Ker}',
  '\\Im': '\\operatorname{Im}',
  '\\card': '\\operatorname{card}',
  '\\id': '\\operatorname{id}',
  '\\GL': '\\operatorname{GL}',
  '\\SL': '\\operatorname{SL}',
  '\\pgcd': '\\operatorname{pgcd}',
  '\\ppcm': '\\operatorname{ppcm}',
  '\\cl': '\\operatorname{cl}',
  '\\Aut': '\\operatorname{Aut}',
  '\\End': '\\operatorname{End}',
  '\\Hom': '\\operatorname{Hom}',
  '\\Int': '\\operatorname{Int}',
  '\\supp': '\\operatorname{supp}',
  '\\Zn': '\\dfrac{\\mathbb{Z}}{(#1)}',
  '\\Z': '\\mathbb{Z}',
  '\\N': '\\mathbb{N}',
  '\\Q': '\\mathbb{Q}',
  '\\R': '\\mathbb{R}',
  '\\C': '\\mathbb{C}'
}

export const KATEX_OPTIONS: KatexOptions = {
  throwOnError: true,
  strict: (errorCode: string) =>
    errorCode === 'unicodeTextInMathMode' ? 'ignore' : 'error',
  macros: KATEX_MACROS,
  trust: false
}

export function renderMath(tex: string, displayMode = false): string {
  return katex.renderToString(tex, {
    ...KATEX_OPTIONS,
    displayMode
  })
}

export function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

type Segment =
  | { kind: 'text'; value: string }
  | { kind: 'math'; value: string; display: boolean }

function splitMathSegments(input: string): Segment[] {
  const segments: Segment[] = []
  let i = 0
  let textStart = 0

  const flushText = (end: number) => {
    if (end > textStart) {
      segments.push({ kind: 'text', value: input.slice(textStart, end) })
    }
  }

  while (i < input.length) {
    // Escaped dollar \$ outside math
    if (input[i] === '\\' && input[i + 1] === '$') {
      i += 2
      continue
    }

    // Display \[ ... \]
    if (input[i] === '\\' && input[i + 1] === '[') {
      const close = input.indexOf('\\]', i + 2)
      if (close !== -1) {
        flushText(i)
        segments.push({
          kind: 'math',
          value: input.slice(i + 2, close).trim(),
          display: true
        })
        i = close + 2
        textStart = i
        continue
      }
    }

    // Inline \( ... \)
    if (input[i] === '\\' && input[i + 1] === '(') {
      const close = input.indexOf('\\)', i + 2)
      if (close !== -1) {
        flushText(i)
        segments.push({
          kind: 'math',
          value: input.slice(i + 2, close).trim(),
          display: false
        })
        i = close + 2
        textStart = i
        continue
      }
    }

    // Display $$ ... $$
    if (input[i] === '$' && input[i + 1] === '$') {
      let close = i + 2
      while (close < input.length) {
        if (input[close] === '\\' && close + 1 < input.length) {
          close += 2
          continue
        }
        if (input[close] === '$' && input[close + 1] === '$') {
          break
        }
        close++
      }
      if (close < input.length && input[close] === '$' && input[close + 1] === '$') {
        flushText(i)
        segments.push({
          kind: 'math',
          value: input.slice(i + 2, close).trim(),
          display: true
        })
        i = close + 2
        textStart = i
        continue
      }
    }

    // Inline $ ... $
    if (input[i] === '$' && input[i + 1] !== '$') {
      let close = i + 1
      let found = false
      while (close < input.length) {
        if (input[close] === '\\' && close + 1 < input.length) {
          close += 2
          continue
        }
        if (input[close] === '\n' && input[close + 1] === '\n') {
          break
        }
        if (input[close] === '$') {
          found = true
          break
        }
        close++
      }
      if (found && close > i + 1) {
        flushText(i)
        segments.push({
          kind: 'math',
          value: input.slice(i + 1, close).trim(),
          display: false
        })
        i = close + 1
        textStart = i
        continue
      }
    }

    i++
  }

  flushText(input.length)
  return segments
}

function formatEscapedInlineMarkdown(escapedText: string): string {
  return escapedText
    .replace(/\\?\$/g, (m) => (m === '\\$' ? '$' : '$'))
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^\s*][^*\n]*?[^\s*]|[^\s*])\*/g, '<em>$1</em>')
}

export interface SafeRenderOptions {
  throwOnMathError?: boolean
  inline?: boolean
}

/**
 * Rendu sécurisé de texte Markdown + formules LaTeX :
 * 1. Sépare les segments mathématiques des segments textuels.
 * 2. Échappe strictement le HTML dans tous les segments textuels avant d'appliquer un formatage Markdown minimal.
 * 3. Rend chaque formule via le pipeline KaTeX unique (`renderMath`).
 */
export function renderSafeMarkdownMath(
  raw: string,
  options: SafeRenderOptions = {}
): string {
  const throwOnMathError = options.throwOnMathError ?? true
  const inline = options.inline ?? false
  const normalized = (raw || '').replace(/\r\n/g, '\n').replace(/[\uE000\uE001]/g, '')
  const segments = splitMathSegments(normalized)
  const renderedMaths: string[] = []

  const markedParts = segments.map((seg) => {
    if (seg.kind === 'text') {
      const escaped = escapeHtml(seg.value)
      const formatted = formatEscapedInlineMarkdown(escaped)
      if (inline) {
        return formatted.replace(/\n+/g, ' ')
      }
      return formatted
    }

    let mathHtml: string
    try {
      mathHtml = renderMath(seg.value, inline ? false : seg.display)
    } catch (err) {
      if (throwOnMathError) {
        throw err
      }
      const message = err instanceof Error ? err.message : String(err)
      mathHtml = `<span class="katex-live-error" title="${escapeHtml(message)}">[LaTeX incomplet : <code>${escapeHtml(seg.value)}</code>]</span>`
    }
    const markerId = renderedMaths.length
    renderedMaths.push(mathHtml)
    return `\uE000JCM${markerId}\uE001`
  })

  const restoreMaths = (s: string) =>
    s.replace(/\uE000JCM(\d+)\uE001/g, (_, i) => renderedMaths[Number(i)] ?? '')

  const joined = markedParts.join('')
  if (inline) {
    return restoreMaths(joined)
  }

  const blocks = joined.split(/\n{2,}/)
  if (blocks.length === 1) {
    return restoreMaths(joined.replace(/\n/g, '<br>'))
  }
  const withParagraphs = blocks
    .map((b) => `<p>${b.trim().replace(/\n/g, '<br>')}</p>`)
    .join('')
  return restoreMaths(withParagraphs)
}
