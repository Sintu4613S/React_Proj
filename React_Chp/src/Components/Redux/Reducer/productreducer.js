const initialState = {
  products: [],
}
export const productReducer = (state = initialState, action) => {
  if (action.type === 'ADD_TO_PRODUCT') {
    console.log('add to product trigger hua h')
    return state
  }
  else {
    return state;
  }

}