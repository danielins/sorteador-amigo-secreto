import Image from 'next/image';
import * as S from './style'

import logo from '../../../public/images/logo.png'
import participante from '../../../public/images/participante.png'

const Header: React.FC = () => {
  return (
    <S.HeaderStyled>
      <Image width={351} height={117} src={ logo } alt="Sorteador de Amigo Secreto"/>
      <Image src={ participante } alt="Amigo Secreto com Presente"/>
    </S.HeaderStyled>
  )
}

export default Header;