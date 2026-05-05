import { useEffect, useState } from 'react'

const PIPELINE_SRC = '/ALPS/media/method/overview.png'
const PIPELINE_ALT =
  'ALPS pipeline overview: saliency-based initialization, SDS optimization with mesh simplification, and palette-constrained output'

const properties = [
  {
    title: 'Triangle count and quality',
    body: 'A user can precisely control the number of triangles and their quality (uniformity, size variation), so the output matches the constraints of a chosen style or fabrication method.',
  },
  {
    title: 'Color quantization',
    body: 'The output is constrained to any user-specified palette that is independent of the colors in the input, so it can be reproduced with discrete materials such as glass sheets, threads or fabrics.',
  },
  {
    title: 'Manifold tiling',
    body: 'The mesh is intersection-free and edge-adjacent: triangles share single edges with their neighbors, which is required for tileable mosaics and any physical assembly.',
  },
]

export default function Method() {
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    if (!zoomed) return
    const onKey = (e) => {
      if (e.key === 'Escape') setZoomed(false)
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [zoomed])

  return (
    <section id="method" className="border-t border-neutral-200 py-12 md:py-16">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Method
      </h2>

      <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
        We build <span className="italic">ALPS</span> on top of{' '}
        <span className="italic">Score Distillation Sampling</span> (SDS):
        starting from a saliency-driven Delaunay triangulation, we update vertex
        positions and per-face colors using gradients from a depth-conditioned
        diffusion model. A fine-to-coarse mesh-simplification step periodically
        reduces complexity while preserving appearance, so the topology itself
        is guided by SDS. A line-search strategy along each gradient step keeps
        the triangulation intersection-free, and a palette-based color
        assignment enforces the requested color quantization.
      </p>

      <figure className="mt-8">
        <button
          type="button"
          onClick={() => setZoomed(true)}
          aria-label="Open larger view of the pipeline figure"
          className="block w-full cursor-zoom-in overflow-hidden rounded-lg border border-neutral-200 bg-white transition hover:border-neutral-400 hover:shadow-md"
        >
          <img
            src={PIPELINE_SRC}
            alt={PIPELINE_ALT}
            className="w-full"
            loading="lazy"
          />
        </button>
        <figcaption className="mt-3 text-sm text-neutral-600">
          Pipeline of our method.{' '}
          <span className="font-semibold">Initialization (left):</span> we
          sample points by saliency and compute a Delaunay triangulation.{' '}
          <span className="font-semibold">
            Score distillation sampling (right):
          </span>{' '}
          we update vertex positions and face colors with gradients from a
          depth-conditioned diffusion model. Mesh simplification reduces
          complexity while preserving appearance every <em>n</em> steps. The
          output is intersection-free, palette-constrained and ready for
          fabrication.
        </figcaption>
      </figure>

      <h3 className="mt-10 text-xl font-semibold tracking-tight md:text-2xl">
        Three guaranteed properties
      </h3>
      <p className="mt-3 text-base leading-relaxed text-neutral-700 md:text-lg">
        For the output to be both editable and fabricable, our method enforces
        three properties by construction:
      </p>
      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {properties.map((p, i) => (
          <li
            key={p.title}
            className="rounded-lg border border-neutral-200 bg-neutral-50 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">
              Property {i + 1}
            </p>
            <p className="mt-2 text-base font-semibold text-neutral-900">
              {p.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              {p.body}
            </p>
          </li>
        ))}
      </ol>

      {zoomed ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pipeline figure, zoomed"
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-50 cursor-zoom-out overflow-auto bg-black/85"
        >
          <div className="flex min-h-full min-w-full items-center justify-center p-4 md:p-8">
            <img
              src={PIPELINE_SRC}
              alt={PIPELINE_ALT}
              onClick={(e) => e.stopPropagation()}
              className="max-w-none cursor-default"
            />
          </div>
          <button
            type="button"
            onClick={() => setZoomed(false)}
            aria-label="Close"
            className="fixed right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-2xl leading-none text-white transition hover:bg-white/20"
          >
            ×
          </button>
        </div>
      ) : null}
    </section>
  )
}
