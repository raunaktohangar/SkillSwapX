import React from 'react';
import { BadgeCheck, Star } from 'lucide-react'; //install this package by this "npm install lucide-react"
import SkillCard from './SkillCard';

const SkillCardsPage = () => {
  const skills = [
    {
      title: 'Web Development',
      description: 'Collaborate on frontend/backend projects using latest tech.',
      tags: ['React', 'Node.js', 'Tailwind', 'API'],
      mode: 'Remote / Hybrid',
      level: 'Mid Level',
      levelColor: 'text-yellow-600 bg-yellow-200'
    },
    {
      title: 'Graphic Design',
      description: 'Exchange skills on Adobe Illustrator, Photoshop, and branding.',
      tags: ['Adobe', 'Figma', 'Branding'],
      mode: 'In-person - Delhi',
      level: 'Entry Level',
      levelColor: 'text-blue-600 bg-blue-200'
    },
    {
      title: 'Digital Marketing',
      description: 'Share strategies and tools for SEO, SEM and social media.',
      tags: ['SEO', 'Analytics', 'Content', 'Campaigns'],
      mode: 'Remote',
      level: 'Senior',
      levelColor: 'text-purple-600 bg-purple-200'
    },
    {
      title: 'UI/UX Design',
      description: 'Discuss best practices in user flows, wireframes, and user testing.',
      tags: ['Figma', 'Prototyping', 'User Testing'],
      mode: 'Hybrid - Bangalore',
      level: 'Mid Level',
      levelColor: 'text-yellow-600 bg-yellow-200'
    },
    {
      title: 'Public Speaking',
      description: 'Join to improve or mentor others in communication skills.',
      tags: ['Speaking', 'Confidence', 'Presentation'],
      mode: 'In-person - Mumbai',
      level: 'All Levels',
      levelColor: 'text-green-600 bg-green-200'
    },
    {
      title: 'Photography',
      description: 'Exchange photography techniques, editing tips, and gear insights.',
      tags: ['Editing', 'DSLR', 'Lightroom', 'Creativity'],
      mode: 'Remote / In-person',
      level: 'Entry Level',
      levelColor: 'text-blue-600 bg-blue-200'
    },
    {
      title: 'Language Exchange (Spanish-English)',
      description: 'Practice speaking Spanish with native speakers and offer English in return.',
      tags: ['Language', 'Culture', 'Spanish', 'English'],
      mode: 'Remote',
      level: 'Beginner',
      levelColor: 'text-pink-600 bg-pink-200'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Discuss ML models, datasets, and collaborate on projects or research.',
      tags: ['Python', 'ML', 'AI', 'Deep Learning'],
      mode: 'Hybrid - Hyderabad',
      level: 'Advanced',
      levelColor: 'text-red-600 bg-red-200'
    },
    {
      title: 'Fitness & Wellness',
      description: 'Find partners to exchange routines, workouts or yoga tips.',
      tags: ['Fitness', 'Yoga', 'Wellbeing', 'Motivation'],
      mode: 'In-person - Pune',
      level: 'All Levels',
      levelColor: 'text-green-600 bg-green-200'
    },
    {
      title: 'Cooking & Baking',
      description: 'Share and learn global recipes, techniques and nutrition tips.',
      tags: ['Food', 'Recipes', 'HealthyEating', 'Desserts'],
      mode: 'Remote / In-person',
      level: 'Mid Level',
      levelColor: 'text-orange-600 bg-orange-200'
    },
    {
      title: 'Video Editing',
      description: 'Collaborate and get feedback on projects using tools like Premiere Pro & DaVinci.',
      tags: ['Editing', 'Premiere', 'DaVinci', 'Storytelling'],
      mode: 'Remote',
      level: 'Mid Level',
      levelColor: 'text-yellow-600 bg-yellow-200'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Discuss smart contracts, dApps and learn together.',
      tags: ['Solidity', 'Crypto', 'Smart Contracts', 'Ethereum'],
      mode: 'Remote / Hybrid',
      level: 'Intermediate',
      levelColor: 'text-indigo-600 bg-indigo-200'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Skill Connect Hub</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCardsPage;
