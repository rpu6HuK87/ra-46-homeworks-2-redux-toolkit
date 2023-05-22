import { createSlice } from '@reduxjs/toolkit'

const allFacts = [
  'прообразом Чубакки стал пёс режиссёра',
  'актёрам разрешили подобрать любимый цвет для своих световых мечей',
  'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
  'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
  'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок'
]

const factsSlice = createSlice({
  name: 'facts',
  initialState: {
    value: []
  },
  reducers: {
    somefacts(state, action) {
      const howmuch = Number(action.payload)
      state.value =
        howmuch && howmuch < 6
          ? allFacts
              .sort(() => Math.random() - 0.5)
              .slice(0, Number(action.payload))
          : []
    }
  }
})

export const { somefacts } = factsSlice.actions

export default factsSlice.reducer
