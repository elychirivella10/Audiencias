import {GET_APPOINTMENTS, GET_APPOINTMENT} from 'actions/types'
 
const initialState = {
    appointment:{},
    appointments: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_APPOINTMENT:
            return {
                ...state,
                appointment: action.payload
            }
        case GET_APPOINTMENTS:
            return {
                ...state,
                appointments: action.payload
            }
        default:
            return state
    }
}