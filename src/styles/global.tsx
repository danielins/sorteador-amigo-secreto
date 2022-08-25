import { css, Global, useTheme } from '@emotion/react'

const GlobalStyles  = () => { 
  const theme = useTheme()
  return (
    <Global styles={
      css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          background: ${theme.background};
          border: ${theme.bodyBorder};
          font-family: ${theme.fontFamily}, Verdana, Geneva, Tahoma, sans-serif;
        }
      `
    } />
  )
}

export { GlobalStyles }