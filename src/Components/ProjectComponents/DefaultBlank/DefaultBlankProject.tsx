import React, { Fragment } from 'react';

const DefaultBlankProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <Fragment>
      <p className={`${darkModeEnabled ? "" : ""}`}></p>
    </Fragment>
  );
}

export default DefaultBlankProject;
