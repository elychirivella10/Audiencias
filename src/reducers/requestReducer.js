import {GET_REQUESTS, GET_REQUEST} from 'actions/types'
 
const initialState = {
    request:{},
    requests: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state,
                request: action.payload
            }
        case GET_REQUESTS:
            return {
                ...state,
                requests: action.payload
            }
        default:
            return state
    }
}