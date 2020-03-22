import React from 'react';
import SocialBtn from '../../components/SocialBtn';
import './index.scss'
const QuoteBox = () => {
  return (
    <div className="quote-box-container">
      <h2 className="quote-text">You miss 100% of the shots you don't take.</h2>
      <div className="quote-author">Wayne Gretsky</div>
      <SocialBtn />
      <SocialBtn />
      <button type="button" className="more-quotes-btn">Click for more quotes</button>
    </div>
  )
}

export default QuoteBox;