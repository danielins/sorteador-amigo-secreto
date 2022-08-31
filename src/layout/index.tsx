import Head from 'next/head'
import Header from '../components/Header'
import MainContainer from '../components/Main'
import { useTheme } from '@emotion/react'

type LayoutProps = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'Sorteador para Amigo Secreto'
}: LayoutProps) => {
  const theme = useTheme()
  return (
    <div>
      <Head>
        <title>{title}</title>

        <link
          href={`https://fonts.googleapis.com/css2?family=${theme.fontFamily}&display=swap`}
          rel="stylesheet"
        />
      </Head>
      <main>
        <Header />
        <MainContainer>{children}</MainContainer>
      </main>
    </div>
  )
}

export default Layout
