import React from 'react';
import styles from "./App.module.css";
import Login  from "./Pages/Login/Login"
import Home  from "./Pages/Home/Home";
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import {Provider} from "react-redux"
import { createStore } from 'redux'; 
import reducer from "./Store/Reducer/User";


const store =  createStore(reducer)

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
