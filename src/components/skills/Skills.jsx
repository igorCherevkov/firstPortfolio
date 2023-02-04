import React from 'react';
import Photoshop from '../../pictures/Photoshop.svg';
import Illustrator from '../../pictures/Illustrator.svg';
import Effects from '../../pictures/Effects.svg';
import Figma from '../../pictures/Figma.svg';
import VisualStudio from '../../pictures/visualStudio.svg..png';
import GitHub from '../../pictures/gitHub.svg';
import './skills.css';

const Skills = () => {
  return (
    <div className="skills__container">
      <h1 className="skills__tittle">Skills</h1>
      <h2 className="skills__text">I work with programs like</h2>
      <div className="skills__programms">
        <div className="programms__info">
        <img src= {VisualStudio} alt="VisualStudio" />
          <div className="programms__text">Visul Studio<br></br>Code</div>
        </div>
        <div className="programms__info">
          <img src= {GitHub} alt="GitHub" />
          <div className="programms__text">GitHub</div>
        </div>
        <div className="programms__info">
         <img src= {Figma} alt="Figma" />
         <div className="programms__text">Figma</div>
        </div>
      </div>
    </div>
  )
}

export default Skills