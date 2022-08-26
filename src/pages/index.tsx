import React from 'react'
import Head from 'next/head'
import { useTheme } from '@emotion/react'
import Header from '../components/Header'
import Form from '../components/Form'
import MainContainer from '../components/Main'
import FriendList from '../components/FriendList'

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
        <MainContainer>
          <Form />
          <FriendList />
        </MainContainer>
      </main>
    </div>
  )
}

export default Home
