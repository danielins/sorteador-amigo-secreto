import { useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { addFriend, selectFriendlist } from '../../store/friendListSlice'

const Form = () => {
  const dispatch = useAppDispatch()
  const friendlist = useAppSelector(selectFriendlist)

  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(addFriend({ name }))

    setName('')
    inputRef.current?.focus()
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
    </form>
  )
}

export default Form
