import React from "react";
import RightButton from "./RightButton"

function Right(){
  let headerStyle = {
    margin: 15,
  }
  return (
    <div>
      <h2 style={headerStyle}>Loren ipsum</h2>
      <RightButton/>
      <RightButton/>
      <RightButton/>
    </div>
  );
}

export default Right;