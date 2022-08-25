import React from 'react'
import * as S from './style'

type MainProps = {
  children?: React.ReactNode
}

const MainContainer = ({ children }: MainProps) => {
  return <S.StyledMain>{children}</S.StyledMain>
}

export default MainContainer
