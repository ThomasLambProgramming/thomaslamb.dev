// This is a container for projects so it will be separated into Engine, Unreal, Unity/Uni, and Professional titles.
import React from 'react';
import ProjectPreview from './ProjectPreview';

const ProjectContainer: React.FC<{projects: string[], typeTitle: string, projectNameChange: (name: string) => void}> = ({projects, typeTitle, projectNameChange}) =>
{
    return (
      <div className="mb-14 ml-24 align mr-24 block">
        <h2 className=''>
          {typeTitle}
        </h2>
        <div className='grid grid-cols-3 md:grid-cols-3 min-w-full h-auto gap-4 w-auto m-auto max-w-screen-xl justify-center object-fill'>
        {projects.map((project: string) => (
          <li className='list-none rounded-lg'>{<ProjectPreview projectName={project} onClickFunction={projectNameChange}/>}</li>
          ))}
          </div>
          <hr className="h-px w-full my-8 opacity-80 bg-slate-600 border-0 dark:bg-slate-900" />
      </div>
    );
}
export default ProjectContainer;