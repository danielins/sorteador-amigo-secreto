import React, { useState } from 'react'
import { useAppSelector } from '../../hooks'
import { getFriendById } from '../../shared/utils'
import { selectFriendlist } from '../../store/friendListSlice'

const Drawer = () => {
  const friendlist = useAppSelector(selectFriendlist)
  const [currentChoosing, setCurrentChoosing] = useState('')
  const [currentPairing, setCurrentPairing] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPairing('')
    setCurrentChoosing(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setCurrentPairing(getFriendById(friendlist, currentChoosing).pair)
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        required
        name="chossing"
        id="choosing"
        placeholder="Selecione seu nome"
        value={currentChoosing}
        onChange={handleChange}
      >
        <option value="">Selecione seu nome:</option>
        {friendlist.map((friend, index) => {
          return (
            <option key={index} value={friend.id}>
              {friend.name}
            </option>
          )
        })}
      </select>
      <button>Sortear!</button>
      {currentPairing && (
        <p role="alert">Seu amigo secreto é {currentPairing}</p>
      )}
    </form>
  )
}

export default Drawer
