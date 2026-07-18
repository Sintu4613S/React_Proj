const initialState = {
  cartProducts: [],
  cart: []
}
export const cartReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    console.log("Product cart m add hua h")
    return state
  }
  else {
    return state
  }
}