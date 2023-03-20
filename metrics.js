export const PLANET = {
  Mercury: 'Mercury',
  Venus: 'Venus',
  Earth: 'Earth',
  Mars: 'Mars',
  Jupiter: 'Jupiter',
  Saturn: 'Saturn',
  Uranus: 'Uranus',
  Neptune: 'Neptune',
  Pluto: 'Pluto',
  Sun: 'Sun'
}

export default {
  [PLANET.Mercury]: {
    angularVelocity: 88,
    radius: 2440,
    distanceFromSun: 3.5,
    texture: '2k_mercury.jpeg'
  } ,
  [PLANET.Venus]: {
    angularVelocity: 225,
    radius: 6052,
    distanceFromSun: 6.7,
    texture: '2k_venus_atmosphere.jpeg'
  },
  [PLANET.Earth]: {
    angularVelocity: 365,
    radius: 6371,
    distanceFromSun: 9.3,
    texture: '2k_earth_daymap.jpeg'
  },
  [PLANET.Mars]: {
    angularVelocity: 687,
    radius: 3390,
    distanceFromSun: 14.2,
    texture: '2k_mars.jpeg'
  },
  [PLANET.Jupiter]: {
    angularVelocity: 4346,
    radius: 69911,
    distanceFromSun: 48.4,
    texture: '2k_jupiter.jpeg'
  },
  [PLANET.Saturn]: {
    angularVelocity: 7825,
    radius: 58232,
    distanceFromSun: 88.9,
    texture: '2k_saturn.jpeg'
  },
  [PLANET.Uranus]: {
    angularVelocity: 30681,
    radius: 25362,
    distanceFromSun: 179,
    texture: '2k_uranus.jpeg'
  },
  [PLANET.Neptune]: {
    angularVelocity: 60193,
    radius: 24622,
    distanceFromSun: 288,
    texture: '2k_neptune.jpeg'
  },
  [PLANET.Pluto]: {
    angularVelocity: 120000,
    radius: 1188.3,
    distanceFromSun: 367,
    texture: '2k_pluto.jpeg'
  },
}