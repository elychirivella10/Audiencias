import React, { useState } from 'react'

import Calendar from 'components/calendar/CalendarDate'

import axios from 'axios'
import { rutaAxios } from 'variablesGoblales'

import alerta from 'components/alert/Alert'

const Appointments=({id})=>{

    const [appointments, insertAppointments] = useState({
        id_requirement:0,
        id_status:4,
        id_format_appointments:1,
        appointment_date:""

    })

    const insertAppointment = async (e)=>{
        appointments.id_requirement=id
        const respuesta = await axios.post(`${rutaAxios}appointments`,{...appointments})
        if (respuesta.data.appointments_id) {
            alerta.open({type:"success", message:'Se ingreso la cita correctamente'})
        }
    }

    return(
        <div className="box">
            <p className=" has-text-weight-semibold mb-5">Agendar Cita</p>
            <Calendar insertAppointments={insertAppointments} state={appointments}/>
            <button className = "button is-fullwidth is-blue" onClick={insertAppointment}>Agendar</button>
        </div>
    )
}
export default Appointments