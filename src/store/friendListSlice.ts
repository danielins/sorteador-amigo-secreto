import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchFriendlist } from "../features/friendlistAPI"
import { AppState } from "./store"

export interface Friend {
  name: string
}

export interface FriendList {
  friendlist: Friend[]
}

export const initialState: FriendList = {
  friendlist: []
}

export const addFriendAsync = createAsyncThunk(
  'friendlist/fetchList',
  async (friendlist: FriendList) => {
    const response = await fetchFriendlist(friendlist)
    return response.data
  }
)

export const friendlistSlice = createSlice({
  name: 'friendlist',
  initialState,
  reducers: {
    addFriend: (state, action: PayloadAction<Friend>) => {
      state.friendlist.push(action.payload)
    }
  }
})

export const { addFriend } = friendlistSlice.actions

export const friendlistSelector = (state: AppState) => state.friendlist

export default friendlistSlice.reducer