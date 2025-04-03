import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <nav className="w-full bg-blue-500 p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-white text-2xl font-bold">Skill Exchange</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:underline">About</Link>
            </li>
            <li>
<a href="#contact" className="text-white hover:underline">Contact</a>
            </li>
            <li>
              <Link to="/SignUp" className="text-white hover:underline">Sign Up / Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col items-center text-center p-8">
        <img
          src="./guitar.jpg" // Replace with your image URL
          alt="Skill Exchange"
          className="w-full h-auto object-cover rounded-lg shadow-lg mb-4"
        />
        <img
          src="./background.jpg" // Replace with your image URL
          className="w-full h-auto object-cover rounded-lg shadow-lg mb-4"
        />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-35">
          <h2 className="text-oklch(0.685 0.169 237.323) text-4xl font-bold bg-opacity-100 p-10 rounded-lg">
            A barter based Skill exchange Platform
          </h2>
        </div>
        <div className='absolute top-0 left-2/3 transform -translate-x-1/2 mt-300'>
        <h2 className=" text-3xl font-bold mb-4">Welcome to SkillSwapX</h2>
        <p className="text-lg font-bold mb-7 bg-opacity-100">
        SkillSwapX is a unique platform that enables individuals to exchange skills through a barter-based system. Instead of monetary transactions, users can offer their expertise in one area to learn a new skill in return, fostering a collaborative and growth-oriented community. Whether it’s coding for design, marketing for content writing, or language learning for business skills, Skill Xchange connects users with the right partners for mutual learning.</p>
        <p className="text-lg font-bold mb-7">
        With smart matchmaking, secure communication, and a rating system, the platform ensures seamless and trustworthy exchanges. Designed for students, professionals, and enthusiasts, Skill Xchange promotes continuous learning, networking, and professional development, making skill-building more accessible and community-driven.
        </p>
        </div>
        
      </div>
      <div className="relative flex flex-col items-center text-center p-8 w-full">
        <p className="text-lg mb-4 bg-blue-500 text-white ">
        Join our community today and start exchanging skills with others! </p>
      </div>
      <div id="contact" className="flex flex-col items-center justify-center p-8 bg-gray-200 w-full">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">If you have any questions, feel free to reach out!</p>
        <form className="flex flex-col space-y-4 w-full max-w-md">
          <input type="text" placeholder="Your Name" className="p-2 border border-gray-300 rounded" required />
          <input type="email" placeholder="Your Email" className="p-2 border border-gray-300 rounded" required />
          <textarea placeholder="Your Message" className="p-2 border border-gray-300 rounded" required></textarea>
          <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center p-8 bg-gray-200 w-full">
      <p className='text-lg mb-4'>
        Email: support@skillexchange.com</p>
      <p className="text-lg mb-4">
       Phone: (123) 456-7890
      </p>
      </div>
      
    </div>
  );
};

export default Home;