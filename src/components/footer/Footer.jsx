import React from 'react';
import VK from '../../pictures/vk.svg.png';
import Mail from '../../pictures/mail.svg.png';
import Inst from '../../pictures/inst.png';
import Email from '../../pictures/email.png';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer__container">
      <h1 className="footer__tittle">Contacts</h1>
      <h2 className="footer__text">Want to know more or just chat?<br></br>You are welcome!</h2>
      <div className="footer__button-container"><button className="footer__button"><p className="button__text">Send Message</p></button></div>
      <div className="footer__pictures">
        <div className="footer__info">
          <img src={VK} alt="VK" />
          <div className="footer__text">@jeverlius</div>
        </div>
        <div className="footer__info">
          <img src={Mail} alt="Mail" />
          <div className="footer__text">icherevkov@sfedu.ru</div>
        </div>
        <div className="footer__info">
          <img src={Email} alt="Email" />
          <div className="footer__text">jeverlius@mail.ru</div>
        </div>
        <div className="footer__info">
          <img src={Inst} alt="Inst" />
          <div className="footer__text">@frenchgoy</div>
        </div>
      </div>
      <h2 className="footer__reclam">Like me on<br></br>VK, Instagram, Behance, Dribble</h2>
    </div>
  )
}

export default Footer