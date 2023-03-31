import React, {useEffect} from 'react'

//components
import List from 'components/list/List'
import {prueba} from '../requirements/prueba'
import Panel from 'components/panel/Panel'
import TimeLine from 'components/timeline/TimeLine'
import ResolvedRequest from 'components/requests/ResolvedRequest'

//react-router-dom
import {useParams} from 'react-router-dom'

//redux
import {connect} from 'react-redux'
import {getRequest} from 'actions/requestActions'

const RequestAlone=({requests, getRequest, request})=>{

    let {id} = useParams();

    useEffect(() => {
      getRequest(id, requests)
    }, [id])
    
    return( 
        <div className="columns is-centered is-multiline">
            <div className="column is-12">
                <Panel title='Solicitud' subtitle={`N°${request.num_request}`} statusPanel={request.status} data={[
                    {
                        title:"Categoria",
                        description:request.category
                    },
                    {
                        title:"Descripción",
                        description:request.approach
                    }

                ]}/>
            </div>
            <div className="column is-9">
                <ResolvedRequest/>
            </div>
            <div className="column is-3">
                <TimeLine 
                    data=
                    {
                        [
                            {
                                fecha:"Marzo 22",
                                description:"Asignado"
                            },
                            {
                                fecha:"Marzo 22",
                                description:"Registrado"
                            },
                            {
                                fecha:"Marzo 22",
                                description:"En proceso"
                            },
                            {
                                fecha:"Marzo 22",
                                description:"Completado"
                            }
                        ]
                        
                    }
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    requests:state.request.requests,
    request:state.request.request
});

export default connect (mapStateToProps,{getRequest}) (RequestAlone) 