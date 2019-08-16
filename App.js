import React,{Component} from 'react';
import './App.css';
import {Provider} from "react-redux"
import rootReducer from './rootReducer';
import {  createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Main from "./Main"

const store = createStore(rootReducer,
  {},
  composeWithDevTools()
)

console.log(store.getState())

class App extends Component {
  render() { 
    return (     
    <div className="App">
      <Provider store= {store} >
      <React.Fragment>
          <Main/>
      </React.Fragment>
      </Provider>
  </div> );
  }
}

export default App;
