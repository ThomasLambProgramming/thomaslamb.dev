// This is a container for projects so it will be separated into Engine, Unreal, Unity/Uni, and Professional titles.
import React from 'react';
import ProjectPreview from './ProjectPreview';

const ProjectContainer: React.FC<{projects: string[], typeTitle: string}> = ({projects, typeTitle}) =>
{
    return (
      <div className="mb-14 ml-24">
        <h2>
          {typeTitle}
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 h-auto w-auto mr-14'>
        {projects.map((project: string) => (
          <li className='list-none'>{<ProjectPreview projectName={project} />}</li>
          ))}
          </div>
      </div>
    );
}
export default ProjectContainer;