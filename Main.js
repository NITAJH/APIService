import React,{Component} from 'react';
import './App.css';
import Dashboard from './_component/Dashboard';
import { Switch, Route,Redirect  } from "react-router-dom";
import SignIN from './SignIn/signIn'
import { connect } from 'react-redux'

function  PrivateRoute({component:Component,isUserLoggedIn,...props})
{
  return(
    <Route {...props} render={() =>isUserLoggedIn=== true
                                        ? <Component/>:  <Redirect to={{pathname:'/login'}}/>
    }/>
  )
}

const CustomerRedirect = (props) =>
{
  return (     
    <div className="App">
      <React.Fragment>
          <Switch>
            <Route exact path="/login" render={() => <SignIN {...props}/>} />} />
            <PrivateRoute {...props} isUserLoggedIn={props.isUserLoggedIn} path='/'  component={Dashboard} />}/>
          </Switch>
      </React.Fragment>
    </div> 
  );
}


class Main extends Component {
  render() { 
    return (     
    <div className="App">
      <React.Fragment>
        <CustomerRedirect {...this.props}/>
      </React.Fragment>
  </div> );
  }
}

const mapState = state =>({
  isUserLoggedIn:state.reducer.isUserLoggedIn
  ,email:state.reducer.email
  ,password:state.reducer.password
})

export default connect(mapState)(Main);
