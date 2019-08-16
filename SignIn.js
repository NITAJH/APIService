import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Background from "./images/Capture1.png"
import { connect } from 'react-redux'
import  {getUserLogin} from '../action'
import { bindActionCreators } from 'redux';
import Copyright from '../template/Copyright'
import { Route,Redirect  } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right  ',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignInSide(props) {
  console.log(props);
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <img src={require('./images/unimoni-logo-155x85.png')} />
        <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address or User ID"
              name="email"
              autoComplete="email"
              autoFocus 
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={props.getUserLogin}
              >
              Sign In
            </Button>
            </form>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
        </div>
      </Grid>
    </Grid>
  );
}

function handleUserInput (e) {
  const name = e.target.email;
  //const value = e.target.value;
  console.log(name);
  //this.setState({[name]: value});
}

function DashBoard (props) {
  return (<Route {...props} render={() =>props.isUserLoggedIn=== true
      ? <Redirect to={{pathname:'/dashboard'}}/> : <Redirect to={{pathname:'/login'}}/>
    }/>
  )
}

class SignIN extends Component{
  render(){
    return (
      <div>
      <SignInSide {...this.props}/>
      <DashBoard  {...this.props}/>
      </div>
    )
  }
}

const mapState = state =>({
  isUserLoggedIn:state.reducer.isUserLoggedIn
})

const mapDispatch = dispatch=> bindActionCreators({
  getUserLogin
},dispatch)

export default connect(mapState,mapDispatch)(SignIN);
