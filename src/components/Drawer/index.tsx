import { useAppSelector } from '../../hooks'
import { selectFriendlist } from '../../store/friendListSlice'

const Drawer = () => {
  const friendlist = useAppSelector(selectFriendlist)

  return (
    <form>
      <select name="chossing" id="choosing">
        {friendlist.map((friend, index) => {
          return (
            <option key={index} value={friend.name}>
              {friend.name}
            </option>
          )
        })}
      </select>
    </form>
  )
}

export default Drawer
