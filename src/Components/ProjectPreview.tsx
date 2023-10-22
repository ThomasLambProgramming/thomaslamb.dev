import React, { useEffect, useState } from 'react';

const ProjectPreview: React.FC<{projectName: string, onClickFunction: (name: string) => void}> = ({projectName, onClickFunction}) =>
{
    let projectNameWithoutSpace = projectName.replace(/\s/g, '');
    let filePath = '../ProjectAssets/' + projectNameWithoutSpace + "/" + projectNameWithoutSpace + "PreviewDescription" + ".md";
    
    const [previewDescription, setPreviewDescription] = useState('');

    useEffect(() => {
        import(
            /* @vite-ignore */                    
            filePath).then(res => {
            fetch(res.default)
            .then(res => res.text())
            .then(res => {
                setPreviewDescription(res);
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    });
  
  
  
  // Yeah the css here is fucking terrible, i was forced to add this because im 99.9% sure that
  // The css for the grid was wrong and doing the text popup was then screwed up because of it
  // it got it roughly to were i wanted but there is probably some bad / unused / pointless classes added to elements.
  return (
    <div className="flex flex-col items-center justify-center mt-12 relative bg-slate-900 group min-w-[200px] rounded">
      <button className="" onClick={() => {onClickFunction(projectNameWithoutSpace)}}>

        <img className="relative inset-0 object-cover w-full rounded h-full group-hover:opacity-50 "
          src={"src/ProjectAssets/" + projectNameWithoutSpace + "/" + projectNameWithoutSpace + "Preview.gif"}/>

        <div className="text-truncate overflow-hidden transition-all absolute opacity-100 group-hover:opacity-100 w-full align-middle max-h-[75%] bottom-[0%] text-center">
          <h3 className="text-3xl text-white mb-4 group-hover:opacity-0 translate-y-2/3 group-hover:-translate-y-[130%] duration-100">
            {projectName}  
          </h3>
          <p className=" text-base text-white mr-4 ml-4 h-40 opacity-0 group-hover:opacity-100 mt-20 group-hover:-translate-y-[60%] duration-300">
            {previewDescription}
          </p>
        </div>
      </button>
    </div>
  );
}

export default ProjectPreview;