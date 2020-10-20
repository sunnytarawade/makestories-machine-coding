import firebase from '../../Firebase'

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

let editDetailsApi = async (userCredentials) => {

    const { fname, lname, dob, phone, address, photo } = userCredentials

    console.log("EDITING", userCredentials)

    await db.collection("Users").doc(auth.currentUser.uid).set({
        fname,
        lname,
        dob,
        phone,
        address,
    })

    console.log("Data UPDATED")

    if (photo) {
        console.log(photo)

        let snapShot = await storage.ref().child("profilephotos/" + auth.currentUser.uid + "+profile").put(photo)


        console.log(snapShot)


    }

    alert("SAVED UPDATED DETAILS SUCCESSFULLY")

    return {
        fname,
        lname,
        dob,
        phone,
        address
    }
}

export default editDetailsApi