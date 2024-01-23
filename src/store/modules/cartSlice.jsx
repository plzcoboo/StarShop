import { createSlice } from '@reduxjs/toolkit'
import productData from '../../assets/api/cartdata'

const initialState = {
  carts : [],
  cartTotal : 0,
  products : productData,
  chkCart :[]
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCart: (state,action) => {
      state.carts.push(action.payload)
    },
    removeCart:(state, action) => {
      state.carts = state.carts.filter(item => item.id !== action.payload)
    },
    totalCart:(state, action) => {
      state.chkCart = state.carts.filter(item => item.ischk === true)
      state.cartTotal = state.chkCart.reduce((acc, cur) => acc + cur.price , 0)
    },  
    cartsEdit:(state, action) => {
      let newItem = state.carts.find(item => item.id === action.payload.id)
      let original = productData.find(item => item.id === action.payload.id)
      if(newItem){
        newItem.price = original.price * action.payload.count
      }
    },
    changeChkState:(state,action) => {
      state.carts = state.carts.map(item => item.id === action.payload.id ? {...item, ischk:!action.payload.ischk}:item)
    },
    allRemoveCart:(state,action) => {
      state.carts = []
    },
    removeSelectCart:(state,action) => {
      state.carts = state.carts.filter(item => item.ischk === !true)
    },
    allCheck:(state,action) => {
      if(action.payload){
        state.carts = state.carts.map(item => item.ischk !== false ? {...item, ischk:false}:item)
      } else {
        state.carts = state.carts.map(item => item.ischk !== true ? {...item, ischk:true}:item)
      }
    }
  },
})

export const { addCart,removeCart,totalCart,sortCart,resetCart,searchCart,cartsEdit,changeChkState,allRemoveCart,removeSelectCart,allCheck} = cartSlice.actions
export default cartSlice.reducer