// ScrollLink.js
import React from 'react';

const ScrollLink = ({ to, children }) => {
  const scrollToSection = () => {
    const section = document.querySelector(to);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToSection}>
      {children}
    </button>
  );
};

export default ScrollLink;
