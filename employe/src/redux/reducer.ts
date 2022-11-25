export const LikeDataReducer = (like = [],action) =>{
    if (action.type === 'like_emp'){
        console.log(action,"action like")

        return [action.like, ...like]
    }
    else {
        return like
    }
    
}
export const NotifyReducer = (notify = [],action) =>{
    if (action.type === 'delete'){
        console.log(action,"action notify")

        return [action.data, ...notify]
    }
    else {
        return notify
    }
    
}

export const PaySlipReducer = (slip = [],action) =>{
    if (action.type === 'pay'){
        console.log(action,"action Payslip")
        return [action.data, ...slip]
    }
    else {
        return slip
    }
    
}
