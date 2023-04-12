const initialState = {
    price:'',
    price_$:'',
    img:'',
    title:'',
    text:''
}
const HeaderReducer = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
        case 'change_header_title':
          item.price = action.price
          item.price_$ = action.price_$
          break
        case 'nftInfo':
          item.img = action.img,
          item.title = action.title,
          item.text = action.text
          break
        default:
          break
      }
      return item
}
export default HeaderReducer