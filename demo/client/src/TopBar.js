import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

export default function TopBar(props){
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <FontAwesomeIcon icon={faBug} />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    RestBugs
                </Typography>

                <LoginButton />
            </Toolbar>
        </AppBar>
    )
}

function LoginButton(props){
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

    if(isAuthenticated){
        return (
            <Button 
                color="inherit" 
                onClick={ () => logout({ returnTo: window.location.origin }) }>
                    Hi {user && user.name}, Logout
            </Button> )
    } else {
        return (
            <Button 
                    color="inherit" 
                    onClick={ () => loginWithRedirect() }>
                        Login
            </Button> ) 
    }
}
