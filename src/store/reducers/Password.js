const initialState = {
    password:'',
  };
  
  const Password = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
      case 'set_password':
        item.password = action.password
        break
      case 'clear_password':
        item.password = ''
        break
      default:
        break
    }
    return item
  };
  export default Password;
  