import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'

import baseTheme from '../styles/themes/base'
import { GlobalStyles } from '../styles/themes/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
