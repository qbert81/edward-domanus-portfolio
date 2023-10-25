import React, { useState } from 'react';
import './styles/Work.css'; // Import your CSS file

const Work = () => {
  const [isExpanded1, setExpanded1] = useState(false);
  const [isExpanded2, setExpanded2] = useState(false);
  const [isExpanded3, setExpanded3] = useState(false);
  const [isExpanded4, setExpanded4] = useState(false);
  const [isExpanded5, setExpanded5] = useState(false);

  const toggleExpansion1 = () => {
    setExpanded1(!isExpanded1);
    console.log("")
  };

  const toggleExpansion2 = () => {
    setExpanded2(!isExpanded2);
  };

  const toggleExpansion3 = () => {
    setExpanded3(!isExpanded3);
  };

  const toggleExpansion4 = () => {
    setExpanded4(!isExpanded4);
  };
  const toggleExpansion5 = () => {
    setExpanded5(!isExpanded5);
  };

  return (
    <section id="work" className="work-section">
      <h2 className="section-title">My work</h2>
      <div className="work-items">
        <div className={`work-item ${isExpanded1 ? 'expanded' : ''}`} style={{ maxHeight: isExpanded1 ? '100px' : `20px` }}>
          <div className="work-title" onClick={toggleExpansion1}>
            Portfolio Website
            <span className="arrow">{isExpanded1 ? '▲' : '▼'}</span>
          </div>
          <div className="work-details">
            <p>I have coded this Portfolio website you are viewing now using react js as well as Googles hosting service firebase. The github for this website can be viewed here:
              <a href="https://github.com/qbert81/edward-domanus-portfolio" className="light-blue-link" target="_blank">https://github.com/qbert81/edward-domanus-portfolio</a></p>
          </div>
        </div>

        <div className={`work-item ${isExpanded2 ? 'expanded' : ''}`}>
          <div className="work-title" onClick={toggleExpansion2}>
            Bus farebox simulator
            <span className="arrow">{isExpanded2 ? '▲' : '▼'}</span>
          </div>
          <div className="work-details">
            <p>This applications is developed for Company Genfare. The purpose of this application is to test the integrety of a server recording transactions of many bus fareboxes without having to simulate transactions on many physical farebox machines.
              It allows the user to create fareboxes simulated on the users computer and send messages to the server from these simulated machines. </p>
              <n/>
            <p>The code for this application contains sensitive information so it is not open source. Here is some screenshots of the applications UI and functionallity: </p>
          </div>
        </div>

        <div className={`work-item ${isExpanded3 ? 'expanded' : ''}`}>
          <div className="work-title" onClick={toggleExpansion3}>
            Java Shoots and ladders game
            <span className="arrow">{isExpanded3 ? '▲' : '▼'}</span>
          </div>
          <div className="work-details">
            <p>This application is a basic shoots and ladders game coded in Java for a project in one of my university classes</p>
            <n/>
            <p>The link for this projects github is: <a href="https://github.com/qbert81/ShootsAndLadders" className="light-blue-link" target="_blank">https://github.com/qbert81/ShootsAndLadders</a> </p>
          </div>
        </div>


        <div className={`work-item ${isExpanded4 ? 'expanded' : ''}`} style={{ maxHeight: isExpanded4 ? '2800px' : `20px` }}>
          <div className="work-title" onClick={toggleExpansion4}>
            Video game intro and character creator - LUA
            <span className="arrow">{isExpanded4 ? '▲' : '▼'}</span>
          </div>
          <div className="work-details">
            <p>This is a commisioned project which I did for a Roblox game and coded in Lua. It contains an intro scene with various options to view games credits, load a game, or create a new character.</p>
            <n/>
            <p>This code is not open source as it was a commisioned project. here are some clips of what this project looks like:</p>

            <n/>
            <p>This is a picture character creator:</p>
            <img src="/Assets/AO/CharacterCreator.PNG" alt="My Image" />
            <n/>
            <p>This picture of the class selection screen:</p>
            <img src="/Assets/AO/SelectClass.PNG" alt="My Image" />
            <n/>
            
            <p>This is a short video of the character creator:</p>
            <div>
              <video className='video' controls>
                <source src="/Assets/AO/CharacterCreator.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <n/>

            <p>This is a short video of the intro scene:</p>
            <div>
              <video className='video' controls>
                <source src="/Assets/AO/IntroScene.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
            </div>

        </div>
        {/* Add more work items with titles and details as needed */}
      </div>
    </section>
  );
};

export default Work;
