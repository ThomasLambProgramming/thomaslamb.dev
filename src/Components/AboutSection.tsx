import React from 'react';

const AboutSection: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <div className={"" + (isDarkMode ? "shadow-gray-700 shadow-md" : "")}>
      <h1 className='text-2xl ml-3 dark:text-DarkNeutral-300 text-DarkNeutralN-100 p-2'>About Me</h1>
      <p className='ml-8'>
        Hello, my name is Thomas Lamb. I have been working as a game programmer for just under 2 years. I am eager to learn any form of game programming, with a current interest in graphics and gameplay.
      </p>
      <h2 className='ml-5 mt-4 text-2xl dark:text-DarkNeutral-300'>
        Current Projects
      </h2>
      <ul className='list-disc ml-8'>
        <li className='ml-10 mt-3'>A dwarf puzzle game</li>
        <li className='ml-10 mb-8'>Small opengl engine to test graphics programming such as shadow maps</li>
      </ul>
    </div>
  );
}

export default AboutSection;
