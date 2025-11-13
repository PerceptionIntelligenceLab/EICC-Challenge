import React, { useState, useEffect } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { countryColors } from '../constants/countryColors'

interface CountryData {
  countryCode: string
  count: number
}

interface WorldMapProps {
  data: CountryData[]
}

const BASE_URL = import.meta.env.BASE_URL

const WorldMap: React.FC<WorldMapProps> = ({ data }) => {
  const [hoveredCountry, setHoveredCountry] = useState<{
    name: string
    count: number
    x: number
    y: number
  } | null>(null)
  const [mapScale, setMapScale] = useState(200)
  const [windowSize, setWindowSize] = useState({ width: typeof window !== 'undefined' ? window.innerWidth : 1920, height: typeof window !== 'undefined' ? window.innerHeight : 1080 })

  // Create a map of country codes to counts for quick lookup
  const dataMap = new Map(data.map(item => [item.countryCode, item.count]))

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth
      setMapScale(width < 768 ? 150 : 200)
      setWindowSize({ width, height: window.innerHeight })
    }
    
    updateScale()
    window.addEventListener('resize', updateScale)
    
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  const getCountryColor = (countryCode: string) => {
    // Return specific color for the country, or light gray if not defined
    return countryColors[countryCode] || '#d3d3d3'
  }

  const handleMouseEnter = (geo: any, event: React.MouseEvent) => {
    const countryCode = geo.properties.ISO_A2 || geo.properties.ISO_A3 || geo.properties.ADM0_A3 || 'XX'
    const count = dataMap.get(countryCode) || 0
    
    // Try to get country name from various possible properties
    let countryName = geo.properties.NAME || 
                     geo.properties.NAME_EN || 
                     geo.properties.ADMIN || 
                     geo.properties.NAME_LONG ||
                     geo.properties.SOVEREIGNT ||
                     geo.properties.NAME_SORT ||
                     geo.properties.NAME_AR ||
                     geo.properties.NAME_DE ||
                     geo.properties.NAME_ES ||
                     geo.properties.NAME_FR ||
                     geo.properties.NAME_HI ||
                     geo.properties.NAME_JA ||
                     geo.properties.NAME_KO ||
                     geo.properties.NAME_PT ||
                     geo.properties.NAME_RU ||
                     geo.properties.NAME_ZH

    // If still no name, try to use the geometry name or create a meaningful fallback
    if (!countryName) {
      // Try to get any text from the properties
      const allProps = Object.values(geo.properties).filter(val => 
        typeof val === 'string' && val.length > 2 && val.length < 50
      )
      countryName = allProps[0] || `Country ${countryCode}`
    }

    setHoveredCountry({
      name: countryName,
      count,
      x: event.clientX,
      y: event.clientY
    })
  }

  const handleMouseLeave = () => {
    setHoveredCountry(null)
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredCountry) {
      setHoveredCountry(prev => prev ? {
        ...prev,
        x: event.clientX,
        y: event.clientY
      } : null)
    }
  }

  const handleTouchStart = (geo: any, event: React.TouchEvent) => {
    const touch = event.touches[0]
    const countryCode = geo.properties.ISO_A2 || geo.properties.ISO_A3 || geo.properties.ADM0_A3 || 'XX'
    const count = dataMap.get(countryCode) || 0
    
    let countryName = geo.properties.NAME || 
                     geo.properties.NAME_EN || 
                     geo.properties.ADMIN || 
                     geo.properties.NAME_LONG ||
                     geo.properties.SOVEREIGNT ||
                     geo.properties.NAME_SORT ||
                     `Country ${countryCode}`

    setHoveredCountry({
      name: countryName,
      count,
      x: touch.clientX,
      y: touch.clientY
    })
  }

  return (
    <div className="world-map-container" onMouseMove={handleMouseMove}>
      <ComposableMap
        projectionConfig={{
          scale: mapScale,
          center: [0, 0]
        }}
        style={{
          width: '100vw',
          height: '100vh'
        }}
      >
        <Geographies geography={`${BASE_URL}world-110m.json`}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo) => {
              const countryCode = geo.properties.ISO_A2
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getCountryColor(countryCode)}
                  stroke="#ffffff"
                  strokeWidth={1}
                  onMouseEnter={(event) => handleMouseEnter(geo, event)}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={(event) => handleTouchStart(geo, event)}
                  onTouchEnd={handleMouseLeave}
                  style={{
                    default: {
                      fill: getCountryColor(countryCode),
                      stroke: '#ffffff',
                      strokeWidth: 1,
                      outline: 'none',
                    },
                    hover: {
                      fill: '#FFD700',
                      stroke: '#000000',
                      strokeWidth: 3,
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#FFD700',
                      stroke: '#000000',
                      strokeWidth: 3,
                      outline: 'none',
                    },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Custom Tooltip */}
      {hoveredCountry && (
        <div
          className="map-tooltip"
          style={{
            position: 'fixed',
            left: Math.min(hoveredCountry.x + 10, windowSize.width - 180),
            top: Math.max(hoveredCountry.y - 10, 10),
            zIndex: 1000,
            pointerEvents: 'none'
          }}
        >
          <div className="tooltip-content">
            <div className="tooltip-location">Location: {hoveredCountry.name || 'Unknown Country'}</div>
            <div className="tooltip-participants">
              Participants: {hoveredCountry.count}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WorldMap
