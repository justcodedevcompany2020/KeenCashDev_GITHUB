
const initialState = {
    loading:false,
    balance:'',
    history:[],
    historyLoading:false,
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
        case 'start_get_history':
          item.historyLoading = true
          break
        case 'successs_get_hisstory':
            item.history = action.data
            item.historyLoading = false
            break
        default:
          break
      }
      return item
}
export default getBalanceReducer