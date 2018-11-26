import React from "react";
import MiddleBody from "./MiddleBody";

function Middle(){
  let _tweet = null; 
  function handleNewTweetFormSubmission(event){
      event.preventDefault();
      console.log(_tweet.value)
      _tweet.value = "";
  }
  let headerStyle = {
    border: '2px solid #a6d7f1',
    width: '100%',
    height: 90,
    backgroundColor: '#a6d7f1',
  }

  let headerBoxStyle = {
    width: 45,
    height: 50,
    backgroundColor: '#740403',
    position: 'relative',
    top: '25%',
    left: '10%',
    display: 'inline-block', 
    transform: 'translate(29px, 30px)'
  }

  let statusBoxStyle = {
    width: '65%',
    height: 45,
    border: '1px solid #76bee4',
    backgroundColor: 'white',
    fontSize: '16px',
    paddingLeft: 10,
    paddingRight: 10,
    color: '#76bee4',
    display: 'inline-block',
    position: 'relative',
    top: '6%',
    left: '15%',
    transform: 'translate(50px, -25px)',
  }
  let buttonStyle = {
    transform: 'translate(68px, -47px)',
    width: 50,
    height: 51
  }


  return (
    <div>
      <div style={headerStyle}>
        <div style={headerBoxStyle}>
        </div>
        <form type="text" onSubmit = {handleNewTweetFormSubmission}>
        <textarea style={statusBoxStyle} 
          id='tweet'
          placeholder='Write a tweet.'
          ref={(textarea) => {_tweet = textarea;}}/>
        <button style={buttonStyle}type='submit'>Tweet!</button>
        </form>
      </div>
    </div>
  );
}
export default Middle;