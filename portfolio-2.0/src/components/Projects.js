import React from 'react';
import workdayPicture from './assets/images/Workday-Project.jpg';
import quizPicture from './assets/images/Quiz-Picture.png';



function Projects() {
  return (
    <div className='App-header'>
      <h2>Take a look at some projects below: </h2>
      <a href='https://iangoodwin173.github.io/work-day-scheduler/'>
        <img className='project-images' src={workdayPicture} alt='workday project'></img>
      </a>

      <a href='https://iangoodwin173.github.io/coding-quiz/'>
        <img className='project-images' src={quizPicture} alt='quiz project'></img>
      </a>
      <p>More projects coming soon</p>
    </div>
  );
}

export default Projects;
