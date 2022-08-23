import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'

import baseTheme from '../styles/themes/base'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
