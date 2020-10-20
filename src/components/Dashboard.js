import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SignOut from './SignOut'
import { Redirect } from 'react-router-dom'
// import editDetailsAction from '../store/action-creators/editDetailsAction'
import { editDetailsAction } from '../store/actions-saga'
import Navbar from './Navbar'

import Avatar from '../images/Avatar.jpg'
import { makeStyles, Paper, TextField, Grid, Container, Button, Typography } from "@material-ui/core"
import { lightBlue, grey } from "@material-ui/core/colors"

import firebase from '../Firebase'

const styles = makeStyles({
    paper: {
        alignItems: "center",

    },
    container: {
        alignItems: "center",
        width: "80%",
        paddingBottom: "15%"
    },
    heading: {
        textAlign: "center",
        color: lightBlue[400],
        padding: "10% 0 5% 0"
    }
    ,
    textfield: {
        fullWidth: true,
        padding: "1px",
        margin: "10px"

    },
    button: {
        display: "block",
        margin: "10px",
        backgroundColor: lightBlue[300],
        color: "white"
    },
    buttonImg: {
        display: "block",
        margin: "10px auto",
        backgroundColor: lightBlue[300],
        color: "white",
        width: "60%",
        textAlign: "center"
    },
    link: {
        textDecoration: "none",
        textAlign: "center",
        margin: "10px",
        padding: "10px",
        color: lightBlue[400],

    },
    img: {
        display: "block",
        margin: "0 auto",
        width: "25vw",
        height: "25vw",
        borderRadius: "100%"
    }
})



function Dashboard(props) {


    const classes = styles()

    // const sessionUser  = JSON.parse(sessionStorage.getItem('user'))
    // console.log(sessionUser)

    let [userDetails, setUserDetails] = useState({ ...props.user })

    
    console.log(userDetails)

    // firebase.auth().onAuthStateChanged(user=>{
    //     setUserDetails({...props.user})
    // })


    const handleSubmit = (e) => {

        e.preventDefault()
        props.startLoading()
        console.log(userDetails)
        props.editDetails(userDetails)
    }

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.id]: e.target.value
        })
    }

    const handlePhotoChange = async (e) => {

        const newImage = e.target.files[0]

        if (newImage) {

            let reader = new FileReader()


            reader.onload = (e) => {

                if (reader.readyState === 2) {

                    console.log(reader.result, typeof reader.result)
                    setUserDetails({
                        ...userDetails,
                        photo: newImage,
                        photoURL: reader.result
                    })
                }
            }

            reader.readAsDataURL(e.target.files[0])


        }



    }

    return props.user ?

        (
            <Paper className={classes.paper}>
                <Navbar />
                <Container className={classes.container}>

                    <Typography className={classes.heading} variant="h4">
                        HELLO {userDetails.email}
                    </Typography>
                    <img src={userDetails.photoURL || Avatar} className={classes.img} />

                    <form onSubmit={handleSubmit}>

                        <Button fullWidth className={classes.buttonImg} variant="contained" component="label"> UPDATE PHOTO <input type="file" id="photo" onChange={handlePhotoChange} accept="image/*" style={{ display: "none" }} /></Button>
                        <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} defaultValue={props.user.fname} type="text" id="fname" label="first name" required></TextField>
                        <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} defaultValue={props.user.lname} type="text" id="lname" label="last name" required></TextField>
                        <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} defaultValue={props.user.phone} type="number" id="phone" label="phone number" required></TextField>
                        <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} defaultValue={props.user.dob} type="date" id="dob" label="" required></TextField>
                        <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} defaultValue={props.user.address} multiline type="text" id="address" label="address" required></TextField>
                        {/*  <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} type="text" id="email" label="email" required></TextField>
            <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} type="password" id="password" label="password" required></TextField>
            */} <Button fullWidth className={classes.button} variant="contained" type="submit">SAVE DETAILS</Button>

                        <SignOut />
                        {/* <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                    <input onChange={handleChange} type="text"  defaultValue={props.user.fname} id="fname" />
                    <label>Last Name : </label>
                    <input onChange={handleChange} type="text" defaultValue={props.user.lname} id="lname"/>
                    <label>Profile Photo : </label>
                    <input onChange={handlePhotoChange} type="file" placeholder="profile" defaultValue={props.user.photo} id="photo"/>
                    <label>DOB : </label>
                    <input onChange={handleChange} type="date" defaultValue={props.user.dob} id="dob"/>
                    <label>Phone Number : </label>
                    <input onChange={handleChange} type="tel" defaultValue={props.user.phone} id="phone" pattern="[0-9]{10}"/>
                    <label>Address : </label>
                    <textarea onChange={handleChange} type="address" defaultValue={props.user.address} id="address"></textarea>
                    <button type="submit" >Save</button>
                    
            </form> */}
                        {/* <img src={userDetails.photoURL} /> */}

                    </form>
                </Container>
            </Paper>




        )
        :
        (
        <Redirect to="/">{console.log("NO SESSIOn")}</Redirect>
        )

}

const mapStateToProps = (state) => {

    return {
        user: state.userReducer.user,

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        editDetails: (editedDetails) => { dispatch(editDetailsAction(editedDetails)) },
        startLoading : ()=>{dispatch({type:"LOADING_START"})}
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)