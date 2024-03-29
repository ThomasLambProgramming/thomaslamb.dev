import React from 'react';
import ProjectTopicPoint from '../ProjectTopicPoint';

const IsolatorProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col items-center space-y-10'>
      <p className={`mt-10 mb-10 text-3xl ${darkModeEnabled ? "" : ""} `}>
        Isolator
      </p>

      <ProjectTopicPoint isDarkMode={darkModeEnabled}
        projectPointTexts={["This was a small puzzle game that I created with 6 other developers over the course of roughly 12 hours. This project was an exercise to see group dynamics within the team before going into the full development cycle of over 2 months at AIE for our second year project.",
          "The games design is simple but fun with your character moving around dodging projectiles that are bouncing around the arena. After a few seconds a board clearer is charged but only for the opposing side of the arena that is blocked off, the small squares in the corner will remove the walls and place new ones in the opposing axis, changing the game into one of management and quick movement to not get overwhelmed by asteroids and lose."]}
        projectImgSrc=' '
      />
      <img src="/ProjectAssets/Isolator/IsolatorPreview.gif"></img>
    </div>
  );
}

export default IsolatorProject;
