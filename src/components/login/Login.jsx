import React, {useState} from 'react'

//react-router-dom
import {Link} from 'react-router-dom'

//redux
import {connect} from 'react-redux'

const Login=({SelectCenter, insertSiteCenter})=>{
    const [login, insertLogin] = useState({
        user:"",
        pass:""
    })

    const onSubmit = async ()=>{
        
    } 

    return (
            <React.Fragment>
                <div className="box pl-5 pr-5 z-index-1 animate__animated animate__fadeInLeft">
                    <SelectCenter insertSiteCenter={insertSiteCenter} site='Login'/>
                    <div className='mb-5 mr-5 ml-5 '>
                        <p className='is-size-7 has-text-centered pl-2 pr-2 pt-2 pb-2 is-radius-small has-background-light'>Su cuenta WEBPI es valida para acceder al SGA</p>
                    </div>
                    <div className='mb-5 mr-5 ml-5'>
                        <p className='is-size-7 has-text-centered '>Ingrese los datos solicitados para continuar con el proceso</p>
                    </div>
                    <div className='mb-5'>
                        <form className="field" >
                            <div className="control has-icons-right pb-4">
                                <input className="input" type="text" placeholder="Usuario" name="user" onChange={(e)=>{
                                    insertLogin({
                                        ...login,
                                        [e.target.name]:e.target.value
                                    })
                                }}/>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>

                            <div className="control has-icons-right pb-4 mb-4">
                                <input className="input" type="password" placeholder="Contraseña" name="pass" onChange={(e)=>{
                                    insertLogin({
                                        ...login,
                                        [e.target.name]:e.target.value
                                    })
                                }}/>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                            <button className = "button is-fullwidth is-blue mb-4" onSubmit={onSubmit}>Ingresar</button>
                        </form>
                        	
                    </div>
                    <div className='mb-4'>
                        <Link to="/recuperar/contrasena">
                            <p className='is-size-7 has-text-centered has-text-grey'>Recuperar contraseña</p>
                        </Link>
                    </div>
                    <div className='mb-4'>
                        <p className='is-size-8 has-text-centered has-text-grey'>2022 | Servicio Autonomo de la Propiedad intelectual</p>
                    </div>
                </div>
            </React.Fragment>
        
    )
}

const mapStateToProps = (state) => ({
	appointments:state.appointment.appointments
});

export default connect(mapStateToProps,null)(Login)