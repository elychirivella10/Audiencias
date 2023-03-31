import {GET_REQUESTS, GET_REQUEST} from 'actions/types'

//importar axios
import axios from 'axios'

//var
import {rutaAxios} from 'variablesGoblales'

export const getRequests = (id) => async dispatch => {

    const respuesta = await axios.get(`${rutaAxios}requests/${id}`) 
    dispatch ({
        type:GET_REQUESTS, 
        payload: respuesta.data.solicitudes
    })

    if (respuesta.data) {
        return true
    }
} 

export const getRequest = (id , requests) => async dispatch => {
    let request = null
    if (requests.length === 0) {
        request = await axios.get(`${rutaAxios}requests/unique/${id}`)
        request = request.data
    }else{
        request = requests.filter(r=>r.id ==id)
        request = request[0]
    }

    dispatch ({
        type:GET_REQUEST, 
        payload: request
    })
    
} 
