import React from 'react'
import Head from 'next/head'
import { useTheme } from '@emotion/react'

const Home: React.FC = () => {
  const theme = useTheme()
  return (
    <div>
      <Head>
        <title>Sorteador para Amigo Secreto</title>

        <link
          href={`https://fonts.googleapis.com/css2?family=${theme.fontFamily}&display=swap`}
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1>Hello World</h1>
        <p>{theme.fontFamily}</p>
      </main>
    </div>
  )
}


export default Home;