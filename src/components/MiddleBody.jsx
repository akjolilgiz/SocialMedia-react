import React from "react";
import Tweets from "./Tweets";
import Middle from './Middle';

class MiddleBody extends React.Component {
  constructor(props){
  super(props);
  this.state = { tweets: [  {
    tweet: 'Thato and Haley',
    likes: 0 },
    {
    tweet: 'Chan Digidon',
    likes: 0 },
  ]  
  };
    this.handleLikes = this.handleLikes.bind(this);
    this.handleNewTweet = this.handleNewTweet.bind(this);
  }
  handleLikes(content){
   var newTweets = this.state.tweets.slice();
   var index = newTweets.indexOf(content)
   newTweets[index].likes ++;

   this.setState({tweets: newTweets})
  }
  handleNewTweet(tweet){
    var newTweet = this.state.tweets.slice(); 
    newTweet.unshift(tweet); 
    this.setState({tweets: newTweet});
  }
  render() { 
    let divStyle = {
      width: '100%',
      border: '2px solid gray',
      borderTop: 'none',
    };
    return (
    <div style={divStyle}>
    <Middle onNewTweet={this.handleNewTweet}/>
    <hr/>
    {this.state.tweets.map((content, index) => 
        <Tweets tweet={content.tweet} 
        like={content.likes}
        onLikes = {()=>this.handleLikes(content)}
        key={index}
    />
      )}
      </div>  );
  }
}
 
export default MiddleBody;
