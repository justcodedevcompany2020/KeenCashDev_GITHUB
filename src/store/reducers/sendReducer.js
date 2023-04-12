const initialState = {
    token:'',
  };
  
  const SendReducer = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
      case 'send_token':
        item.token = action.value
        break
      default:
        break
    }
    return item
  };
  export default SendReducer;
  