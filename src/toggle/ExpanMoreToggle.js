import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ExpanMoreToggle.css"

function ExpanMoreToggle() {
  return (
  <div className="user-settings">
	  <div className="profile-darkButton">
                <div className="user-profile">
                    <img src="images/profile-pic.png" alt=""/>
                    <div>
                        <p> Alex Carry</p>
                        <NavLink href="#">See your profile</NavLink>
                    </div>
                </div>
                <div id="dark-button" onclick="darkModeON()">
                    <span></span>
                </div>
            </div>
            
            <div className="user-profile">
                <img src="images/feedback.png" alt=""/>
                <div>
                    <p> Give Feedback</p>
                    <a href="#">Help us to improve</a>
                </div>
            </div>
            
            <div className="settings-links">
                <img src="images/setting.png" alt="" className="settings-icon"/>
                <a href="#">Settings & Privary <img src="images/arrow.png" alt=""/></a>
            </div>

            <div className="settings-links">
                <img src="images/help.png" alt="" className="settings-icon"/>
                <a href="#">Help & Support <img src="images/arrow.png" alt=""/></a>
            </div>

            <div className="settings-links">
                <img src="images/Display.png" alt="" className="settings-icon"/>
                <a href="#">Display & Accessibility <img src="images/arrow.png" alt=""/></a>
            </div>

            <div className="settings-links">
                <img src="images/logout.png" alt="" className="settings-icon"/>
                <a href="#">Logout <img src="images/arrow.png" alt=""/></a>
            </div>
  </div>)
}

export default ExpanMoreToggle;
