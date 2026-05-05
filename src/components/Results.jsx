import { useCallback, useRef, useState } from 'react'

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

function CompareSlider({ leftSrc, rightSrc, leftLabel, rightLabel }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const node = containerRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, pct)))
  }, [])

  const onPointerDown = (e) => {
    draggingRef.current = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }
  const onPointerUp = (e) => {
    draggingRef.current = false
    e.currentTarget.releasePointerCapture?.(e.pointerId)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5))
    else if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5))
    else if (e.key === 'Home') setPos(0)
    else if (e.key === 'End') setPos(100)
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full select-none overflow-hidden rounded-md bg-neutral-50 touch-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* Right (result) — full size, always visible */}
      <img
        src={rightSrc}
        alt={rightLabel}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-contain"
      />
      {/* Left (input) — clipped to position */}
      <img
        src={leftSrc}
        alt={leftLabel}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {/* Corner labels */}
      <span className="pointer-events-none absolute left-2 top-2 rounded bg-black/55 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
        Input
      </span>
      <span className="pointer-events-none absolute right-2 top-2 rounded bg-black/55 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
        ALPS
      </span>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_6px_rgba(0,0,0,0.4)]"
        style={{ left: `calc(${pos}% - 1px)` }}
      />

      {/* Handle */}
      <button
        type="button"
        aria-label={`Comparison slider — currently ${Math.round(pos)}% input visible`}
        aria-valuenow={Math.round(pos)}
        aria-valuemin="0"
        aria-valuemax="100"
        role="slider"
        onKeyDown={onKeyDown}
        className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/10 hover:bg-neutral-100"
        style={{ left: `${pos}%` }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-700"
          aria-hidden="true"
        >
          <polyline points="9 18 3 12 9 6" />
          <polyline points="15 6 21 12 15 18" />
        </svg>
      </button>
    </div>
  )
}

export default function Results() {
  const [selectedInput, setSelectedInput] = useState('crab')
  const [selectedPalette, setSelectedPalette] = useState('neon-space')

  const inputUrl = `${ASSET_BASE}/input_image/${selectedInput}.jpg`
  const resultUrl = `${ASSET_BASE}/${selectedInput}/${selectedInput}_${selectedPalette}.svg`

  return (
    <section id="results" className="border-t border-neutral-200 py-12 md:py-16">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Results
      </h2>
      <p className="mt-6 text-sm leading-relaxed text-neutral-700 md:text-base">
        Pick a semantic guide and a color palette. Drag the divider on the
        comparison view to reveal more of the input or of the ALPS output.
        All combinations are 512-triangle softmax meshes.
      </p>

      {/* Palette strip — horizontal scroll on mobile */}
      <div className="mt-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Color palette
        </p>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 md:grid md:grid-cols-8 md:gap-2 md:overflow-visible md:pb-0">
          {PALETTES.map((p) => {
            const active = p === selectedPalette
            return (
              <button
                key={p}
                type="button"
                onClick={() => setSelectedPalette(p)}
                className={`flex w-32 shrink-0 flex-col items-stretch overflow-hidden rounded-md border transition md:w-auto ${
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

      {/* Body: inputs filmstrip + comparison */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[10rem_1fr]">
        {/* Inputs picker. On mobile: horizontal scroll. On desktop: vertical scroll. */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Semantic guide
          </p>
          <div className="-mx-1 flex gap-2 overflow-x-auto rounded-md border border-neutral-200 bg-neutral-50 p-2 md:mx-0 md:max-h-[28rem] md:flex-col md:gap-1.5 md:overflow-x-visible md:overflow-y-auto">
            {INPUTS.map((name) => {
              const active = name === selectedInput
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSelectedInput(name)}
                  className={`flex shrink-0 items-center gap-2 overflow-hidden rounded transition md:w-full ${
                    active
                      ? 'ring-2 ring-rose-700'
                      : 'opacity-80 hover:opacity-100'
                  }`}
                  title={prettify(name)}
                >
                  <img
                    src={`${ASSET_BASE}/input_image/${name}_sm.jpg`}
                    alt={prettify(name)}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 object-cover md:h-12 md:w-12"
                  />
                  <span className="hidden truncate pr-2 text-left text-xs text-neutral-700 md:inline">
                    {prettify(name)}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Comparison slider */}
        <div className="rounded-md border border-neutral-200 bg-white p-3 md:p-4">
          <CompareSlider
            leftSrc={inputUrl}
            rightSrc={resultUrl}
            leftLabel={`Semantic guide: ${prettify(selectedInput)}`}
            rightLabel={`ALPS result for ${prettify(selectedInput)} with ${prettifyPalette(selectedPalette)} palette`}
          />
          <p className="mt-3 text-center text-xs text-neutral-500 md:text-sm">
            {prettify(selectedInput)} · {prettifyPalette(selectedPalette)}
          </p>
        </div>
      </div>
    </section>
  )
}
