import {GET_REQUIREMENTS, INSERT_REQUIREMENTS, GET_REQUIREMENT} from 'actions/types'
 
const initialState = {
    requirement:{},
    requirements: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REQUIREMENT:
            return {
                ...state,
                requirement: action.payload
            }
        case GET_REQUIREMENTS:
            return {
                ...state,
                requirements: action.payload
            }
        case INSERT_REQUIREMENTS:
            return {
                requirements: action.payload
            }
        default:
            return state
    }
}