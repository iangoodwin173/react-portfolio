import React from 'react';
import profilePicture from './assets/images/profile.jpg';

function Profile() {
  return (
    <img className="profile-img" src={profilePicture} alt="Ian Goodwin"/>
  );
}

export default Profile;
