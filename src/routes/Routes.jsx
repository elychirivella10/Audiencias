import React from 'react'

//router-dom
import {BrowserRouter ,Routes, Route} from 'react-router-dom'

//components
import Container from 'components/container/Container'
import HelpButton from 'components/help/HelpButton'

//pages
import CenterLoginRegister from 'pages/centerLogin/CenterLoginRegister'
import Help from 'pages/help/Help'
import RequirementsList from 'pages/requirements/RequirementsList'
import RequirementsAlone from 'pages/requirements/RequirementsAlone'
import RequestAlone from 'pages/requests/RequestAlone'
import RequirementsRegister from 'pages/requirements/RequirementsRegister'
import AppointmentsList from 'pages/appointments/AppointmentsList'
import Dashboard from "pages/dashboard/Dashboard";
import PageNotFound from 'pages/notFound/PageNotFound'

const RoutesMain = () =>{
    return (
		<BrowserRouter>
			<Container>
				<HelpButton/>
				<Routes>
					<Route exact path="/" element={<Dashboard/>}/>
					<Route exact path="/login" element={<CenterLoginRegister/>}/>
					<Route exact path="/help" element={<Help/>}/>
					<Route exact path="/dashboard" element={<Dashboard/>}/>
					<Route exact path="/appointments/list" element={<AppointmentsList/>}/>
					<Route exact path="/requirements/register" element={<RequirementsRegister/>}/>
					<Route exact path="/requirements/list" element={<RequirementsList/>}/>
					<Route exact path="/requirements/list/:id" element={<RequirementsAlone/>}/>
					<Route exact path="/request/:id" element={<RequestAlone/>}/>
					<Route exact path="*" element={<PageNotFound/>}/>
				</Routes>
			</Container>
		</BrowserRouter>
    		)
}


export default RoutesMain