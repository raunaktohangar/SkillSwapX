// src/components/SkillCard.jsx
import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-bold">{skill.title}</h3>
      <p>{skill.description}</p>
      <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">Connect</button>
    </div>
  );
};

export default SkillCard;