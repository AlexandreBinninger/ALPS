const panels = [
  { src: '/ALPS/media/teaser/skier_input.png', label: 'Semantic guide' },
  {
    src: '/ALPS/media/teaser/skier_argmax.png',
    label: 'Low-poly abstraction',
  },
  {
    src: '/ALPS/media/teaser/skier_embroidery.png',
    label: 'Embroidery fabrication',
  },
]

export default function Teaser() {
  return (
    <section className="pt-2 pb-12 md:pt-4 md:pb-16">
      <figure>
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {panels.map((p) => (
            <div key={p.label} className="flex flex-col">
              <div className="overflow-hidden rounded-md bg-neutral-50">
                <img
                  src={p.src}
                  alt={p.label}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <p className="mt-2 text-center text-xs font-medium text-neutral-600 md:text-sm">
                {p.label}
              </p>
            </div>
          ))}
        </div>
        <figcaption className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-neutral-600 md:text-base">
          From a semantic guide image, <span className="italic">ALPS</span>{' '}
          generates valid low-poly abstractions constrained to a fixed palette,
          which are directly usable for fabrication (here, embroidery).
        </figcaption>
      </figure>
    </section>
  )
}
