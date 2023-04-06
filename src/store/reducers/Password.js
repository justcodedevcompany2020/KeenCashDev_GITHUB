const initialState = {
    password:'',
    passwordLength:'',

  };
  
  const Password = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
      case 'set_password':
        item.password = action.password,
        passwordLength = action.password.length
        break
      default:
        break
    }
    return item
  };
  export default Password;
  