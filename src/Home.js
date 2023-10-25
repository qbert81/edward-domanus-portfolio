// src/components/Home.js
import React from 'react';
import './styles/Home.css'; // Import any relevant styles

const Home = () => (
  <section id="home" className="section home">
    
    <div className="content">
      <div className="centered-text">
        <h1>Edward Domanus Portfolio</h1>
        <p>Programmer | Studying Computer Science at ISU</p>
      </div>
      <div className="subTitle"> This page is a work in progress and currently incomplete. Feel free to look at what I have so far.</div> <n/> <div className="subTitle">This site is coded by myself and code can be found <a href="https://github.com/qbert81/edward-domanus-portfolio" className="light-blue-link" target="_blank">here</a></div> 
    </div>

    <div className="centered-arrow-container">
      <div className="centered-arrow">
        <div className="arrow-button" onClick={() => handleArrowButtonClick()}>
          <span className="arrow">&#8595;</span>
        </div>
      </div>
    </div>
  </section>
);

const handleArrowButtonClick = () => {
  // Handle the click event when the arrow button is clicked
  // You can implement scrolling logic or any other action here
  console.log('Arrow Button Clicked');
};

export default Home;
