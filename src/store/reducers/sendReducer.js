const initialState = {
    token:'',
    activeAdress:''
  };
  
  const SendReducer = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
      case 'send_token':
        item.token = action.value
        break
      case 'active_address':
        item.activeAdress = action.value
        break
      default:
        break
    }
    return item
  };
  export default SendReducer;
  