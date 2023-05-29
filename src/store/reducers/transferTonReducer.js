
const initialState = {
    address:'',
    balance:0,
    comment:'',
    status:false,
    loading:false
}
const transferTonReducer = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
        case 'snedTon':
            item.address = action.address
            item.status = false,
            item.balance = 0
            item.comment =''
          break
        case 'send_balance':
            item.balance = action.data
          break
        case 'send_comment':
            item.comment = action.data
            break
        case 'succes_transfer_ton':
          item.status = true
          item.loading = false
          break
        case 'start_transfer_ton':
          item.loading = true
          item.status = false
          break
        case 'clear_reansfer_ton':
          item.address = '',
          item.balance = 0,
          item.comment = ''
          item.status = false
          item.loading = false
          break
        default:
          break
      }
      return item
}
export default transferTonReducer