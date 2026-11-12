import React from 'react';

const Section = ({ id, className = '', children }) => {
  return (
    <section id={id} className={` bg-white ${className}`}>
      <div className="mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
