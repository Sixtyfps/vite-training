import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getDecks() {
    return instance.get<ResponseType>('/v2/decks')
  },
  createDeck(name: string) {
    return instance.post<DeckType>('/v1/decks', { name: name })
  },
}

//-----------TYPES-------------
export type AuthorType = {
  id: string
  name: string
}

export type DeckType = {
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type ResponseType = {
  items: Array<DeckType>
  pagination: PaginationType
  maxCardsCount: number
}
