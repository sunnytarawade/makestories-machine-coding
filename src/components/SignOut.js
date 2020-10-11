import React from 'react'
import {connect} from 'react-redux'
import signOutAction from '../store/action-creators/signOutAction'
import {Button} from '@material-ui/core'

import {makeStyles} from "@material-ui/core"
import {lightBlue} from "@material-ui/core/colors"

const styles = makeStyles({
    button : {
        display :"block",
        margin : "10px",
        
    }
})


function SignOut(props) {
    
    const classes = styles()

    return (
        <div>
            <Button className={classes.button} color="secondary" fullWidth variant="contained" onClick={props.signOut}>Sign Out</Button>
            {/* <button onClick={props.signOut}></button> */}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signOut : ()=>{dispatch(signOutAction())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignOut)
