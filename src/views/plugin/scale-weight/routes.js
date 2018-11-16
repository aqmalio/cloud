import ScaleWeight from './Index'
import ScaleWeightTruck from './truck/routes'
import ScaleWeightItem from './item/routes'

export default [
  { path: '/plugin/scale-weight', name: 'ScaleWeight', component: ScaleWeight },
  ...ScaleWeightTruck,
  ...ScaleWeightItem
]
