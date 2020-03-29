import React from 'react';
import SocialBtn from '../../components/SocialBtn';
import './index.scss'
import Button from '@material-ui/core/Button';

const QuoteBox = () => {
  const myQuote="You miss 100% of the shots you don't take."
  const myAuthor="Wayne Gretsky"
  return (
    <div className="quote-box-container">
      <h2 className="quote-text">"{myQuote}"</h2>
      <div className="quote-author">- {myAuthor}</div>
      <div className="buttons-flex-container">
      <div>
      <SocialBtn iconChoice='GitHub' />
      <SocialBtn />
      </div>
      <Button className="more-quotes-btn">Click for more quotes</Button>
      </div>
    </div>
  )
}

export default QuoteBox;