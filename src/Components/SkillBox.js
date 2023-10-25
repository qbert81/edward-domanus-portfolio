import React from 'react';

const SkillBox = ({ title, icon, children }) => {
  return (
    <div className="skill-box">
      {console.log(icon)}
      {icon && <div className="icon">{icon}</div>}
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default SkillBox;
