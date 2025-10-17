import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

interface CountryData {
  countryCode: string
  count: number
}

interface WorldMapProps {
  data: CountryData[]
}

const WorldMap: React.FC<WorldMapProps> = ({ data }) => {
  const [hoveredCountry, setHoveredCountry] = useState<{
    name: string
    count: number
    x: number
    y: number
  } | null>(null)

  // Create a map of country codes to counts for quick lookup
  const dataMap = new Map(data.map(item => [item.countryCode, item.count]))


  // Specific colors for specific countries
  const countryColors: { [key: string]: string } = {
    'IN': '#00FF00', // India - Bright Green
    'PK': '#8B4513', // Pakistan - Brown
    'CN': '#0000FF', // China - Blue
    'RU': '#FF0000', // Russia - Red
    'US': '#FFD700', // USA - Gold
    'BR': '#FFA500', // Brazil - Orange
    'AU': '#FF69B4', // Australia - Hot Pink
    'CA': '#00CED1', // Canada - Dark Turquoise
    'DE': '#800080', // Germany - Purple
    'FR': '#FF1493', // France - Deep Pink
    'GB': '#0000FF', // UK - Blue
    'JP': '#FF6347', // Japan - Tomato
    'KR': '#00FF00', // South Korea - Bright Green
    'IT': '#FF4500', // Italy - Orange Red
    'ES': '#FF8C00', // Spain - Dark Orange
    'MX': '#00FF7F', // Mexico - Spring Green
    'AR': '#1E90FF', // Argentina - Dodger Blue
    'ZA': '#FFD700', // South Africa - Gold
    'EG': '#FFA500', // Egypt - Orange
    'NG': '#32CD32', // Nigeria - Lime Green
    'KE': '#FF6347', // Kenya - Tomato
    'MA': '#8B4513', // Morocco - Saddle Brown
    'TH': '#FF69B4', // Thailand - Hot Pink
    'VN': '#00CED1', // Vietnam - Dark Turquoise
    'ID': '#228B22', // Indonesia - Forest Green
    'MY': '#FFD700', // Malaysia - Gold
    'SG': '#FF0000', // Singapore - Red
    'PH': '#0000FF', // Philippines - Blue
    'BD': '#8B4513', // Bangladesh - Brown
    'LK': '#32CD32', // Sri Lanka - Lime Green
    'NP': '#FF6347', // Nepal - Tomato
    'AF': '#800080', // Afghanistan - Purple
    'IR': '#FF4500', // Iran - Orange Red
    'IQ': '#00FF7F', // Iraq - Spring Green
    'SA': '#1E90FF', // Saudi Arabia - Dodger Blue
    'AE': '#FFD700', // UAE - Gold
    'TR': '#FF1493', // Turkey - Deep Pink
    'IL': '#32CD32', // Israel - Lime Green
    'JO': '#FF6347', // Jordan - Tomato
    'LB': '#8B4513', // Lebanon - Brown
    'SY': '#FF0000', // Syria - Red
    'YE': '#0000FF', // Yemen - Blue
    'OM': '#00CED1', // Oman - Dark Turquoise
    'KW': '#FF69B4', // Kuwait - Hot Pink
    'QA': '#FF8C00', // Qatar - Dark Orange
    'BH': '#00FF7F', // Bahrain - Spring Green
    'CY': '#1E90FF', // Cyprus - Dodger Blue
    'GR': '#FFD700', // Greece - Gold
    'BG': '#FFA500', // Bulgaria - Orange
    'RO': '#32CD32', // Romania - Lime Green
    'HU': '#FF6347', // Hungary - Tomato
    'PL': '#8B4513', // Poland - Brown
    'CZ': '#FF1493', // Czech Republic - Deep Pink
    'SK': '#000080', // Slovakia - Navy Blue
    'AT': '#FF4500', // Austria - Orange Red
    'CH': '#00FF7F', // Switzerland - Spring Green
    'LI': '#1E90FF', // Liechtenstein - Dodger Blue
    'BE': '#FFD700', // Belgium - Gold
    'NL': '#FFA500', // Netherlands - Orange
    'LU': '#32CD32', // Luxembourg - Lime Green
    'DK': '#FF6347', // Denmark - Tomato
    'SE': '#8B4513', // Sweden - Brown
    'NO': '#FF1493', // Norway - Deep Pink
    'FI': '#000080', // Finland - Navy Blue
    'IS': '#FF4500', // Iceland - Orange Red
    'IE': '#00FF7F', // Ireland - Spring Green
    'PT': '#1E90FF', // Portugal - Dodger Blue
    'AD': '#FFD700', // Andorra - Gold
    'MC': '#FFA500', // Monaco - Orange
    'SM': '#32CD32', // San Marino - Lime Green
    'VA': '#FF6347', // Vatican - Tomato
    'MT': '#8B4513', // Malta - Brown
    'AL': '#FF1493', // Albania - Deep Pink
    'MK': '#000080', // North Macedonia - Navy Blue
    'ME': '#FF4500', // Montenegro - Orange Red
    'RS': '#00FF7F', // Serbia - Spring Green
    'BA': '#1E90FF', // Bosnia and Herzegovina - Dodger Blue
    'HR': '#FFD700', // Croatia - Gold
    'SI': '#FFA500', // Slovenia - Orange
    'EE': '#32CD32', // Estonia - Lime Green
    'LV': '#FF6347', // Latvia - Tomato
    'LT': '#8B4513', // Lithuania - Brown
    'BY': '#FF1493', // Belarus - Deep Pink
    'UA': '#000080', // Ukraine - Navy Blue
    'MD': '#FF4500', // Moldova - Orange Red
    'GE': '#00FF7F', // Georgia - Spring Green
    'AM': '#1E90FF', // Armenia - Dodger Blue
    'AZ': '#FFD700', // Azerbaijan - Gold
    'KZ': '#FFA500', // Kazakhstan - Orange
    'UZ': '#32CD32', // Uzbekistan - Lime Green
    'TM': '#FF6347', // Turkmenistan - Tomato
    'TJ': '#8B4513', // Tajikistan - Brown
    'KG': '#FF1493', // Kyrgyzstan - Deep Pink
    'MN': '#000080', // Mongolia - Navy Blue
    'KP': '#FF4500', // North Korea - Orange Red
    'TW': '#00FF7F', // Taiwan - Spring Green
    'HK': '#1E90FF', // Hong Kong - Dodger Blue
    'MO': '#FFD700', // Macau - Gold
    'MM': '#FFA500', // Myanmar - Orange
    'LA': '#32CD32', // Laos - Lime Green
    'KH': '#FF6347', // Cambodia - Tomato
    'BN': '#8B4513', // Brunei - Brown
    'TL': '#FF1493', // East Timor - Deep Pink
    'FJ': '#000080', // Fiji - Navy Blue
    'PG': '#FF4500', // Papua New Guinea - Orange Red
    'SB': '#00FF7F', // Solomon Islands - Spring Green
    'VU': '#1E90FF', // Vanuatu - Dodger Blue
    'NC': '#FFD700', // New Caledonia - Gold
    'PF': '#FFA500', // French Polynesia - Orange
    'WS': '#32CD32', // Samoa - Lime Green
    'TO': '#FF6347', // Tonga - Tomato
    'KI': '#8B4513', // Kiribati - Brown
    'TV': '#FF1493', // Tuvalu - Deep Pink
    'NR': '#000080', // Nauru - Navy Blue
    'PW': '#FF4500', // Palau - Orange Red
    'FM': '#00FF7F', // Micronesia - Spring Green
    'MH': '#1E90FF', // Marshall Islands - Dodger Blue
    'CK': '#FFD700', // Cook Islands - Gold
    'NU': '#FFA500', // Niue - Orange
    'TK': '#32CD32', // Tokelau - Lime Green
    'AS': '#FF6347', // American Samoa - Tomato
    'GU': '#8B4513', // Guam - Brown
    'MP': '#FF1493', // Northern Mariana Islands - Deep Pink
    'VI': '#000080', // US Virgin Islands - Navy Blue
    'PR': '#FF4500', // Puerto Rico - Orange Red
    'DO': '#00FF7F', // Dominican Republic - Spring Green
    'HT': '#1E90FF', // Haiti - Dodger Blue
    'CU': '#FFD700', // Cuba - Gold
    'JM': '#FFA500', // Jamaica - Orange
    'TT': '#32CD32', // Trinidad and Tobago - Lime Green
    'BB': '#FF6347', // Barbados - Tomato
    'GD': '#8B4513', // Grenada - Brown
    'LC': '#FF1493', // Saint Lucia - Deep Pink
    'VC': '#000080', // Saint Vincent and the Grenadines - Navy Blue
    'AG': '#FF4500', // Antigua and Barbuda - Orange Red
    'KN': '#00FF7F', // Saint Kitts and Nevis - Spring Green
    'DM': '#1E90FF', // Dominica - Dodger Blue
    'BS': '#FFD700', // Bahamas - Gold
    'BZ': '#FFA500', // Belize - Orange
    'GT': '#32CD32', // Guatemala - Lime Green
    'SV': '#FF6347', // El Salvador - Tomato
    'HN': '#8B4513', // Honduras - Brown
    'NI': '#FF1493', // Nicaragua - Deep Pink
    'CR': '#000080', // Costa Rica - Navy Blue
    'PA': '#FF4500', // Panama - Orange Red
    'CO': '#00FF7F', // Colombia - Spring Green
    'VE': '#1E90FF', // Venezuela - Dodger Blue
    'GY': '#FFD700', // Guyana - Gold
    'SR': '#FFA500', // Suriname - Orange
    'UY': '#32CD32', // Uruguay - Lime Green
    'PY': '#FF6347', // Paraguay - Tomato
    'BO': '#8B4513', // Bolivia - Brown
    'PE': '#FF1493', // Peru - Deep Pink
    'EC': '#000080', // Ecuador - Navy Blue
    'CL': '#FF4500',
    'FK': '#00FF7F',
    'GS': '#1E90FF',
  }

  const getCountryColor = (countryCode: string) => {
    // Return specific color for the country, or light gray if not defined
    const color = countryColors[countryCode] || '#d3d3d3'
    console.log('Country:', countryCode, 'Color:', color)
    return color
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

    console.log('Hovering over:', countryName, 'Code:', countryCode, 'All Properties:', Object.keys(geo.properties), 'Values:', Object.values(geo.properties))

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

  return (
    <div className="world-map-container" onMouseMove={handleMouseMove}>
      <ComposableMap
        projectionConfig={{
          scale: 200,
          center: [0, 0]
        }}
        style={{
          width: '100vw',
          height: '100vh'
        }}
      >
        <Geographies geography="/world-110m.json">
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
            left: hoveredCountry.x + 10,
            top: hoveredCountry.y - 10,
            zIndex: 1000,
            pointerEvents: 'none'
          }}
        >
          <div className="tooltip-content">
            <div className="tooltip-location">Location: {hoveredCountry.name || 'Unknown Country'}</div>
            <div className="tooltip-participants">
              Participants: 
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WorldMap
