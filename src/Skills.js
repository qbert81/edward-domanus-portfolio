// src/components/Skills.js
import React, { useState } from 'react';
import SkillBox from './Components/SkillBox'; // Import the SkillBox component
import './styles/Skills.css'; // Import the styles for this page



const Skills = () => {

  // State to track whether the resume section is open
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Function to toggle the resume section
  const toggleResume = () => {
    console.log(isResumeOpen)
    setIsResumeOpen(!isResumeOpen);
    //change the text
    
    const button = document.getElementById('resume-button');
    const buttonText = button.querySelector('.vertical-text');
    console.log(buttonText.textContent)
    if (isResumeOpen) {
      buttonText.textContent = 'Hide Resume';
    } else {
      buttonText.textContent = 'Show Resume';
    }


  };

  // Function to open the resume in a new tab
  const openResumeInNewTab = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="skills">
      <div className='skills-container'>
        <SkillBox title="Software Development" icon={<i className="fas fa-code"></i>}>
          <p>Experienced in Java, JavaScript, C++, Python, and Lua.</p>
        </SkillBox>
        <SkillBox title="Game Development" icon={<i className="fas fa-gamepad"></i>}>
          <p>3 years of experience with Roblox LUA game development | 1 year of experience with Unreal Engine game development.</p>
        </SkillBox>
        <SkillBox title="Front-End Development" icon={<i className="fas fa-desktop"></i>}>
          <p>Experienced with React, HTML, CSS, and JavaScript and have worked on multiple React projects. Experienced with UI/UX.</p>
        </SkillBox>

      </div>
      <div class={`resume-container resume-${isResumeOpen ? 'open' : 'closed'}`}>
        <div className='resume'>
          <embed src="/resume.pdf" type="application/pdf" width="100%" height="100%" />
        </div>
        <button className='resume-button resume-button-right' id="resume-button" onClick={toggleResume}>
          <span class="vertical-text">{isResumeOpen ? 'Hide Resume' : 'Show Resume'}</span>
        </button>
      </div>



    </div>
  );
};

export default Skills;






