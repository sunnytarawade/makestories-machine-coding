import firebase from '../../Firebase'

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()


const signInApi = async ({ email, password }) => {
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    await auth.signInWithEmailAndPassword(email,password)

    console.log("Signed In", auth.currentUser.uid)

    const userTextData = await db.collection("Users").doc(auth.currentUser.uid).get()
    // userTextData = userTextData.data()

    console.log(userTextData)

    const photoURL = await storage.ref("profilephotos/" + auth.currentUser.uid + "+profile").getDownloadURL().catch(err => { return null })

    console.log(photoURL)

    const user = {...userTextData.data(),photoURL}
    
    sessionStorage.setItem("user",JSON.stringify(user))

    return user 
}

export default signInApi