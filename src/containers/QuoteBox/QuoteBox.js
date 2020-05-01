import React, { useState } from 'react';
import SocialBtn from '../../components/SocialBtn';
import './index.scss'
import Button from '@material-ui/core/Button';

const QuoteBox = () => {
  const [quote, setQuote] = useState("Really pay attention to negative feedback and solicit it, particularly from friends. ... Hardly anyone does that, and it's incredibly helpful.");
  const [author, setAuthor] = useState("Elon Musk");
  const getNewQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (!response.ok) throw new Error(data);
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      // If the API request fails, log the error to the console.
      console.error(error);
    }
  };
  return (
    <div id="quote-box">
      <h2 id="text">"{quote}"</h2>
      <div id="author">- {author}</div>
      <div className="buttons-flex-container">
        <div className="icon-container">
          <SocialBtn iconChoice='GitHub' />
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote} -${author}`}
            id="tweet-quote"
            target="_blank"
            rel="noopener noreferrer">
            <SocialBtn />
          </a>
        </div>
        <Button id="new-quote" onClick={getNewQuote}>Click for more quotes</Button>
      </div>
    </div>
  )
}

export default QuoteBox;