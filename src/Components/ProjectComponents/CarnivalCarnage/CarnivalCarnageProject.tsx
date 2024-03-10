import React from 'react';
import ProjectTopicPoint from '../ProjectTopicPoint';

const CarnivalCarnageProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex space-y-10 flex-col items-center'>
      <p className='mt-10 mb-10 text-3xl'>
        Carnival Carnage
      </p>

      <ProjectTopicPoint isDarkMode={darkModeEnabled}
        projectPointTexts={["During my advanced diploma of games development, we were placed into a team of three designers, three programmers, and three artists that would act as though they were contracted to only produce the assets to a given brief. ", "DISCLAIMER: The game is fully functional but I did not take any screen captures while using the headset and I do not own a Oculus headset, this game was developed on site at AIE"]}
        projectImgSrc='/ProjectAssets/CarnivalCarnage/CarnivalCarnage.gif'
      />

      <ProjectTopicPoint isDarkMode={darkModeEnabled}
        projectPointTexts={["Carnival Carnage is a vr arcade game in which the player must smash clown heads within a time limit with a hammer that can return to them."]}
        projectImgSrc=' '
      />

      <p className='mt-4 mb-4 text-3xl'>
        Working In Vr
      </p>

      <ProjectTopicPoint isDarkMode={darkModeEnabled}
        projectPointTexts={["Working with Unity's OpenXr development environment was a challenge that provided alot of learning for me and the team. The requirement to make everything into a prefab and to be very specific on what changes had to be made to the player controller allowed us to learn about the importance of communication and structuring git commits to be informative."]}
        projectImgSrc=' '

      />
      <ProjectTopicPoint isDarkMode={darkModeEnabled}
        projectPointTexts={["I learned a lot about learning itself through needing to fill in the blanks while reading documentation that is not the most informative for troubleshooting.",
          "Getting to work on Vr was also alot of fun for testing as our game included destructables from throwing the hammer."]}
        projectImgSrc=' '
      />

      <p className='mt-4 mb-4 text-3xl'>
        Planning for assets
      </p>

      <ProjectTopicPoint isDarkMode={darkModeEnabled}
        projectPointTexts={["Due to the limited time that we were given to complete this project. The art team was considered to be contractors working to a set brief.", "This gave me a lot of learning opportunities as we had to really design the game and mechanics to accommodate the lack of changes that could be made to the art."]}
        projectImgSrc=' '
      />
      <p className='mt-4 mb-4'>

      </p>

    </div>
  );
}

export default CarnivalCarnageProject;
