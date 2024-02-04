import React from 'react';
import DelayedImage from './DelayedImage';

const ProjectDescription: React.FC<{isDarkMode: boolean, projectName: string, technologiesList: string[], projectDescriptions: string[], onClickFunction: (name: string) => void}> = ({isDarkMode, projectName, technologiesList, projectDescriptions, onClickFunction}) =>
{
  let projectNameWithoutSpace = projectName.replace(/\s/g, '');
  
  return (
    <div className={"min-h-[400px] min-w-[400px] mt-4 rounded-md flex flex-col lg:items-start items-center lg:flex-row w-full " + (isDarkMode ?
    "dark:bg-DarkNeutral-200" : "bg-Neutral-400")}>
      {/* Project Description + skills and etc. */}
      <div className="flex flex-col items-start pt-6 ml-6 w-full h-[90%]">
        <div className="min-w-[90%] w-[30%]">
          <h3 className={'text-4xl font-medium mb-4 '+ (isDarkMode ?
              "text-Neutral-400" : "text-DarkNeutral-200")}>{projectName}</h3>
          
          <div className='flex flex-row w-full justify-start space-x-3 mb-4'>
            {technologiesList.map((techString: string) => (
              <p className={"bg-slate-600 rounded-lg text-lg pl-6 pr-6 pt-1 pb-1 text-center align-middle justify-center "+ (isDarkMode ?
                "dark:bg-Neutral-200 text-DarkNeutral-200" : "bg-Neutral-400")}>{techString}</p>
            ))}
          </div> 

          {projectDescriptions.map((projDesc: string) => (
              <p className="mb-4 text-lg">{projDesc}</p>
            ))}   

        </div>
      </div>
      {/* Project image and details button */}
      <div className='max-w-[40%] min-w-[40%] flex flex-col items-center justify-center'>
        <DelayedImage projectName={projectNameWithoutSpace} className='min-h-[70%] h-[100%] items-center'></DelayedImage>
        <button className='w-[90%] rounded-sm bg-slate-500 border-slate-600 border-2 mt-4'>Project Details</button>
      </div>
    </div>
  );
}

export default ProjectDescription;