import React, {useEffect} from 'react'

//components
import List from 'components/list/List'
import Export from 'components/export/Export'
import Panel from 'components/panel/Panel'
import Appointments from 'components/appointments/Appointments'
import Blocker from '../../components/login/Blocker'

//react-router-dom
import {useParams} from 'react-router-dom'

//redux
import {connect} from 'react-redux'
import {useSelector} from "react-redux";
import {getRequirement} from 'actions/requirementActions'
import {getRequests} from 'actions/requestActions'

const RequirementsAlone=({requirements, getRequirement, requirement, getRequests, request})=>{
    let {id} = useParams();

    useEffect(() => {
        getRequirement(id, requirements)
        getRequests(id)
    }, [id])

    const counter = useSelector((storageState) => storageState)
    console.log(counter)

    return( 
        <div className="columns is-centered is-multiline">
            <Blocker />
            <div className="column is-12">
                <Panel title='Requerimiento' workerPanel={requirement?requirement.name:''} statusPanel={requirement.status} subtitle={`N°${requirement.id}`} data={[
                    {
                        title:"Nombre",
                        description:requirement.name
                    },
                    {
                        title:"Formato de cita",
                        description:requirement.format_appointment
                    },
                    {
                        title:"Fecha creacion",
                        description:requirement.created
                    },

                ]}/>
            </div>
            <div className="column is-9">
                <List 
                    titles = {{title1:'N° Requerimiento', title2:'Formato', title3:'Categoria', title4:'Trabajador Asignado', title5:''}}
                    data={request}
                    exclution='approach'
                    limit="74vh"
                    overflow="auto"
                    link="/request/"
                    
                />
            </div>
            <div className="column is-3">
                <Appointments id={id}/>
                <Export/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
	requirements:state.requirement.requirements,
    requirement:state.requirement.requirement,
    request:state.request.requests
});

export default connect (mapStateToProps,{getRequirement, getRequests}) (RequirementsAlone) 