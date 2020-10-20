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
    user : null,
    
}

let userReducer = (state = initState,action)=>{
    console.log(action.type)

    switch(action.type){
        
        case "MEOW":

        console.log("I am WOrker")

        return state

        case "SIGN_IN_SUCCESS": 

        return {
            user : {...action.payload}
        }

        case "SIGN_IN_ERROR":

        return state

        case "SIGN_UP_SUCCESS":

        return {
            user: {...action.payload}
        }

        case "SIGN_UP_ERROR":

        return state

        case "SIGN_OUT_SUCCESS" :
        
        return {
            user : null
        }

        case "SIGN_OUT_ERROR":

        return state


        case "EDIT_DETAILS_SUCCESS":

        
        return {
            user: {...action.payload}
            // loadEditPage : false
        }

        default :

        return state

    }

    

}

export default userReducer