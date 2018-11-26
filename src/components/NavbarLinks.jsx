import React from "react";

function NavbarLinks(){
  
  let linkStyle = {
    width: 50,
    height: 50,
    border: '1px solid gray',
    padding: 10,
    textDecoration: 'none',
    color: 'gray',
  };

  let divStyles = {
    display: 'inline-block',
  }
  return (
    <div style={divStyles}>
      <a style={linkStyle} href="">Home</a>
      <a style={linkStyle} href="">Notifications</a> 
      <a style={linkStyle} href="">Messages</a> 
    </div>
  );
}

export default NavbarLinks;