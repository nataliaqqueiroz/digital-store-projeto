import React from 'react';
import "./Sectionstyle.css";

const Section = ({ title, titleAlign, link, children }) => {

  const sectionStyles = {
    display: 'flex',
    justifyContent: titleAlign === 'center' ? 'center' : 'flex-start',
    alignItems: 'center',
  };

  const titleStyles = {
    flex: 1,
    textAlign: titleAlign,
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#c92071',
    fontSize: '16px',
  };


  return (
    <div className="section">
    <section style={sectionStyles}>
      <h1 style={titleStyles}>{title}</h1>
      {link && link.href && link.text && (
        <a href={link.href} style={linkStyles}>
          {link.text}
        </a>
      )}
      <div>
        {children}
      </div>
    </section>
    </div>
  );
};

export default Section;
