import React from "react";
import { Link } from 'react-router-dom';
function NavbarSearchBar(){
  
  let styles = {
    border: '2px solid lightblue',
    padding: 10,
    borderRadius: 10,
    marginLeft: 20,
  };

  let divStyle = {
    display: 'inline-block',
    float: 'right'
  }


  return (
    <div style={divStyle}>
      <input placeholder="Search" style={styles}/>
      <Link to="/newTweet" style={styles}>Tweet</Link> 
    </div>
  );
}

export default NavbarSearchBar;