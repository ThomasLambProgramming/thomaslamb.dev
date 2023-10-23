import React, { useEffect, useState } from 'react';

const ProjectPreview: React.FC<{projectName: string, showTitle: boolean, onClickFunction: (name: string) => void}> = ({projectName, showTitle, onClickFunction}) =>
{
    let projectNameWithoutSpace = projectName.replace(/\s/g, '');
    let filePath = '/ProjectAssets/' + projectNameWithoutSpace + "/" + projectNameWithoutSpace + "PreviewDescription" + ".md";
    
    const [previewDescription, setPreviewDescription] = useState('');

    useEffect(() => {
      const mrk = new Request(filePath);
      fetch(mrk).then(data => data.text()).then(text => setPreviewDescription(text));
    });
  
  
  
  // Yeah the css here is fucking terrible, i was forced to add this because im 99.9% sure that
  // The css for the grid was wrong and doing the text popup was then screwed up because of it
  // it got it roughly to were i wanted but there is probably some bad / unused / pointless classes added to elements.
  return (
    <div className="flex flex-col items-center justify-center mt-12 relative bg-slate-900 group min-w-[200px] rounded">
      <button className="" onClick={() => {onClickFunction(projectNameWithoutSpace)}}>

        <img className="relative inset-0 object-cover w-full rounded h-full group-hover:opacity-50 "
          src={"/ProjectAssets/" + projectNameWithoutSpace + "/" + projectNameWithoutSpace + "Preview.gif"}/>

        <div className="text-truncate overflow-hidden transition-all absolute opacity-100 group-hover:opacity-100 w-full align-middle max-h-[75%] bottom-[0%] text-center">
          <h3 className="text-3xl text-white mb-4 group-hover:opacity-0 translate-y-2/3 group-hover:-translate-y-[130%] duration-100">
            {showTitle == true ? projectName : ""}  
          </h3>
          <p className={"text-base text-white mr-4 ml-4 h-40 opacity-0 group-hover:opacity-100 mt-20 duration-300 " + (showTitle == true ? "group-hover:-translate-y-[60%]" : "group-hover:-translate-y-[50%]")}>
              {previewDescription}
          </p>
        </div>
      </button>
    </div>
  );
}

export default ProjectPreview;