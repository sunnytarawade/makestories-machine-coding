import firebase from '../../Firebase'

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()



let editDetailsAction = (userCredentials)=>{

    const {fname,lname,dob,phone,address,photo} = userCredentials
    
    console.log("EDITING",userCredentials)

    return async(dispatch,getState)=>{


        try{

        // await auth.createUserWithEmailAndPassword(userCredentials.email,userCredentials.password)
    
        // console.log("user created",auth.currentUser.uid)


        await db.collection("Users").doc(auth.currentUser.uid).set({
            fname,
            lname,
            dob,
            phone,
            address,
        })

        console.log("Data UPDATED")

        if(photo){
        console.log(photo)

        let snapShot = await storage.ref().child("profilephotos/" + auth.currentUser.uid + "+profile").put(photo)

        
        console.log(snapShot)

         
        
        }
        
        await dispatch({type : "UPDATE_USER_DETAILS", user : {
            fname,
            lname,
            dob,
            phone,
            address
        }})

        alert("SAVED UPDATED DETAILS SUCCESSFULLY")
        }
        catch(err){
            dispatch({type : "UPDATE_USER_DETAILS_ERROR"})
        }

        
    }
}

export default editDetailsAction