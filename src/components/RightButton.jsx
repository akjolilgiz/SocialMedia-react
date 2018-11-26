import React from "react";

function RightButton(){
  let divStyle = {
    width: '100%',
    height: 120,
  };

  let pictureStyle = {
    width: 70,
    height: 70,
    position: 'relative',
    transform: 'translate(50%, 40%)',
    float: 'left'
  }

  let textDivStyle = {
    paddingTop: 8,
    paddingLeft: 125,
    fontWeight: 'bold'
  }

  let buttonStyle = {
    width: 100,
    backgroundColor: '#3270b7',
    marginTop: 10,
    height: 30,
    color: 'white'
  }
  return (
    <div style={divStyle}>
    <img style={pictureStyle} src="http://profilepicturesdp.com/wp-content/uploads/2018/07/empty-profile-picture-icon-5.png"/>
      <div style={textDivStyle}>
        <p>Donec eu orci et</p>
        <button style={buttonStyle}>Button</button>
      </div>
    </div>
  
  );
}

export default RightButton;