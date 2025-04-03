import React from 'react';
import SkillCard from './SkillCard';

const SkillCardsPage = () => {
  // Sample data for skills
  const skills = [
    { title: 'Web Development', description: 'Learn to build websites and web applications.' },
    { title: 'Graphic Design', description: 'Create stunning visuals and graphics.' },
    { title: 'Digital Marketing', description: 'Master the art of online marketing.' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Available Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCardsPage;
