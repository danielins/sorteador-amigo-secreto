import { useAppSelector } from "../hooks"
import { selectFriendlist } from "../store/friendListSlice"

export const getFriendById = (id) => {
  const friendlist = useAppSelector(selectFriendlist)
  return friendlist.map(friend => friend.id).indexOf(id)
}