import { css, Global, useTheme } from '@emotion/react'

const GlobalStyles  = () => { 
  const theme = useTheme()
  return (
    <Global styles={
      css`
        body {
          background: ${theme.background};
          font-family: ${theme.fontFamily}, Verdana, Geneva, Tahoma, sans-serif;
        }
      `
    } />
  )
}

export { GlobalStyles }