import React, { useEffect, useState } from 'react';
import DelayedImage from './DelayedImage';

const ProjectPreview: React.FC<{projectName: string, showTitle: boolean, onClickFunction: (name: string) => void}> = ({projectName, showTitle, onClickFunction}) =>
{
    let projectNameWithoutSpace = projectName.replace(/\s/g, '');
    let filePath = '/ProjectAssets/' + projectNameWithoutSpace + "/" + projectNameWithoutSpace + "PreviewDescription" + ".md";
    
    const [previewDescription, setPreviewDescription] = useState('');

    useEffect(() => {
      const mrk = new Request(filePath);
      fetch(mrk).then(data => data.text()).then(text => setPreviewDescription(text));
    });
  
  return (
    <div className="flex flex-col items-center justify-center mt-8 relative bg-slate-900 dark:bg-dark_theme-default group min-w-[200px] rounded">
      <button className="" onClick={() => {onClickFunction(projectNameWithoutSpace)}}>

        <DelayedImage projectName={projectNameWithoutSpace} className="relative inset-0 object-cover w-full rounded h-full opacity-90 group-hover:opacity-50" ></DelayedImage>

        <div className="text-truncate overflow-hidden transition-all absolute opacity-100 group-hover:opacity-100 w-full align-middle max-h-[75%] bottom-[0%] text-center">
          <h3 className="text-3xl text-white dark:text-dark_text-defaultWhite mb-4 group-hover:opacity-0 translate-y-2/3 group-hover:-translate-y-[130%] duration-100">
            {showTitle == true ? projectName : ""}  
          </h3>
          <p className={"text-base text-light_text-defaultWhite dark:text-dark_text-defaultWhite mr-4 ml-4 h-40 opacity-0 group-hover:opacity-100 mt-20 duration-300 " + (showTitle == true ? "group-hover:-translate-y-[60%]" : "group-hover:-translate-y-[50%]")}>
              {previewDescription}
          </p>
        </div>
      </button>
    </div>
  );
}

export default ProjectPreview;