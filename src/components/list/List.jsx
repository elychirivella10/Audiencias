import React from 'react'

//bulma
import 'css/bulma-list.css'

//components
//import RenderTitle from './RenderTitle'
import RenderContent from './RenderContent'

//limit es el limite para la lista en vh
//overflow es para declarar si va a tener scrool o no

const List=({limit, overflow, ...rest})=>{

    return(
        <div className="box">
            <div className="list scrool small" style={{'maxHeight': limit, 'overflow': overflow }}> 
                <RenderContent {...rest}/>
            </div>
        </div>
    )
}
export default List


