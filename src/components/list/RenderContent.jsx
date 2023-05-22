import React from 'react'

//helpers
import { colorLoop } from 'helpers/colors/colors'

//moment
import moment from 'moment'
import 'moment/locale/es';

//react-router-dom
import {Link} from 'react-router-dom';

//este componente se hizo para dar una solucion a la agregacion de las imagenes a los content, ya que no pueden esta en el mismo elemento y tampoco se podia poner como children
const Container=({children, data, index})=>{
    return(
        <React.Fragment>
            <div className="list-item has-background-transparent"><span className ={`list-item-image-name background${colorLoop(index, data)}`}>{index+1}</span></div>
            {children}
        </React.Fragment>
    )
}

const Control=({deleteRequest, data})=>{
    return(
        <div className="list-item-controls">
            <div className="buttons is-right">
                <button className="button" onClick={()=>{
                    deleteRequest(data.request)
                }}>
                    <span className="icon is-small">
                    <i className="fas fa-edit"></i>
                    </span>
                    <span>Edit</span>
                </button>
            </div>
        </div>
        
    )
}


//componente para generar la lista de contenido, cada elemento de la lista tiene N cantidad de conten
const Content=({data, exclution, control, link, ...rest})=>{

    moment.locale('es')

    let ar =[]
    //se recorre data con un map, para poder iterar sobre todos los datos que estan llegando a la lista
    data.map((d, index)=>{
        let content = []
        //se recorre cada objeto que se encuentra en cada posicion del array que se itero con el map y se general los elementos conten de la lista
        for (let clave in d){
            //se le puede pasar un objeto con dos elementos, son title y descripcion, esto genera un elemento content con un titulo y su descripcion
            if (clave!==exclution && d[clave]!==null) {
                if (clave=== 'id') {
                    const c =<div className="list-item-content"><div className="list-item-title">N°{d.id}</div> <div className="list-item-description">{d[clave]}</div></div>
                    content.push(c)
                }else{
                    const c =<div className="list-item-content"><div className="list-item-title has-text-weight-normal">{clave==='created'?moment(d[clave],"YYYY-MM-DD h:mm:ss").fromNow():d[clave]}</div></div>
                    content.push(c)
                }
            }
            
            
        }
        let val =link===false?<div key={index} className={`list-item ${index+1===data.length?"":"mb-3"}`}><Container data={data} index={index}>{content}{control ===true ?<Control data={d} {...rest}/>:null}</Container></div>:<Link to={link?link+d.id:`${d.id}`}><div key={index} className={`list-item ${index+1===data.length?"":"mb-3"}`}><Container data={data} index={index}>{content}{control ===true ?<Control data={d} {...rest}/>:null}</Container></div></Link>
        return ar.push(val)
    })

    return ar
}

//componente principal donde se agrega el contenido
const RenderContent=({...rest})=>{
    return(
            <Content {...rest}/>
    )
}
export default RenderContent
