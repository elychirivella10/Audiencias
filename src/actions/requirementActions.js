import {GET_REQUIREMENTS, GET_REQUIREMENT} from 'actions/types'

//importar axios
import axios from 'axios'

//var
import {rutaAxios} from 'variablesGoblales'

export const getRequirements = (pag, cant, param) => async dispatch => {

    const respuesta = await axios.get(`${rutaAxios}requirements/${pag}/${cant}`) 
    dispatch ({
        type:GET_REQUIREMENTS, 
        payload: respuesta.data.requirements
    })

    if (respuesta.data) {
        return true
    }
} 

export const getRequirement = (id , requirements) => async dispatch => {
    let requirement = null
    if (requirements.length === 0) {
        requirement = await axios.get(`${rutaAxios}requirements/unique/${id}`)
        requirement = requirement.data
    }else{
        requirement = requirements.filter(r=>r.id ==id)
        requirement = requirement[0]
    }

    dispatch ({
        type:GET_REQUIREMENT, 
        payload: requirement
    })
    
} 
