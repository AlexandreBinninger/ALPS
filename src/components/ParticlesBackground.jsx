import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const IGL_GREEN = 'rgb(153, 204, 51)'

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      detectRetina: true,
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.6 } },
          push: { quantity: 2 },
        },
      },
      particles: {
        number: {
          value: 90,
          density: { enable: true, width: 800, height: 800 },
        },
        color: { value: IGL_GREEN },
        shape: { type: 'triangle' },
        opacity: { value: 0.5 },
        size: { value: { min: 1.5, max: 3.5 } },
        links: {
          enable: true,
          distance: 140,
          color: IGL_GREEN,
          opacity: 0.35,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: 'none',
          outModes: { default: 'bounce' },
          random: false,
          straight: false,
        },
      },
    }),
    [],
  )

  if (!ready) return null

  return (
    <Particles
      id="hero-particles"
      options={options}
      className="absolute inset-0 -z-10"
    />
  )
}
