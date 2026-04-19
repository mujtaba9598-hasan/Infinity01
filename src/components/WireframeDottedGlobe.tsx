import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { feature } from 'topojson-client'
import type { FeatureCollection } from 'geojson'

interface GlobeProps {
  className?: string
}

const DUBAI: [number, number] = [55.2708, 25.2048]

const SUPPLIERS: { name: string; coord: [number, number] }[] = [
  { name: 'Saint-Gobain', coord: [2.3522, 48.8566] },
  { name: 'Jotun', coord: [10.7522, 59.9139] },
  { name: 'Dulux', coord: [-0.1276, 51.5074] },
  { name: 'RAK Ceramics', coord: [55.7653, 25.7911] },
  { name: 'Danube', coord: [55.2708, 25.1124] },
  { name: 'Arabian Aluminium', coord: [55.3333, 25.2582] },
  { name: 'Emirates Glass', coord: [55.2593, 25.1115] },
  { name: 'Jebel Ali Marble', coord: [55.0353, 24.9857] },
  { name: 'ASTER', coord: [76.2711, 10.0261] },
]

export default function WireframeDottedGlobe({ className = '' }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [landGeo, setLandGeo] = useState<FeatureCollection | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json')
      .then((r) => r.json())
      .then((topo) => {
        if (cancelled) return
        const fc = feature(topo, topo.objects.land) as unknown as FeatureCollection
        setLandGeo(fc)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    const parent = canvas.parentElement
    const size = Math.min(parent?.clientWidth ?? 600, 720)
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    context.scale(dpr, dpr)

    const radius = size * 0.42
    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([size / 2, size / 2])
      .clipAngle(90)

    const graticule = d3.geoGraticule10()
    let rotation = 0
    let userDrag = false
    let lastX = 0
    const manualOffset: [number, number] = [55, -10]

    const drawDotMatrix = () => {
      const step = 6
      context.fillStyle = 'oklch(0.58 0.22 260 / 0.18)'
      for (let lon = -180; lon <= 180; lon += step) {
        for (let lat = -80; lat <= 80; lat += step) {
          const projected = projection([lon, lat])
          if (!projected) continue
          context.beginPath()
          context.arc(projected[0], projected[1], 0.9, 0, Math.PI * 2)
          context.fill()
        }
      }
    }

    const drawLand = () => {
      if (!landGeo) return
      const path = d3.geoPath(projection, context)
      context.fillStyle = 'oklch(0.58 0.22 260 / 0.08)'
      context.beginPath()
      path(landGeo)
      context.fill()
      context.strokeStyle = 'oklch(0.42 0.22 262 / 0.55)'
      context.lineWidth = 0.7
      context.beginPath()
      path(landGeo)
      context.stroke()
    }

    const drawGraticule = () => {
      const path = d3.geoPath(projection, context)
      context.strokeStyle = 'oklch(0.58 0.22 260 / 0.14)'
      context.lineWidth = 0.5
      context.beginPath()
      path(graticule)
      context.stroke()
    }

    const drawGlobeOutline = () => {
      const path = d3.geoPath(projection, context)
      context.strokeStyle = 'oklch(0.42 0.22 262 / 0.30)'
      context.lineWidth = 1
      context.beginPath()
      path({ type: 'Sphere' })
      context.stroke()
    }

    const drawArcAndPin = () => {
      const path = d3.geoPath(projection, context)
      const dubaiPoint = projection(DUBAI)

      SUPPLIERS.forEach((s, idx) => {
        const arc = {
          type: 'Feature' as const,
          geometry: { type: 'LineString' as const, coordinates: [DUBAI, s.coord] },
          properties: {},
        }
        const t = (performance.now() / 3500 + idx * 0.11) % 1
        const alpha = 0.15 + 0.4 * Math.max(0, Math.sin(t * Math.PI))
        const grad = context.createLinearGradient(0, 0, size, size)
        grad.addColorStop(0, `oklch(0.58 0.22 260 / ${alpha})`)
        grad.addColorStop(1, `oklch(0.66 0.23 27 / ${alpha})`)
        context.strokeStyle = grad
        context.lineWidth = 1.2
        context.beginPath()
        path(arc)
        context.stroke()
      })

      if (dubaiPoint) {
        const pulse = 1 + 0.35 * Math.sin(performance.now() / 600)
        context.fillStyle = 'oklch(0.66 0.23 27 / 0.20)'
        context.beginPath()
        context.arc(dubaiPoint[0], dubaiPoint[1], 14 * pulse, 0, Math.PI * 2)
        context.fill()
        context.fillStyle = 'oklch(0.66 0.23 27)'
        context.beginPath()
        context.arc(dubaiPoint[0], dubaiPoint[1], 4, 0, Math.PI * 2)
        context.fill()
      }
    }

    let raf = 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const frame = () => {
      if (!userDrag && !reduced) rotation += 0.15
      projection.rotate([manualOffset[0] + rotation, manualOffset[1]])
      context.clearRect(0, 0, size, size)
      drawDotMatrix()
      drawLand()
      drawGraticule()
      drawGlobeOutline()
      drawArcAndPin()
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    const onDown = (e: MouseEvent) => {
      userDrag = true
      lastX = e.clientX
    }
    const onMove = (e: MouseEvent) => {
      if (!userDrag) return
      const dx = e.clientX - lastX
      manualOffset[0] += dx * 0.35
      lastX = e.clientX
    }
    const onUp = () => {
      userDrag = false
    }
    canvas.addEventListener('mousedown', onDown)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)

    return () => {
      cancelAnimationFrame(raf)
      canvas.removeEventListener('mousedown', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [landGeo])

  return (
    <div className={`relative w-full aspect-square max-w-[640px] mx-auto ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        aria-label="Interactive globe showing Infinity's Dubai headquarters and global supplier network"
      />
    </div>
  )
}
