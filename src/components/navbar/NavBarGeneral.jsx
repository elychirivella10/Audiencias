import React from 'react'

//Assets
import Logo from 'assets/logo.png'

import {Link} from 'react-router-dom'

const NavBarGeneral=()=>{
    return (
        <nav className="navbar is-centered is-sticky top-1 is-radius-full mb-6"  role="navigation" aria-label="main navigation">
            <div className="navbar-brand ml-5">
                <p className="navbar-item">
                    <span className='is-pointer pr-2 border-logo is-size-7' >WEBPI Audiencias</span>
                    <img src={Logo} alt="logo" className='pl-2 is-logo-navbar'/>
                    <span className='has-text-weight-semibold is-pointer is-size-7' >SAPI</span>
                </p>

                <p role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </p>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="dashboard" className="navbar-item ml-5 mr-2">
                        <span className='navbar-item-hover'>
                            <span className="icon is-small is-right mr-2">
                                <i className="fas fa-chart-pie"></i>
                            </span>
                            Dashboard
                        </span>
                    </Link>
                    <Link to="requirements/list" className="navbar-item ml-2 mr-2">
                        <span className='navbar-item-hover'>
                            <span className="icon is-small is-right mr-2">
                                <i className="fas fa-clipboard-list"></i>
                            </span>
                            Requerimientos
                        </span>
                    </Link>
                    <Link to="appointments/list" className="navbar-item ml-2 mr-2">
                        <span className='navbar-item-hover'>
                            <span className="icon is-small is-right mr-2">
                                <i className="fas fa-clock"></i>
                            </span>
                            Citas
                        </span>
                    </Link>
                    <Link to="config" className="navbar-item ml-2 mr-2">
                        
                        <span className='navbar-item-hover'>
                            <span className="icon is-small is-right mr-2">
                                <i className="fas fa-gear"></i>
                            </span>
                            Configuracion
                        </span>
                    </Link>
                </div>
                <div className="navbar-end">
                <div className="navbar-item has-dropdown is-right is-hoverable has-background-transparent">

                    <Link className="navbar-link has-background-transparent">
                        <span className="icon is-small is-right mr-2">
                            <i className="fas fa-user"></i>
                        </span>
                    Ely Chirivella
                    </Link>

                    <div className="navbar-dropdown is-right is-radius mt-3">
                    <Link className="navbar-item">
                        Perfil
                    </Link>
                    <Link className="navbar-item">
                        
                    </Link>
                    <Link className="navbar-item">
                        Contact
                    </Link>
                    <hr className="navbar-divider"/>
                    <Link className="navbar-item">
                        Salir
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBarGeneral