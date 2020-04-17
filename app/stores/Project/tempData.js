import Pong3dRenderer from 'Renderers/Pong3dRenderer'
import { selectRandomUnique } from 'utils/unique'

const colors = {
  arr: ['rgb(255,200,240)', 'rgb(205,235,255)', 'rgb(210,255,230)', 'rgb(245,255,195)', 'rgb(255,220,220)'],
  picked: []
}
const images = {
  arr: ['/images/svg/cool.svg', '/images/svg/doh.svg', '/images/svg/mouth.svg', '/images/svg/nerdy.svg', '/images/svg/wave.svg', '/images/svg/tree.svg'],
  picked: []
}

const Pong3d = {
  id: 1,
  url: 'let-me-see-that-pong',
  name: 'LET ME SEE THAT PONG',
  description: '3D PONG / ARCADE',
  category: 'project',
  status: 'INPROGRESS',
  renderer: Pong3dRenderer,
  image: selectRandomUnique(images),
  bgColor: selectRandomUnique(colors)
}

const FrisbeeOrFall = {
  id: 2,
  url: 'frisbee-game-tbd',
  name: 'FRISBEE ARCADE GAME',
  description: 'ARCADE / UNKNOWN',
  category: 'project',
  status: 'TBD',
  image: selectRandomUnique(images),
  bgColor: selectRandomUnique(colors)
}

const TurboRockets = {
  id: 3,
  url: 'rocket-arena-game-tbd',
  name: 'ROCKET ARENA GAME',
  description: 'ARENA / PVP / ARCADE',
  category: 'project',
  status: 'TBD',
  image: selectRandomUnique(images),
  bgColor: selectRandomUnique(colors)
}

const NA1 = {
  id: 4,
  url: 'not-yet',
  name: 'N/A',
  description: 'Not available',
  category: 'project',
  status: 'NA',
  image: selectRandomUnique(images),
  bgColor: selectRandomUnique(colors)
}

const NA2 = {
  id: 5,
  url: 'not-yet',
  name: 'N/A',
  description: 'Not available',
  category: 'project',
  status: 'NA',
  image: selectRandomUnique(images),
  bgColor: selectRandomUnique(colors)
}

const NA3 = {
  id: 6,
  url: 'not-yet',
  name: 'N/A',
  description: 'Not available',
  category: 'project',
  status: 'NA',
  image: selectRandomUnique(images),
  bgColor: selectRandomUnique(colors)
}

export default [Pong3d, FrisbeeOrFall, TurboRockets, NA1, NA2, NA3]
