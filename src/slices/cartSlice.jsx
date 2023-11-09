import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'counter',
  initialState: {
    cartInitial: []
  },
  reducers: {
    cartTotal: (state,action) => {
      const find = state.cartInitial.findIndex((item) => item.id == action.payload.id)
      if(find >= 0){
        console.log('success');
      }else{
        state.cartInitial.push(action.payload)
      }
    },
  }
})


export const {cartTotal} = cartSlice.actions

export default cartSlice.reducer