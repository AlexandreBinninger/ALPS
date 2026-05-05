import { FaFilePdf, FaGithub, FaQuoteLeft } from 'react-icons/fa6'
import { SiAcm, SiDoi } from 'react-icons/si'
import ParticlesBackground from './ParticlesBackground.jsx'

const authors = [
  { name: 'Ruben Wiersma', url: 'https://rubenwiersma.nl/', equal: true },
  {
    name: 'Alexandre Binninger',
    url: 'https://alexandrebinninger.com/',
    equal: true,
  },
  { name: 'Peizhuo Li', url: 'https://peizhuoli.github.io/' },
  { name: 'Tanguy Magne', url: 'http://tanguymagne.com/' },
  { name: 'Annika Oehri', url: 'https://oehria.github.io/' },
  { name: 'Aviv Segall', url: 'https://segaviv.github.io/' },
  {
    name: 'Danielle Luterbacher',
    url: 'https://www.linkedin.com/in/danielleluterbacher',
  },
  { name: 'Marcel Padilla', url: 'https://marcelpadilla.com/' },
  { name: 'Jing Ren', url: 'https://ren-jing.com/' },
  {
    name: 'Olga Sorkine-Hornung',
    url: 'https://igl.ethz.ch/people/sorkine/',
  },
]

const linkAccents = {
  red: 'bg-red-600 hover:bg-red-500 border-red-600 hover:border-red-500',
  yellow:
    'bg-yellow-500 hover:bg-yellow-400 border-yellow-500 hover:border-yellow-400 text-neutral-900',
  green:
    'bg-green-600 hover:bg-green-500 border-green-600 hover:border-green-500',
  gray:
    'bg-neutral-700 hover:bg-neutral-600 border-neutral-700 hover:border-neutral-600',
}

const links = [
  {
    label: 'Paper',
    href: '/ALPS/paper/alps.pdf',
    accent: linkAccents.red,
    Icon: FaFilePdf,
  },
  {
    label: 'Supplemental',
    href: '/ALPS/paper/alps_supplementary.pdf',
    accent: linkAccents.red,
    Icon: FaFilePdf,
  },
  {
    label: 'DOI',
    href: 'https://doi.org/10.1145/3799902.3811050',
    accent: linkAccents.yellow,
    Icon: SiDoi,
  },
  {
    label: 'Code',
    href: 'https://github.com/rubenwiersma/alps',
    accent: linkAccents.green,
    Icon: FaGithub,
  },
  {
    label: 'BibTeX',
    href: '#bibtex',
    accent: linkAccents.gray,
    Icon: FaQuoteLeft,
  },
]

export default function Hero() {
  return (
    <section className="relative isolate pb-4 pt-2 text-center md:pb-6">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
        <div className="pointer-events-auto relative h-full w-full">
          <ParticlesBackground />
        </div>
      </div>
      <h1 className="text-xl font-semibold leading-snug tracking-tight text-neutral-900 md:text-3xl lg:text-4xl">
        <span className="block">Gradient Descent in the ALPS:</span>
        <span className="block">
          Abstracted Low-Poly Stylization and Fabrication
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-relaxed text-neutral-800 md:text-lg lg:text-xl">
        {authors.map((a, i) => (
          <span key={a.name}>
            <a
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap text-[rgb(153,204,51)] hover:underline"
            >
              {a.name}
              {a.equal && <sup className="text-rose-700">*</sup>}
            </a>
            {i < authors.length - 1 ? <span>, </span> : null}
          </span>
        ))}
      </p>

      <p className="mt-3 text-base font-semibold md:text-lg">
        <a
          href="https://igl.ethz.ch/"
          target="_blank"
          rel="noreferrer"
          className="text-[rgb(153,204,51)] hover:underline"
        >
          Interactive Geometry Lab (ETH Zürich)
        </a>
      </p>
      <p className="mt-1 text-xs italic text-neutral-500 md:text-sm">
        <span className="text-rose-700">*</span> Equal contribution
      </p>

      <p className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
        <SiAcm aria-hidden="true" className="text-base text-neutral-400" />
        SIGGRAPH 2026 · Conference Papers
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-3">
        {links.map((l) => {
          const Icon = l.Icon
          return (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('#') ? undefined : '_blank'}
              rel={l.href.startsWith('#') ? undefined : 'noreferrer'}
              className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium text-white transition md:text-base ${l.accent}`}
            >
              <Icon aria-hidden="true" className="text-xl md:text-2xl" />
              <span>{l.label}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
