import {AppBar,Typography,makeStyles, CssBaseline, Toolbar} from '@material-ui/core'
import {lightBlue} from '@material-ui/core/colors'
import React from 'react'
import LogoURL from '../images/favicon.png'
const styles = makeStyles({
    appbar :{
        position : "static",
        padding : "5px 7px",
        // alignItems : "center",
        backgroundColor : lightBlue[300]
    },
    toolbar : {
        alignItems : "center",
        
    },
    logo : {
        display : "block",
        width : "60px",
        height : "60px",
        padding : "2px",
        marginRight : "5%"
    }
})

function Navbar() {

    const classes = styles()

    return (
            <>
            <AppBar className={classes.appbar} >
                <Toolbar className={classes.tool}>
                    <img src={LogoURL} className={classes.logo}/>
                <Typography variant="h1">
                    <Typography variant="h4">MAKE STORIES</Typography>
                    <Typography variant="h6">MACHINE CODING</Typography>
                </Typography>
                </Toolbar>
            </AppBar>
            <CssBaseline/>
            </>
    )
}

export default Navbar
