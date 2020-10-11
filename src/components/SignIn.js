import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Navbar from './Navbar'
import signInAction from '../store/action-creators/signInAction'

import {makeStyles,Paper, TextField, Grid, Container, Button, Typography} from "@material-ui/core"
import {lightBlue,grey} from "@material-ui/core/colors"
const styles = makeStyles({
    paper : {
        
    },
    container : {
        width : "60%"
    },
    heading : {
        textAlign : "center",
        color : lightBlue[400],
        padding : "10%"
    }
    ,
    textfield : {
        fullWidth : true,
        padding : "1px",
        margin : "10px",
        // backgroundColor : "pink"
    },
    button : {
        display :"block",
        margin : "10px",
        backgroundColor : lightBlue[300],
        color : "white"
    },
    link : {
         textDecoration : "none",
         textAlign : "center",
         margin : "10px",
         padding : "10px",
         color : lightBlue[400],
          
    }
})

function SignIn(props) {
    
    const classes = styles()

    const initUserCredentials = {
        email : null,
        password : null
    }

    const [userCredentials,setUserCredentials] = useState(initUserCredentials)
    
    const handleSubmit = (e)=>{
        
        e.preventDefault()
        console.log(userCredentials)
        props.signIn(userCredentials)
    }

    const handleChange = (e)=>{
        setUserCredentials({
            ...userCredentials,
            [e.target.id] : e.target.value
        })
    }

    return props.user ?
    
    (
        <Redirect to="/dashboard"></Redirect>
    ) 

        :
        
        (
        <Paper className={classes.paper}>
            <Navbar/>
            <Container className={classes.container}>

                <Typography className={classes.heading} variant="h4">
                    SIGN IN
                </Typography>
            {/* <div className={classes.container}> */}
            <form onSubmit={handleSubmit}>
                {/* <label>Name : </label>
                <input onChange={handleChange} type="text" placeholder="Email" id="email"/>
                <label>Name : </label>
                <input onChange={handleChange} type="password" placeholder="Password" id="password"/>
                <button type="submit">Submit</button>
                <Link to="/signup">Create a new account</Link> */}

                <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} type="text" id="email" label="email" required></TextField>
                <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} type="password" id="password" label="password" required></TextField>
                <Button fullWidth className={classes.button}  variant="contained" type="submit">Sign In</Button>
                <Link style={{textDecoration : "none"}} to="/signup" >
                    <Typography className={classes.link} variant="h6">
                    Create a new Account
                    </Typography>
                    </Link>
               </form>
            {/* </div> */}
            </Container>
        </Paper>
        )
    
}

const mapStateToProps = (state)=>{
    
    console.log("Inside mstp",state.user)

    return{
        // user : state.authReducer.user
        user : state.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    
        return{
            signIn : (userLoginCredentials)=>{dispatch(signInAction(userLoginCredentials))}
        }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
