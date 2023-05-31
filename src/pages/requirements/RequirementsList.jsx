import React, {useEffect, useState} from 'react'

//components
import List from 'components/list/List'
import Export from 'components/export/Export'
import SearchDate from 'components/search/SearchDate'
import SearchText from 'components/search/SearchText'
import Blocker from '../../components/login/Blocker'
import Panel from 'components/panel/Panel'

import {connect} from 'react-redux'
import {getRequirements} from 'actions/requirementActions'

const RequirementsList=({getRequirements, requirements})=>{
    const panelDataCant=(requirements)=>{
        if (requirements) {
            const closeCant = requirements.filter(r=>r.status==="CERRADA")
            return closeCant.length
        }
        
    }

    const [panelData, insertPanelData] = useState({
        requirementsCant:requirements.length,
        requirementsCloseCant:`${panelDataCant(requirements)}`
    })

    useEffect(() => {
        getRequirements(1, 10)
        
    }, [getRequirements])
    

    return( 
        <div className="columns is-centered is-multiline">
            <Blocker />
            <div className="column is-12">
                <Panel title='Requerimientos' subtitle='Lista' foot={
                    {
                        foot:{
                        title:'Cantidad Requerimientos',
                        value:panelData.requirementsCant
                        },
                        foot2:{
                        title:'Requerimientos Resueltos',
                        value:panelData.requirementsCloseCant
                        },
                    }
                }/>
            </div>
            <div className="column is-9">
                <List 
                    titles = {{title1:'N° Requerimiento', title2:'Formato', title3:'Categoria', title4:'Trabajador Asignado', title5:''}}
                    data={requirements}
                    exclution='updated'
                    limit="74vh"
                    overflow="auto"
                />
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
	requirements:state.requirement.requirements
});

export default connect (mapStateToProps,{getRequirements}) (RequirementsList) 