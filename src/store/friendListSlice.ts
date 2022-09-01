import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchFriendlist } from "../features/friendlistAPI"
import { getFriendById } from "../shared/utils"
import { AppState } from "./store"

export interface Friend {
  id: string,
  name: string,
  pair?: string
}
export type drawnList = Map<string, string>

export const initialState = [] as Friend[]

export const addFriendAsync = createAsyncThunk(
  'friendlist/fetchList',
  async (friendlist: Friend[]) => {
    const response = await fetchFriendlist(friendlist)
    return response.data
  }
)

export const friendlistSlice = createSlice({
  name: 'friendlist',
  initialState,
  reducers: {
    addFriend: (state: Friend[], action: PayloadAction<Friend>) => {
      state.push(action.payload)
    },
    setPairs: (state: Friend[], action: PayloadAction<drawnList>) => {
      state.map(friend => {
        friend.pair = action.payload.get(friend.name)
        return friend
      })
    }
  }
})

export const { addFriend, setPairs } = friendlistSlice.actions

export const selectFriendlist = (state: AppState) => state.friendlist

export default friendlistSlice.reducer