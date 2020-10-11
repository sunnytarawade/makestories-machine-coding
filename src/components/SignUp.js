import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import signUpAction from '../store/action-creators/signUpAction'
import Navbar from './Navbar'
import Avatar from '../images/Avatar.jpg'
import {makeStyles,Paper, TextField, Grid, Container, Button, Typography} from "@material-ui/core"
import {lightBlue,grey} from "@material-ui/core/colors"
const styles = makeStyles({
    paper : {
        alignItems:"center",
        
    },
    container : {
        alignItems:"center",
        width : "80%",
        paddingBottom : "15%"
    },
    heading : {
        textAlign : "center",
        color : lightBlue[400],
        padding : "10% 0 5% 0"
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
    buttonImg : {
        display :"block",
        margin : "10px auto",
        backgroundColor : lightBlue[300],
        color : "white",
        width : "60%",
        textAlign : "center"
    },
    link : {
         textDecoration : "none",
         textAlign : "center",
         margin : "10px",
         padding : "10px",
         color : lightBlue[400],
          
    },
    img : {
        display : "block",
        margin : "0 auto",
        width : "25vw",
        height : "25vw",
        borderRadius : "100%"
    }
})


function SignUp(props) {
    
    const classes = styles()
  
    const inituserCredentials = {
        email : null,
        password : null,
        fname : null,
        lname : null,
        dob : null,
        phone : null,
        address : null,
        photo : null,
        photoURL : null
    }

    const [userCredentials,setUserCredentials] = useState(inituserCredentials)
    
    const handleSubmit = (e)=>{
        
        e.preventDefault()
        console.log(userCredentials)
        props.signUp(userCredentials)
    }

    
    const handleChange = (e)=>{
        setUserCredentials({
            ...userCredentials,
            [e.target.id] : e.target.value
        })
    }

    const handlePhotoChange = async (e)=>{

        const newImage = e.target.files[0]


        if(newImage){

    

            let reader = new FileReader()
            reader.onload = ()=>{
                if(reader.readyState === 2){
                    setUserCredentials({
                        ...userCredentials,
                        photo : newImage,
                        photoURL : reader.result
                    })
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
        
        // setUserCredentials({
        //     ...userCredentials,
        //     [e.target.id] : e.target.files[0]
        // })
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
                    CREATE NEW ACCOUNT
                </Typography>
                <img src={userCredentials.photoURL || Avatar} className={classes.img}/>

            <form onSubmit={handleSubmit}>
        
            <Button fullWidth className={classes.buttonImg} variant="contained" component="label"> UPLOAD PHOTO <input type="file" id="photo" onChange={handlePhotoChange} accept="image/*" style={{ display: "none" }}/></Button>
            <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} type="text" id="fname" label="first name" required></TextField>
            <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} type="text" id="lname" label="last name" required></TextField>
            <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} type="number" id="phone" label="phone number" required></TextField>
            <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} type="date" id="dob" label="" required></TextField>
            <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} multiline type="text" id="address" label="address" required></TextField>
            <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} type="text" id="email" label="email" required></TextField>
            <TextField className={classes.textfield} variant="outlined" fullWidth onChange={handleChange} type="password" id="password" label="password" required></TextField>
            <Button fullWidth className={classes.button}  variant="contained" type="submit">Sign Up</Button>
                


            {/* <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input onChange={handleChange} type="text" placeholder="first name" id="fname"/>
                <label>Last Name : </label>
                <input onChange={handleChange} type="text" placeholder="last name" id="lname"/>
                <label>DOB : </label>
                <input onChange={handleChange} type="date" placeholder="yyyy/mm/dd" id="dob"/>
                <label>Phone Number : </label>
                <input onChange={handleChange} type="tel" placeholder="phone" id="phone" pattern="[0-9]{10}"/>
                <label>Address : </label>
                <textarea onChange={handleChange} type="address" placeholder="address" id="address"></textarea>
                <label>Profile Photo : </label>
                <input onChange={handlePhotoChange} type="file" placeholder="profile" id="photo"/>
                <label>Email : </label>
                <input onChange={handleChange} type="email" placeholder="email" id="email" required/>
                <label>Password : </label>
                <input onChange={handleChange} type="password" placeholder="password" id="password" required/>
                 <button type="submit">Submit</button>
            </form> */}
            
    
        </form>
        </Container>
        </Paper>   
        
    )
}

const mapStateToProps = (state)=>{
    return{
        user : state.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    
        return{
            signUp : (userCredentials)=>{dispatch(signUpAction(userCredentials))}
        }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
