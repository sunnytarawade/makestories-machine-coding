import firebase from '../../Firebase'

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()



let signInAction = (userCredentials)=>{

    const user = {}

    return async(dispatch,getState)=>{


        try{

        await auth.signInWithEmailAndPassword(userCredentials.email,userCredentials.password)
    
        console.log("Signed In",auth.currentUser.uid)

        const userTextData = await db.collection("Users").doc(auth.currentUser.uid).get()

        console.log(userTextData.data())
       
        const photoURL = await storage.ref("profilephotos/" + auth.currentUser.uid + "+profile").getDownloadURL().catch(err=>{return null})

            console.log(photoURL)


            
        dispatch({type : "SIGN_IN", user : {...userTextData.data(),photoURL}}).catch(err=>{console.log(err)})
        }
                  
    

        // await storage

        
        
        catch(err){
            dispatch({type : "SIGN_IN_ERROR"})
        }

        
    }
}

export default signInAction