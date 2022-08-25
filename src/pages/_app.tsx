import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'

import baseTheme from '../styles/themes/base'
import { GlobalStyles } from '../styles/global'
import { Provider } from 'react-redux'

import store from '../store/store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
