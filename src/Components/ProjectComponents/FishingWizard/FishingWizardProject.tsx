
import React from 'react';
import ProjectTopicPoint from '../ProjectTopicPoint';

const FishingWizardProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col items-center space-y-20'>
      <ProjectTopicPoint isDarkMode={darkModeEnabled}
        projectPointTexts={["This Game is currently in development, We are currently in pre-production so this page will be updated at a later date."]}
        projectImgSrc=' '
      />
    </div>
  );
}
export default FishingWizardProject;

