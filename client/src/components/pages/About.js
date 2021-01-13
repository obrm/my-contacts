import React from 'react';

const About = () => {
  return (
    <div>
      <h1>אודות:</h1>
      <p className="my-1">
        אפליקציית Full stack לניהול אנשי קשר שנכתבה ב-React על ידי{' '}
        <a href="https://github.com/obrm" target="_blank" rel="noreferrer">
          אורי ברעם
        </a>
        .
      </p>
      <p className="bg-dark p">
        <strong>גרסה</strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
