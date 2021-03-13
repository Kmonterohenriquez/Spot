import React from "react";
import '../styles/Team.sass'
const Person = ({ person }) => {
  return (
    <div className="member">
      <div className="picture-container">
        <img src={person.picture} alt={person.name} />
      </div>
      <div className="Team-content">
        <p className="member-name">{person.name}</p>
        <p className="red-paragraph position-job">{person.position}</p>
        <div className="social-media">
          <div className="circle">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="circle">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="circle">
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
