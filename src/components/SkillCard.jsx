// // src/components/SkillCard.jsx
import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="border border-gray-400 rounded-xl p-5 shadow hover:shadow-lg transition-all duration-300 bg-white">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mt-1">{skill.title}</h2>
        </div>
        {/* Optional bookmark icon placeholder */}
        <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
          🔖
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-3">{skill.description}</p>

      <div className="flex flex-wrap gap-2 text-sm mb-4">
        {skill.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-indigo-700 px-3 py-1 rounded-full font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      <button className="bg-pink-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
        Connect
      </button>
    </div>
  );
};

export default SkillCard;
