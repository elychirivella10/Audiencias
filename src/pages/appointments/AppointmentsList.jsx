import React, {useEffect} from 'react'

import Card from 'components/card/Card'

//redux
import {connect} from 'react-redux'
import {getAppointment} from 'actions/appointmentActions'
import Export from 'components/export/Export'
import SearchDate from 'components/search/SearchDate'
import SearchText from 'components/search/SearchText'

const AppointmentsList=({getAppointment, appointments})=>{

    useEffect(() => {
        getAppointment(1,10)
    }, [getAppointment])
    
    return(
        <div className='columns is-multiline'>
            <div className="column is-9">
                {appointments.map(appointment=>{
                    return(
                        <div className="column is-3">
                            <Card
                                header ={`N°${appointment.id}`}
                                id = {appointment.id}
                                fecha= {appointment.appointment_date}
                                classIcon ="fa-solid fa-calendar"
                            />
                        </div>
                    )
                })}
            </div>
            <div className="column is-3">
                <SearchDate/>
                <SearchText/>
                <Export/>
            </div>
                                  
        </div>
    )
}

const mapStateToProps = (state) => ({
	appointments:state.appointment.appointments
});

export default connect (mapStateToProps,{getAppointment}) (AppointmentsList) 