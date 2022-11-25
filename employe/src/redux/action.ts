export const LikeEmp = (data) => {
    console.log(data)
    return {
        type: 'like_emp',
        data: true
    }
}
export const NotifyDelete = (data) => {
    console.log(data)
    return {
        type: 'delete',
        data: true
    }
}

export const PaySlip = (data) => {
    console.log(data)
    return {
        type: 'pay',
        data
    }
}