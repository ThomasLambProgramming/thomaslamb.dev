import React, { Fragment } from 'react';
import ProjectTopicPoint from '../ProjectTopicPoint';
const GraphicsEngineProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <Fragment>
      <ProjectTopicPoint isDarkMode={darkModeEnabled}
        projectPointTexts={["This project is currently in development, this page will be updated at a later date."]}
        projectImgSrc=' '
      />
    </Fragment>
  );
}
export default GraphicsEngineProject;
