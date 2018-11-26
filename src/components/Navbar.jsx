import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarSearchBar from "./NavbarSearchBar";

function Navbar(){
  let divStyle = {
    marginTop: 20
  };
  return (
    <div style={divStyle}>
      <NavbarLinks/>
      <NavbarSearchBar/>
      <br/>
      <br/>

      <hr/>
    </div>
  
  );
}

export default Navbar;