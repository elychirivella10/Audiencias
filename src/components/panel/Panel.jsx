import React from 'react'

//helpers
import withRouter from 'helpers/router/withRouter'
import Foot from './Foot'
import Content from './Content'
import Options from './Options'
import Status from 'components/status/Status'
import Workers from 'components/workers/Workers'
import logo from 'assets/logo.png'

var URLactual = window.location

const Panel = ({title, subtitle, ...rest}) =>{

    return (
        <div className="box pt-0 pb-0 pr-0 pl-0">
            <section className={`hero`}>
                <div className="hero-body ">
                    <div className="content is-pulled-right">
                        <Options
                            data={
                                {
                                    estatus:<Status {...rest}/>,
                                    estatus2:<Workers {...rest}/>
                                }
                            }
                        />
                    </div>
                    <figure className="image is-48x48 is-pulled-left mr-3">
                        <img className="" src={logo} alt="marca"/>
                    </figure>
                    <p className="title">
                        {title}
                    </p>
                    <p className="subtitle">
                        {subtitle}
                    </p>
                    <p> 
                        {URLactual.href.slice(-4) === "list"?
                            <a href='register'><button class="button is-info is-focused">+ Agregar</button></a>: 
                        null}  
                    </p>
                    <Content {...rest}/>
                </div>

                <Foot {...rest}/>
            </section>
        </div>
    )
}

export default withRouter(Panel)