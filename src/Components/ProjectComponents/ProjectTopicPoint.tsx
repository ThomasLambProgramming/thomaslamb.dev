import React from 'react';

const ProjectTopicPoint: React.FC<{ isDarkMode: boolean, projectPointTexts: string[], projectImgSrc: string }> = ({ isDarkMode, projectPointTexts, projectImgSrc }) => {
  if (projectImgSrc.startsWith(' ')) {
    return (
      <div className={`flex lg:flex-row flex-col rounded-md items-center max-w-[90%] ${isDarkMode ? " bg-DarkNeutral-200" : ""}`}>
        <div>
          {projectPointTexts.map((stringValue: string) => (
            <p className='mt-4 mb-4 w-[95%] mr-8 ml-4'>{stringValue}</p>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={`flex lg:flex-row flex-col rounded-md items-center max-w-[90%] ${isDarkMode ? " bg-DarkNeutral-200" : ""}`}>
      <div>
        {projectPointTexts.map((stringValue: string) => (
          <p className='mt-4 mb-4 w-[90%] mr-8 ml-4'>{stringValue}</p>
        ))}
      </div>
      <img src={projectImgSrc} className='max-w-[700px] h-full min-h-full'>
      </img>
    </div>
  );
}

export default ProjectTopicPoint;
