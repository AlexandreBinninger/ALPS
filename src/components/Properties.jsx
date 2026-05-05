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

export default function Properties() {
  return (
    <section
      id="properties"
      className="border-t border-neutral-200 py-12 md:py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Three guaranteed properties
      </h2>
      <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
        For the output to be both editable and fabricable,{' '}
        <span className="italic">ALPS</span> enforces three properties by
        construction:
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
    </section>
  )
}
