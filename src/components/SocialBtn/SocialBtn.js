import React from 'react';
import './index.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const SocialBtn = (props) => {
  return (
    <button type="button">{props.iconChoice === 'GitHub' ? (<div><Link to="github.com"><GitHubIcon /></Link></div>) : <div><Link to="linkedin.com"><LinkedInIcon /></Link></div>}</button>
  )
}

SocialBtn.propTypes = {
  iconChoice: PropTypes.string.isRequired
}


export default SocialBtn;