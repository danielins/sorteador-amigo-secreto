import '@emotion/react'
import baseTheme from './themes/base'

declare module '@emotion/react' {
  type ThemeModel = typeof baseTheme
  export interface Theme extends ThemeModel {}
}