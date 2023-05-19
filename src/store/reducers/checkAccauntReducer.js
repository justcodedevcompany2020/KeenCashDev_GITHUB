
const initialState = {
    loading:false,
    status:'not_checked',
}
const checkAccauntReducer = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
        case 'start_check_account':
            item.loading = true
            item.status = 'not_checked'
          break
        case 'succes_check_account':
            item.loading = false
            item.status = 'checked'
          break
        case 'error_check_account':
            item.status = 'error_checked'
            item.loading = false
            break
        case 'clear_error_check_account':
          item.loading = false
          item.status = 'not_checked'
          break
        default:
          break
      }
      return item
}
export default checkAccauntReducer