import { useState } from 'react'

const INPUTS = [
  'axolotl',
  'banana',
  'baozi',
  'burger',
  'butterfly',
  'cake',
  'crab',
  'crystals',
  'eiffel_tower_sunset',
  'floating_island',
  'fox',
  'girl_with_a_pearl_earring',
  'ice_cream',
  'moai',
  'mucha',
  'mushroom',
  'origami_crane',
  'panda',
  'paragliding',
  'penguin',
  'pizza',
  'plane',
  'sloth',
  'the_scream',
  'tiger',
  'toucan',
  'vespa',
  'viking_helmet',
  'watermelon',
  'yellow_submarine',
]

const PALETTES = [
  'bootleg-by-pixelshift',
  'borkfest',
  'eulbink',
  'imperial',
  'mushroom',
  'neon-space',
  'sirens-at-night',
  'slowly',
]

const ASSET_BASE = '/ALPS/assets'

const prettify = (slug) =>
  slug
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

const prettifyPalette = (slug) =>
  slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-')

export default function Results() {
  const [selectedInput, setSelectedInput] = useState('crab')
  const [selectedPalette, setSelectedPalette] = useState('neon-space')

  const inputUrl = `${ASSET_BASE}/input_image/${selectedInput}.jpg`
  const paletteUrl = `${ASSET_BASE}/palettes/${selectedPalette}.svg`
  const resultUrl = `${ASSET_BASE}/${selectedInput}/${selectedInput}_${selectedPalette}.svg`

  return (
    <section id="results" className="border-t border-neutral-200 py-12 md:py-16">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Results
      </h2>
      <p className="mt-6 text-sm leading-relaxed text-neutral-700 md:text-base">
        Pick a semantic guide on the left and a color palette on top. Every
        combination shown is an actual <span className="italic">ALPS</span>{' '}
        output. Results are 512-triangle softmax meshes.
      </p>

      {/* Palette row */}
      <div className="mt-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Color palette
        </p>
        <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
          {PALETTES.map((p) => {
            const active = p === selectedPalette
            return (
              <button
                key={p}
                type="button"
                onClick={() => setSelectedPalette(p)}
                className={`group flex flex-col items-stretch overflow-hidden rounded-md border transition ${
                  active
                    ? 'border-rose-700 ring-2 ring-rose-700/30'
                    : 'border-neutral-200 hover:border-neutral-400'
                }`}
                title={prettifyPalette(p)}
              >
                <div className="flex h-10 w-full items-center justify-center bg-white p-1">
                  <img
                    src={`${ASSET_BASE}/palettes/${p}.svg`}
                    alt={`${prettifyPalette(p)} palette`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span
                  className={`px-1 py-1 text-center text-[10px] font-medium leading-tight md:text-xs ${
                    active ? 'text-rose-700' : 'text-neutral-600'
                  }`}
                >
                  {prettifyPalette(p)}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main two-column body */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[14rem_1fr]">
        {/* Input picker */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Semantic guide
          </p>
          <div className="grid max-h-[28rem] grid-cols-4 gap-2 overflow-y-auto rounded-md border border-neutral-200 bg-neutral-50 p-2 md:grid-cols-3">
            {INPUTS.map((name) => {
              const active = name === selectedInput
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSelectedInput(name)}
                  className={`overflow-hidden rounded transition ${
                    active
                      ? 'ring-2 ring-rose-700'
                      : 'opacity-80 hover:opacity-100'
                  }`}
                  title={prettify(name)}
                >
                  <img
                    src={`${ASSET_BASE}/input_image/${name}.jpg`}
                    alt={prettify(name)}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Result panel */}
        <div className="rounded-md border border-neutral-200 bg-white p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <figure>
              <img
                src={inputUrl}
                alt={`Semantic guide: ${prettify(selectedInput)}`}
                className="aspect-square w-full rounded bg-neutral-50 object-cover"
              />
              <figcaption className="mt-2 text-center text-xs text-neutral-500 md:text-sm">
                Semantic guide — {prettify(selectedInput)}
              </figcaption>
            </figure>
            <figure>
              <img
                src={resultUrl}
                alt={`ALPS result for ${prettify(selectedInput)} with ${prettifyPalette(selectedPalette)} palette`}
                className="aspect-square w-full rounded bg-neutral-50 object-contain"
              />
              <figcaption className="mt-2 text-center text-xs text-neutral-500 md:text-sm">
                ALPS — {prettifyPalette(selectedPalette)}
              </figcaption>
            </figure>
          </div>

          <div className="mt-4 flex items-center gap-3 border-t border-neutral-200 pt-4">
            <span className="text-xs uppercase tracking-wider text-neutral-500">
              Palette
            </span>
            <div className="flex h-8 flex-1 items-center justify-center rounded bg-white px-1">
              <img
                src={paletteUrl}
                alt={`${prettifyPalette(selectedPalette)} swatch`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
