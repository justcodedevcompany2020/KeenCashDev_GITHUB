
const initialState = {
    loading:false,
    balance:''
}
const getBalanceReducer = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
        case 'start_get_balance':
            item.loading = true
          break
        case 'success_get_balance':
            item.loading = false
            item.balance = action.data
          break
        case 'error_get_balance':
            item.loading = false
            break
        default:
          break
      }
      return item
}
export default getBalanceReducer