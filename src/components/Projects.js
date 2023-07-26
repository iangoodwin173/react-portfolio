import React from 'react';
import workdayPicture from './assets/images/Workday-Project.jpg';
import quizPicture from './assets/images/Quiz-Picture.png';
import geoPairing from './assets/images/geopairing.png';



function Projects() {
  return (
    <div className='App-header'>
      <h2>Take a look at some projects below: </h2>
      <a href='https://iangoodwin173.github.io/work-day-scheduler/'>
        <img className='project-images' src={workdayPicture} alt='workday project'></img>
        <a href='https://github.com/iangoodwin173/work-day-scheduler'>Repository</a>
      </a>

      <a href='https://iangoodwin173.github.io/coding-quiz/'>
        <img className='project-images' src={quizPicture} alt='quiz project'></img>
        <a href='https://github.com/iangoodwin173/coding-quiz'>Repository</a>
      </a>

      <a href='https://geo-pairing-2def7ca5b56b.herokuapp.com/'>
        <img className='project-images' src={geoPairing} alt='quiz project'></img>
        <a href='https://github.com/iangoodwin173/geo-pairing'>Repository</a>
      </a>
      <p>More projects coming soon</p>
    </div>
  );
}

export default Projects;
