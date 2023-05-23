
const initialState = {
    loading:false,
    success:false,
    address:'',
    ID:'',
    seed:[],
    address:[]
}
const createWalletReducer = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
        case 'start_create_wallet':
            item.loading = true
          break
        case 'succes_create_wallet':
            item.loading = false
            item.success = true
            item.address = action.data.Address
            item.ID = action.data.ID
            item.seed = action.data.Seed.split(" ")
          break
        case 'error_create_wallet':
            item.loading = false
            item.success = false
            break
        case 'checkToken':
            item.address = action.data
            break
        case 'clear_create_new_walllet':
            item.loading = false
            item.success = false
            item.address = ''
            item.ID =''
            item.seed =[]
            item.address = []
        default:
          break
      }
      return item
}
export default createWalletReducer