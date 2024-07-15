import React from 'react';

const AboutSection: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <div className={"" + (isDarkMode ? "shadow-gray-700 shadow-md" : "")}>
      <h1 className='text-2xl ml-3 dark:text-Neutral-0 text-DarkNeutralN-100 p-2'>About me</h1>
      <p className='ml-5'>
        Hello, my name is Thomas Lamb. I have been working as a game programmer for just under 2 years. I am eager to learn any form of game programming, with a current interest in graphics and gameplay
      </p>
      <h2 className='ml-5 mt-4 text-xl'>
        Current projects:
      </h2>
      <p className='ml-10 mt-3'>
        - A dwarf puzzle game
      </p>
      <p className='ml-10 mb-4'>
        - Small opengl engine to test graphics programming such as shadow maps
      </p>

    </div>
  );
}

export default AboutSection;
