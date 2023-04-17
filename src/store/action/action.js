export const set_password = (password) =>{
    return {
        type:'set_password',
        password,
    }
}
export const change_header_title = (price,price_$) => {
    return {
        type:'change_header_title',
        price,
        price_$,
    }
}

export const nftInfo = (img,title,text) =>{
    return {
        type:'nftInfo',
        img,
        title,
        text,
    }
}
export const SendToken = (value) => {
    return {
        type:'send_token',
        value
    }
}
export const clear_password = () => {
    return {
        type:'clear_password'
    }
}