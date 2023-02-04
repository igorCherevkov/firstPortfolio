import React from 'react';
import photo from '../../pictures/first-photo.svg';
import phot from '../../pictures/myPhoto.jpg';
import './manName.css';

const ManName = () => {
  return (
    <div className="slide__container">
      <div className="slide__up">
        <h1 className="slide__tittle">Igor<br></br>Cherevkov</h1>
        <h2 className="slide__text">Beginner frontend developer<br></br>19 years old, Taganrog</h2>
        <h2 className="slide__language">RU / ENG</h2>
      </div>
      <div className="slide__down">
        <img src= {phot} alt="photo" className='slide__down-photo'/>
      </div>
    </div>
  )
}

export default ManName