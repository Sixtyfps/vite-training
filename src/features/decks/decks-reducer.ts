import { DeckType } from './decks-api.ts'

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

export type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return {
        ...state,
        decks: action.decks,
      }
    case 'ADD-DECK':
      return {
        ...state,
        decks: [action.deck, ...state.decks],
      }
    default:
      return state
  }
}

export type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>

export const setDecksAC = (decks: Array<DeckType>) => ({ type: 'SET-DECKS' as const, decks })
export const addDeckAC = (deck: DeckType) => ({ type: 'ADD-DECK' as const, deck })
