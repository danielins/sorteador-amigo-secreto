import { FriendList, initialState } from "../store/friendListSlice";

export async function fetchFriendlist(friendlist = initialState): Promise<{data: FriendList}> {
  const response = await fetch('/api/friendlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ friendlist })
  })

  const result = await response.json()

  return result
}
