import React from 'react';
import SocialBtn from '../../components/SocialBtn';
import './index.scss'
import Button from '@material-ui/core/Button';

const QuoteBox = () => {
  const myQuote = "You miss 100% of the shots you don't take."
  const myAuthor = "Wayne Gretsky"
  return (
    <div id="quote-box">
      <h2 id="text">"{myQuote}"</h2>
      <div id="author">- {myAuthor}</div>
      <div className="buttons-flex-container">
        <div className="icon-container">
          <SocialBtn iconChoice='GitHub' />
          <a href={`https://twitter.com/intent/tweet?`} id="tweet-quote" target="_blank"> <SocialBtn /></a>
        </div>
        <Button id="new-quote">Click for more quotes</Button>
      </div>
    </div>
  )
}

export default QuoteBox;