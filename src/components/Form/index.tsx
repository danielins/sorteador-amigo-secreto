import { useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { addFriend, selectFriendlist } from '../../store/friendListSlice'

const Form = () => {
  const dispatch = useAppDispatch()
  const friendlist = useAppSelector(selectFriendlist)

  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const alreadyHasName = name =>
    friendlist.filter(fr => fr.name === name).length ? true : false

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    const newFriend = { name }

    if (alreadyHasName(name)) {
      setError('Nomes iguais não são permitidos')
    } else {
      dispatch(addFriend(newFriend))
      setName('')
      inputRef.current?.focus()
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        ref={inputRef}
        value={name}
        onChange={event => setName(event.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!name}>Adicionar</button>
      {error && <p role="alert">{error}</p>}
    </form>
  )
}

export default Form
