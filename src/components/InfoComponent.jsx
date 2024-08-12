import React from 'react';
import "./Footer.css";

const InfoComponent = ({ title, informations }) => {
  return (
    <div className="info-component">
      <h2>{title}</h2>
      <ul>
        {informations.map((info, index) => (
          <li key={index}>
            <a href={info.link}>{info.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoComponent;