import { useAppSelector } from "../hooks"
import { Friend, selectFriendlist } from "../store/friendListSlice"

export const getFriendById = (friendlist: Friend[], id: string):Friend => {
  return friendlist.filter(friend => friend.id === id)[0]
}