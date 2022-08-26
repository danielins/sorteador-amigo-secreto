import { useAppSelector } from '../../hooks'
import { selectFriendlist } from '../../store/friendListSlice'

const FriendList = () => {
  const friendlist = useAppSelector(selectFriendlist)

  return (
    <ul>
      {friendlist.map(friend => {
        return <li>{friend.name}</li>
      })}
    </ul>
  )
}

export default FriendList
