import React from 'react';
import ProjectTopicPoint from '../ProjectTopicPoint';

const InfiniteHallwayProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col items-center space-y-10'>
      <p className='mt-10 mb-10 text-3xl'>
        Infinite Hallway
      </p>

      <img src="/ProjectAssets/InfiniteHallway/InfiniteHallwayPreview.gif" className='max-w-[80%] w-[50%]' />
      <ProjectTopicPoint isDarkMode={darkModeEnabled}
        projectPointTexts={["Our gdml (aie third year) team decided to do a mind bending horror/thriller game.", "Our two designers really wanted the player to be on edge and the best way we found to do that was changing the environment constantly whenever the player would look away"]}
        projectImgSrc='/ProjectAssets/InfiniteHallway/InfiniteHallwayUnitySceneGif.gif'
      />
      <ProjectTopicPoint isDarkMode={darkModeEnabled}
        projectPointTexts={["I created a small script that allowed the designers to assign unity events whenever the player would enter a collider and was looking in an angle range of a direction."]}
        projectImgSrc=' '
      />
      <a href="https://caerwyn.itch.io/liminal-sleep" target="_blank" className='text-blue-500 hover:underline'>You can download and play the game from Itch.io here. The game is around 10 minutes long, would love for you to try it out!</a>
    </div>
  );
}
export default InfiniteHallwayProject;
