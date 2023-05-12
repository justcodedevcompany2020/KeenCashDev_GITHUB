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