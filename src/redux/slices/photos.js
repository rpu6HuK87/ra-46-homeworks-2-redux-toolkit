import { createSlice } from '@reduxjs/toolkit'

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    value: []
  },
  reducers: {
    addphoto(state, action) {
      state.value.unshift(action.payload)
    },
    removephoto(state, action) {
      state.value = state.value.filter((img) => img !== action.payload)
    }
  }
})

export const { addphoto, removephoto } = photosSlice.actions

export default photosSlice.reducer
