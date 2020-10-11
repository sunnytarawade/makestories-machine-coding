/*import { combineReducers } from 'redux'

 import authReducer from './authReducer'
import addStoriesReducer from './addStoriesReducer'
import dashboardReducer from './dashboardReduder'
const rootReducer = combineReducers({
  
    authReducer,
    dashboardReducer,
    addStoriesReducer
    
}); */

let initState = {
    user : null
}

let rootReducer = (state = initState,action)=>{
    console.log(action.type)

    switch(action.type){
        
        case "SIGN_IN": 

        return {
            user : {...action.user}
        }

        case "SIGN_IN_ERROR":

        return state

        case "SIGN_UP":

        return {
            user: {...action.user}
        }

        case "SIGN_UP_ERROR":

        return state

        case "SIGN_OUT" :
        
        return {
            user : null
        }

        case "SIGN_OUT_ERROR":

        return state


        case "UPDATE_USER_DETAILS":

        
        return {
            user: {...action.user}
            // loadEditPage : false
        }

        default :

        return state

    }

    

}

export default rootReducer