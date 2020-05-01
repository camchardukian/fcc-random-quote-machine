import React from 'react';
import './index.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import PropTypes from 'prop-types';

const SocialBtn = (props) => {
  return (
    <button type="button">{props.iconChoice === 'GitHub' ?
      (<div><a href="https://github.com/camchardukian"><GitHubIcon /></a></div>)
      : <div><TwitterIcon /></div>}</button>
  )
}

SocialBtn.propTypes = {
  iconChoice: PropTypes.string
}


export default SocialBtn;