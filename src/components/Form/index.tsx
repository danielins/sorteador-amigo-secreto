import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import uuid from 'react-uuid'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { addFriend, selectFriendlist } from '../../store/friendListSlice'
import FriendList from '../FriendList'
import { useDrawer } from '../../hooks/useDrawer'

import * as S from './style'

const Form = () => {
  const dispatch = useAppDispatch()
  const friendlist = useAppSelector(selectFriendlist)

  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const drawPairs = useDrawer()

  const alreadyHasName = name =>
    friendlist.filter(fr => fr.name === name).length ? true : false

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    const newFriend = { id: uuid(), name }

    if (alreadyHasName(name)) {
      setError('Nomes iguais não são permitidos')
      setTimeout(() => {
        setError('')
      }, 5000)
    } else {
      dispatch(addFriend(newFriend))
      setName('')
      inputRef.current?.focus()
    }
  }

  const handleClick = () => {
    drawPairs()
    router.push('/draw')
  }

  return (
    <S.StyledWrapper>
      <S.StyledForm onSubmit={submitHandler}>
        <S.StyledInputField
          ref={inputRef}
          value={name}
          onChange={event => setName(event.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <S.StyledSubmitButton disabled={!name}>Adicionar</S.StyledSubmitButton>
        {error && <p role="alert">{error}</p>}
      </S.StyledForm>
      <FriendList />
      <S.StyledStartButton
        disabled={friendlist.length < 3 ? true : false}
        onClick={() => handleClick()}
      >
        Iniciar a brincadeira!
      </S.StyledStartButton>
    </S.StyledWrapper>
  )
}

export default Form
