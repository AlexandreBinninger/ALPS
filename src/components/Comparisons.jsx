const COLUMNS = ['Semantic guide', 'Generation', 'Fabrication']

const fabrications = [
  {
    title: 'Embroidery',
    body: (
      <>
        The mesh is exported as SVG and compiled into an embroidery file with{' '}
        <a
          href="https://inkstitch.org/"
          target="_blank"
          rel="noreferrer"
          className="text-[rgb(153,204,51)] hover:underline"
        >
          Ink/Stitch
        </a>
        . ALPS can also impose high-level structural constraints, such as
        vertical symmetry, an Eulerian boundary that lets the outline be
        stitched in a single continuous pass, or user-fixed boundary points
        for a perfectly circular pattern. Each constraint is preserved
        end-to-end into the embroidered piece.
      </>
    ),
    rows: [
      {
        caption: 'Eiffel Tower with vertical symmetry',
        cells: [
          '/ALPS/media/fabrication/embroidery_symmetry_input.jpg',
          '/ALPS/media/fabrication/embroidery_symmetry_design.svg',
          '/ALPS/media/fabrication/embroidery_symmetry_fabrication.jpg',
        ],
      },
      {
        caption: 'Flower field with grid layout + Eulerian graph',
        cells: [
          '/ALPS/media/fabrication/embroidery_eulerian_input.jpg',
          '/ALPS/media/fabrication/embroidery_eulerian_design.svg',
          '/ALPS/media/fabrication/embroidery_eulerian_fabrication.jpg',
        ],
      },
      {
        caption: 'Apple with user-fixed boundary points',
        cells: [
          '/ALPS/media/fabrication/embroidery_user_input.jpg',
          '/ALPS/media/fabrication/embroidery_user_design.svg',
          '/ALPS/media/fabrication/embroidery_user_fabrication.jpg',
        ],
      },
      {
        caption: 'Dog',
        cells: [
          '/ALPS/media/fabrication/embroidery_dog_input.jpg',
          '/ALPS/media/fabrication/embroidery_dog_design.svg',
          '/ALPS/media/fabrication/embroidery_dog_fabrication.jpg',
        ],
      },
      {
        caption: 'Lion',
        cells: [
          '/ALPS/media/fabrication/embroidery_lion_input.jpg',
          '/ALPS/media/fabrication/embroidery_lion_design.svg',
          '/ALPS/media/fabrication/embroidery_lion_fabrication.jpg',
        ],
      },
      {
        caption: 'Owl',
        cells: [
          '/ALPS/media/fabrication/embroidery_owl_input.jpg',
          '/ALPS/media/fabrication/embroidery_owl_design.svg',
          '/ALPS/media/fabrication/embroidery_owl_fabrication.jpg',
        ],
      },
      {
        caption: 'Pumpkin',
        cells: [
          '/ALPS/media/fabrication/embroidery_pumpkin_input.jpg',
          '/ALPS/media/fabrication/embroidery_pumpkin_design.jpg',
          '/ALPS/media/fabrication/embroidery_pumpkin_fabrication.jpg',
        ],
      },
    ],
  },
  {
    title: 'Faux stained glass',
    body: 'We merge same-colored triangles and emit a single cut path along shared edges to drive a laser cutter. Pieces of acrylic, cut layer-by-layer from the palette, are assembled into a stained-glass-style mosaic.',
    rows: [
      {
        cells: [
          '/ALPS/media/fabrication/stained_glass_input.jpg',
          '/ALPS/media/fabrication/stained_glass_design.svg',
          '/ALPS/media/fabrication/stained_glass_fabrication.jpg',
        ],
      },
    ],
  },
  {
    title: 'Wood mosaic',
    body: 'The same vector cut paths drive a laser cutter on layered wood veneers. This example shows ALPS used as a sewing-pattern-style cut plan for a different substrate.',
    rows: [
      {
        cells: [
          '/ALPS/media/fabrication/wood_mosaic_input.jpg',
          '/ALPS/media/fabrication/wood_mosaic_design.svg',
          '/ALPS/media/fabrication/wood_mosaic_fabrication.jpg',
        ],
      },
    ],
  },
  {
    title: 'Tapestry crocheting',
    body: 'Each polygonal face is crocheted independently from a single yarn color, and the panels are then stitched together along the mesh edges. Because every face stays uniform, mid-row color switches are avoided and assembly is fast.',
    rows: [
      {
        cells: [
          '/ALPS/media/fabrication/crochet_input.jpg',
          '/ALPS/media/fabrication/crochet_design.png',
          '/ALPS/media/fabrication/crochet_fabrication.jpg',
        ],
      },
    ],
  },
  {
    title: 'Patchworking',
    body: 'Mesh edges become equal-length seams. We merge adjacent same-colored triangles into larger polygonal patches to reduce assembly effort, then sew the panels into the finished piece: here, a Rosy Maple Moth.',
    rows: [
      {
        cells: [
          '/ALPS/media/fabrication/patchwork_input.jpg',
          '/ALPS/media/fabrication/patchwork_design.jpg',
          '/ALPS/media/fabrication/patchwork_fabrication.jpg',
        ],
      },
    ],
  },
  {
    title: 'Stencil printing',
    body: 'The triangulation acts as its own bridge network: by retaining material along each edge, every region stays connected, so single-layer laser-cut stencils can sponge-paint the design without manually placed bridges.',
    rows: [
      {
        cells: [
          '/ALPS/media/fabrication/stencil_input.jpg',
          '/ALPS/media/fabrication/stencil_design.png',
          '/ALPS/media/fabrication/stencil_fabrication.jpg',
        ],
      },
    ],
  },
]

function Cell({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-md bg-neutral-50">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="aspect-square w-full object-cover"
      />
    </div>
  )
}

function Row({ row, fabricationTitle }) {
  return (
    <div>
      {row.caption ? (
        <p className="mb-2 text-center text-sm font-semibold text-neutral-700">
          {row.caption}
        </p>
      ) : null}
      <div className="grid grid-cols-3 gap-3">
        {row.cells.map((src, i) => (
          <Cell
            key={src}
            src={src}
            alt={`${fabricationTitle}${row.caption ? ` — ${row.caption}` : ''} — ${COLUMNS[i].toLowerCase()}`}
          />
        ))}
      </div>
    </div>
  )
}

function ColumnHeader() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {COLUMNS.map((c) => (
        <p
          key={c}
          className="text-center text-xs font-semibold uppercase tracking-wider text-neutral-500"
        >
          {c}
        </p>
      ))}
    </div>
  )
}

export default function Comparisons() {
  return (
    <section
      id="fabrications"
      className="border-t border-neutral-200 py-12 md:py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Fabrications
      </h2>
      <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
        Three properties of <span className="italic">ALPS</span> outputs, namely
        color quantization, valid vector triangulation and geometric
        abstraction, make them directly usable as fabrication blueprints.
        Each row below shows the semantic guide that drove the optimization,
        the resulting palette-constrained ALPS mesh, and the physical
        fabrication.
      </p>

      <div className="mt-10 space-y-14">
        {fabrications.map((f) => (
          <div key={f.title}>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
              {f.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-neutral-700 md:text-lg">
              {f.body}
            </p>

            <div className="mt-6 space-y-5">
              <ColumnHeader />
              {f.rows.map((row, i) => (
                <Row
                  key={row.caption ?? i}
                  row={row}
                  fabricationTitle={f.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
