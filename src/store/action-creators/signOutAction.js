import firebase from '../../Firebase'

// const db = firebase.firestore()
const auth = firebase.auth()
// const storage = firebase.storage()


let signOutAction = ()=>{
    return async (dispatch,getState)=>{

        try{
        await auth.signOut()

        console.log("logged out",auth.currentUser)

        dispatch({type:"SIGN_OUT",user:null})
        }
        catch(err){
            console.log(err)
        }
    }
}

export default signOutAction