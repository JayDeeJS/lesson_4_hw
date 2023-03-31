const initialState = {
    result: 0,
}

export function reducer (state = initialState, action) {
    if (action.type === 'CHECK_INPUTS') {
        return {...state, result: 'Число не введено'}
    } else if (action.type === 'ADD_NUMS') {
        return {...state, result: action.payload.numOne + action.payload.numTwo}
    } else if (action.type === 'SUBTRACT_NUMS') {
        return {...state, result: action.payload.numOne - action.payload.numTwo}
    } else if (action.type === 'MULTIPLY_NUMS') {
        return {...state, result: action.payload.numOne * action.payload.numTwo}
    } else if (action.type === 'DIVIDE_NUMS') {
        if (action.payload.numOne % action.payload.numTwo === 0) {
            return {...state, result: action.payload.numOne / action.payload.numTwo}
        } else {
            return {...state, result: (action.payload.numOne / action.payload.numTwo).toFixed(3)}
        }
    }

    return state
}