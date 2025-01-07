import React from 'react';

const AboutSection: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <div className={"pb-6 " + (isDarkMode ? "shadow-gray-700 shadow-md " : "")}>
      <h1 className='text-2xl ml-3 dark:text-DarkNeutral-300 text-DarkNeutralN-100 p-2'>About Me</h1>
      <p className='ml-8'>
        Hello, my name is Thomas Lamb. I have been working professionally as a game programmer for 2 years, with an additional 2 years university experience in Unity Engine. I am eager to learn any form of game programming, with a current interest in graphics and gameplay.
      </p>
      {/* <h2 className='ml-5 mt-4 text-2xl dark:text-DarkNeutral-300'>
        Current Projects
      </h2>
      <ul className='list-disc ml-8'>
        <li className='ml-10 mt-3'>OpenGL Renderer for learning graphics techniques such as anti-aliasing</li>
        <li className='ml-10 mb-8'>Escape room with many small interacting mechanics</li>
      </ul> */}
    </div>
  );
}

export default AboutSection;
