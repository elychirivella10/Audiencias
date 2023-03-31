import React, {Fragment} from 'react'

import '@fortawesome/fontawesome-free/css/all.css'

import {Link} from 'react-router-dom'

import moment from 'moment'
import 'moment/locale/es';


const Card  = ({contenidos, header, tipo, classIcon, altTitle, colorIcon, tipoOtherContent, fecha}) =>{
  const formatter = new Intl.NumberFormat('es-VE', {
		style: 'currency',
		currency: 'VEF',
		minimumFractionDigits: 0
    })      
    moment.locale('es')
    fecha = moment(fecha, "YYYY-MM-DD h:mm:ss").format('MMMM Do YYYY, h:mm:ss a')
    const date = fecha.split(', ')
    return (
    	<div className="card">
            <header className="card-header">
              <p className="card-header-title">
                  {header}
              </p>
              <a href="#" className="card-header-icon" aria-label="more options">
                  {classIcon === "Notificacion"?
                      <span className="icon has-text-primary">
                          <i className="fas fa-check-circle" aria-hidden="true"></i>
                      </span>:
                      <Fragment>
                          {tipoOtherContent?<p>{tipoOtherContent}</p>:null}
                          <span className="icon has-text-primary" title={altTitle}>  
                              <i className={classIcon} style={{color:colorIcon}} aria-hidden="true"></i>
                          </span>
                      </Fragment>
                  }
              </a>
            </header>
          <div className="card-content">
            <p className="title is-4">{date[0]}</p>
            <p className="subtitle is-6">{date[1]}</p>
              <div className="content">
                  {contenidos?contenidos.map((contenido, index)=>(
                      <Fragment key= {index}>
                          <p title= {contenido.contenido.contenido}><span><strong>{contenido.contenido.titulo}</strong></span>:{contenido.contenido.contenido}</p>
                      </Fragment>
                  )):null}
              </div>
          </div>
        </div>
    )
}


export default Card 