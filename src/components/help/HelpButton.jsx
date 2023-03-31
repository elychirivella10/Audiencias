import React from 'react'

//redux
import {connect} from 'react-redux'

//actions
import {insertSitePage} from 'actions/sitePageActions'

//react-router-dom 
import {Link} from 'react-router-dom'

const HelpButton=({insertSitePage})=>{
    
    const changeSitePage=(e)=>{
        insertSitePage('Help')
    }
    
    return(
        <div className='is-fixed bottom-2 right-3 z-index-1'>
            <Link to={'/help'} onClick={changeSitePage}>
                <div className="box is-pointer">
                    <span className="icon is-small is-right">
                        <i className="fas fa-question"></i>
                    </span>
                </div>
            </Link>
        </div>
    )
}
export default connect (null, {insertSitePage})(HelpButton)