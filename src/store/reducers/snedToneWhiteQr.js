const initialState = {
    opre:false,
  };
  
  const snedToneWhiteQr = (state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
      case 'send_ton_white_qr':
        item.open = true
        break
      case 'clear_ton_white_qr':
        console.log(333)
        item.open = false
        break
      default:
        break
    }
    return item
  };
  export default snedToneWhiteQr;
  