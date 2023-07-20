import React from 'react';
import profilePicture from './assets/images/profile.jpg';

function Home() {
  return (
    <div className="App-header">
        <img className="profile-img" src={profilePicture} alt="Ian Goodwin"/>
      <h1 className="title-text">Ian Goodwin: Full-Stack Developer</h1>
  
      
      <p className="tagline-text">
        Hi, I'm Ian. I'm a Full-Stack Developer that also enjoys gaming and golfing.
      </p>
    </div>
    
    
  );
}

export default Home;
