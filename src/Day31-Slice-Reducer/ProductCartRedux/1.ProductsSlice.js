import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [], 
  cart:[],
}

const storeSlice = createSlice({
  name: 'storeSlice',
  initialState,
  reducers: {
    storeAPIData: (state,action) => {
      console.log(action);
        state.product = action.payload
    },
    storeAddToCart:(state,action)=>{
        state.cart = [...state.cart, action.payload]; 
    },
    storeRemoveFromCartQty: (state,action)=>{
      state.cart = state.cart.filter((product) => {
        if(product.id !== action.payload.id){
          return product;
        }
        else{
          product.quantity-- ;
          console.log(product);
          return product;
      }
      });
    },
      storeAddToCartQty:(state,action)=>{
        action.payload.quantity+=1
        state.cart = [...state.cart, action.payload]; 
    }

    //condiition - quantity update hone h on increment-decrement of items
    //check for duplicate
  },

})
export const { storeAPIData,storeAddToCart, storeRemoveFromCartQty, storeAddToCartQty} = storeSlice.actions

export default storeSlice.reducer