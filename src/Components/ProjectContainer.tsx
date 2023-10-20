// This is a container for projects so it will be separated into Engine, Unreal, Unity/Uni, and Professional titles.
import React from 'react';
import find from 'list-files';

interface ProjectProps
{
    projectType: string;
}
const ProjectContainer: React.FC<ProjectProps> = ({projectType}) =>
{
  
    return (
      <div className="">
        <h1 className="">{projectType}</h1>
        <image></image>
      </div>
    );
}
export default ProjectContainer;