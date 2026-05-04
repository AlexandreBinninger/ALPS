const navLinks = [
  { label: 'Paper', href: '/ALPS/paper/alps.pdf' },
  { label: 'Supplemental', href: '/ALPS/paper/alps_supplementary.pdf' },
  { label: 'DOI', href: 'https://doi.org/10.1145/3799902.3811050' },
  { label: 'Code', href: 'https://github.com/rubenwiersma/alps' },
  { label: 'BibTeX', href: '#bibtex' },
]

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-4xl px-6 py-10 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
          This page
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-700">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                className="hover:underline"
                href={l.href}
                target={l.href.startsWith('#') ? undefined : '_blank'}
                rel={l.href.startsWith('#') ? undefined : 'noreferrer'}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          Project page maintained by{' '}
          <a className="hover:underline" href="https://alexandrebinninger.com/">
            Alexandre Binninger
          </a>
          . Source on{' '}
          <a
            className="hover:underline"
            href="https://github.com/AlexandreBinninger/ALPS"
          >
            GitHub
          </a>
          . Interactive Geometry Lab,{' '}
          <a
            className="hover:underline"
            href="https://igl.ethz.ch/"
            target="_blank"
            rel="noreferrer"
          >
            IGL @ ETH Zürich
          </a>
          .
        </p>

        <p className="mt-3 text-xs text-neutral-400">
          Mountain mark favicon adapted from{' '}
          <a
            className="hover:underline"
            href="https://freesvg.org/mountain-symbol"
            target="_blank"
            rel="noreferrer"
          >
            freesvg.org/mountain-symbol
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
