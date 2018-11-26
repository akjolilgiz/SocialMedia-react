import React from "react";
import Left from "./Left";
import Right from "./Right";
import Middle from "./Middle";
import { isAbsolute } from "path";
import MiddleBody from './MiddleBody'
function Body(){
  let bodyStyleLeft = {
    marginTop: 20,
    // border: '2px solid gray',
    float: 'left',
    width: '30%',
    marginLeft: 10, 
    marginRight: 3,
    display: 'inline-block',
  };

  let bodyStyleMiddle = {
    marginTop: 20,
    float: 'center',
    width: '40%',
    marginLeft: 5, 
    marginRight: 5,
    display: 'inline-block',


  }
  let bodyStyleRight = {
    marginTop: 20,
    border: '2px solid gray',
    float: 'right',
    width: '25%',
    marginLeft: 3,
    marginRight: 10,
    display: 'inline-block',
    position: 'fixed',
    width: 310
  }

  let mainBodyStyle = {
    width: 1140
  }
  return (
    <div style={mainBodyStyle}>
      <div style={bodyStyleLeft}>
         <Left/>
      </div>
     
      <div style={bodyStyleMiddle}>
         <MiddleBody/>
      </div>
      
      <div style={bodyStyleRight}>
         <Right/>
      </div>

    </div>
   
  
  );
}

export default Body;