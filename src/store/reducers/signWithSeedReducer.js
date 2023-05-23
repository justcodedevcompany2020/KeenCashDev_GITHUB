
const initialState = {
    address:'',
    seed:'',
    ID:'',
    loading:false,
    error:false
}
const signWithSeedReducer = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
        case 'start_seed_white_seed':
            item.loading = true
          break
        case 'success_seed_white_seed':
            item.loading = false
            item.address = action.data.Address
            item.seed = action.data.Seed
            item.ID = action.data.ID
          break
        case 'error_seed_white_seed':
            item.loading = false
            item.error  = true
            break
        case 'close_seed_popOp':
            item.error = false
            break
        case 'clear_import_data':
            item.address = '',
            item.seed = '',
            item.loading = false,
            item.error = false
            break
        default:
          break
      }
      return item
}
export default signWithSeedReducer