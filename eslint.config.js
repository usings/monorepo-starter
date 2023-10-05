import { defineFlatConfig, presetBasic } from 'eslint-presets'

export default defineFlatConfig([
  presetBasic({ enableTs: true }),
])
