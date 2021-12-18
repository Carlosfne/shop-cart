import 'styled-components'
import { themeColors } from './colors'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof themeColors
  } 
}
