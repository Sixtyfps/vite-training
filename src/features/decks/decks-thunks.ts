import { addDeckAC, setDecksAC } from './decks-reducer.ts'
import { decksAPI } from './decks-api.ts'
import { AppThunk } from '../../app/store.ts'
import {Dispatch} from "redux";

export const fetchDecksTC = (): AppThunk => async (dispatch) => {
  try {
    const res = await decksAPI.getDecks()
    dispatch(setDecksAC(res.data.items))
  } catch (e) {
    throw new Error()
  }
}

export const addDeckTC = (name: string) => (dispatch: Dispatch) => {
    return decksAPI.createDeck(name).then((res) => {
      dispatch(addDeckAC(res.data))
    })
  }
