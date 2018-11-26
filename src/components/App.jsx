import React from "react";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import Navbar from "./Navbar";
import Body from "./Body";
import { Switch, Route } from 'react-router-dom';
import CreateTweet from './CreateTweet';

function App(){
  let mainBodyStyle = {
    width: 1140
  }

  return (
    <div style={mainBodyStyle}>
      <Navbar/>
      <Switch>
          <Route exact path='/' component={Body}/>
      </Switch>
    </div>
  );
}

export default App;