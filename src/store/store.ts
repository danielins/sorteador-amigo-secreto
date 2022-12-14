import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import friendlistReducer from './friendListSlice'
import { enableMapSet } from 'immer'

enableMapSet();

export function makeStore(){
  return configureStore({
    reducer: { 
      friendlist: friendlistReducer,
    }
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store