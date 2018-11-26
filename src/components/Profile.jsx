import React from "react";
import Left from "./Left";
import { generateKeyPair } from "crypto";


function Profile() {
  let upperStyle = {
    height: 130,
    backgroundColor: '#2b97de',
    // border: '2px solid gray',
    position: 'relative',
  };
  let lowerStyle = {
    height: 100,
    textAlign: 'right',
    paddingRight: 20,
    paddingBottom: 20,
    border: '2px solid gray',
    
  }
  let imageStyle = {
    height: 80,
    width: 80,
    // marginTop: 70,
    // marginLeft: 20,
    transform: 'translate(30px, 80px)',
    borderRadius: 20,
    position: 'relative',
    border: '2px solid white'
  }
  let additionalLink = {
    paddingTop: 10,
    textAlign: 'center',
    textDecoration: 'none',
    color: 'gray',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  }
  let underText = {
    height: 400,
    border: '2px solid gray',
    marginTop: 20,
    padding: 20,
    color: 'gray',
    textAlign: 'left',
    lineHeight: 1.5
  }
  let linkBoxStyle = {
    marginTop: 20
  }
  let headerStyle = {
    lineHeight: 0,
    marginBottom: 45,
    fontSize: 20,
    position: 'relative',
    transform: 'translate(-20px)'
  }
  return (
    <div>
      <div style={upperStyle}>
        <img style={imageStyle} src="http://www.centro-renacer.org/wp-content/uploads/2016/06/blank-profile.png"></img>
      </div>
      <div style={lowerStyle}>
        <h3 style={headerStyle}>Kellie A. Corrigan</h3>
        <div style={linkBoxStyle}>
          <a style={additionalLink} href=""> TWEETS  </a>
          <a style={additionalLink} href=""> FOLLOWERS </a>
          <a style={additionalLink} href=""> FOLLOWING </a>
        </div>
      </div>

      <div>
        <div style={underText}>
          <h4>ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu</h4>
        </div>

      </div>
    </div>

  );
}

export default Profile;