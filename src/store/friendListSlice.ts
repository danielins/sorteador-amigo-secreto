import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchFriendlist } from "../features/friendlistAPI"
import { AppState } from "./store"

export interface Friend {
  name: string
}

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
    }
  }
})

export const { addFriend } = friendlistSlice.actions

export const selectFriendlist = (state: AppState) => state.friendlist

export default friendlistSlice.reducer