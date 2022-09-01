import { useDispatch } from "react-redux"
import { useAppSelector } from "."
import { drawPair } from "../shared/drawPair"
import { setPairs, selectFriendlist } from "../store/friendListSlice"

export const useDrawer = () => {
  const dispatch = useDispatch()
  const friendlist = useAppSelector(selectFriendlist)

  return () => {

    dispatch(setPairs(drawPair(friendlist)))

  }
}