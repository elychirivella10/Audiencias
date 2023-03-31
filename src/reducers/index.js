import { combineReducers } from 'redux';
import loader from 'reducers/loaderReducer'
import login from 'reducers/loginReducer'
import sitePage from 'reducers/sitePageReducer'
import requirement from 'reducers/requirementReducer'
import appointmentReducer from './appointmentReducer'
import requestReducer from './requestReducer';


export default combineReducers({
   loader:loader,
   login:login,
   sitePage:sitePage,
   requirement:requirement,
   appointment:appointmentReducer,
   request:requestReducer
});