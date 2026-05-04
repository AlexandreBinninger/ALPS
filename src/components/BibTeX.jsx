import { useEffect, useState } from 'react'

const BIB_PATH = '/ALPS/paper/cite.bib'

export default function BibTeX() {
  const [citation, setCitation] = useState('')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(BIB_PATH)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.text()
      })
      .then((text) => {
        if (!cancelled) setCitation(text.trim())
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const handleCopy = async () => {
    if (!citation) return
    try {
      await navigator.clipboard.writeText(citation)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="bibtex" className="border-t border-neutral-200 py-12 md:py-16">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          BibTeX
        </h2>
        <button
          type="button"
          onClick={handleCopy}
          disabled={!citation}
          className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <pre className="mt-6 overflow-x-auto rounded-lg bg-neutral-900 p-5 text-sm leading-relaxed text-neutral-100">
        <code>
          {error
            ? 'Could not load citation. See /paper/cite.bib.'
            : citation || 'Loading citation…'}
        </code>
      </pre>
    </section>
  )
}
