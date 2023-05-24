export const succes_create_wallet = (data) => {
    return {
        type:'succes_create_wallet',
        data:data
    }
}
export const success_get_balance = (data) =>{
    return {
        type:'success_get_balance',
        data
    }
}
export const success_seed_white_seed = (data) =>{
    return {
        type:'success_seed_white_seed',
        data,
    }
}
export const succes_transfer_ton = () =>{
    return {
        type:'succes_transfer_ton'
    }
}
export const succes_check_account = () =>{
    return {
        type:'succes_check_account'
    }
}
export const success_check_accaunt = () =>{
    return {
        type:'success_check_accaunt'
    }
}
export const successs_get_hisstory = (data) =>{
    return {
        type:'successs_get_hisstory',
        data
    }
}