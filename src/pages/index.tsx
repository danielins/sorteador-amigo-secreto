import React from 'react'
import Head from 'next/head'
import { useTheme } from '@emotion/react'
import Header from '../components/Header'
import Form from '../components/Form'

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
        <Header />
        <Form />
      </main>
    </div>
  )
}

export default Home
