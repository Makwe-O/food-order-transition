import React from 'react';
import Bell from '../../assets/bell.png';
import Calender from '../../assets/calender.png';
import Chat from '../../assets/chat.png';
import History from '../../assets/history.png';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__tab">
        <img src={Calender} alt="calender" width="18px" />
        <p>Schedule</p>
      </div>
      <div className="footer__tab">
        <img src={History} alt="history" width="18px" />
        <p>History</p>
      </div>
      <div className="footer__tab">
        <img src={Bell} alt="bell" width="18px" />
        <p>Notifications</p>
      </div>
      <div className="footer__tab">
        <img src={Chat} alt="chat" width="18px" />
        <p>Chat</p>
      </div>
    </div>
  );
};

export default Footer;
