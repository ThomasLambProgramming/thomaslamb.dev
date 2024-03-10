import ProjectTopicPoint from '../ProjectTopicPoint';
import React from 'react';
const DirectXRendererProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col items-center space-y-20'>
      <ProjectTopicPoint isDarkMode={darkModeEnabled}
        projectPointTexts={["This project is currently in development, this page will be updated at a later date."]}
        projectImgSrc=' '
      />
    </div>
  );

}

export default DirectXRendererProject;
