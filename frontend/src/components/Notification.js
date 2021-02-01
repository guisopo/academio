import React from 'react';
import avatarImage from '../images/avatar-profe.jpg';

const Notification = ({sender, date, subject, opened}) => {
  return (
    <div className={` notification ${opened ? "" : "notification--unopened"}`}>
        <div className="notification__avatar image-container">
          <img src={avatarImage} alt=""/>
        </div>
        <a className="notification__data" href="#">
          <div className="notification__info">
            <span className="notification__sender truncate">{sender}</span>
            <span className="notification__date">{date}</span>
          </div>
          <div className="notification__subject">
            <span className="truncate">{subject}</span>
          </div>
        </a>
      </div>
  );
};

export default Notification;