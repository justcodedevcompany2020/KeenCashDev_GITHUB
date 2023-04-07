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