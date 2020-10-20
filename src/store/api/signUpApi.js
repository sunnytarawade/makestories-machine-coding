import firebase from '../../Firebase'

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()



const signUpApi = async (userCredentials) => {

    const { email, password, fname, lname, dob, phone, address, photo } = userCredentials

    await auth.createUserWithEmailAndPassword(email, password)

    console.log("user created", auth.currentUser.uid)


    await db.collection("Users").doc(auth.currentUser.uid).set({
        fname,
        lname,
        dob,
        phone,
        address,
    })

    console.log("Data added")

    if (photo) {
        console.log(photo)

        let snapShot = await storage.ref().child("profilephotos/" + auth.currentUser.uid + "+profile").put(photo)


        console.log(snapShot)

    }

    alert("SIGNUP SUCCESSFUL")

    return {
        fname,
        lname,
        dob,
        phone,
        address
    }
}

export default signUpApi