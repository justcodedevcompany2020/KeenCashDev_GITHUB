const initialState = {
    price:'',
    price_$:''
}
const HeaderReducer = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
        case 'change_header_title':
          item.price = action.price
          item.price_$ = action.price_$
          break
        default:
          break
      }
      return item
}
export default HeaderReducer