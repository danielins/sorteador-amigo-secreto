import shuffle from "just-shuffle"
import { drawnList, Friend } from "../store/friendListSlice";



export const drawPair = (friendlist: Friend[]):drawnList => {
  const shuffled = shuffle(friendlist)
  const result = new Map()

  for (let i = 0; i < friendlist.length; i++){

    const friendIndex = i === (friendlist.length - 1) ? 0 : i + 1;
    result.set(shuffled[i].name, shuffled[friendIndex].name)

  }

  return result
}