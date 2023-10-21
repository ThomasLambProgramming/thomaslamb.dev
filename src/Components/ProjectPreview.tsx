import React from 'react';

const ProjectPreview: React.FC<{projectName: string, projectFolder: string}> = ({projectName, projectFolder}) =>
{
  return (
    <div className="flex flex-col items-center justify-center mt-12 relative bg-slate-900 group min-w-[200px] rounded">
      <button className="" onClick={() => {alert("Message")}}>

        <img className="relative inset-0 object-cover w-full rounded h-full group-hover:opacity-50 "
          src="ProjectAssets\Complex\ComplexExample.gif"/>

        <div className="text-truncate overflow-hidden transition-all absolute opacity-100 group-hover:opacity-100 w-full align-middle max-h-[75%] bottom-[0%] text-center">
          <h3 className="text-3xl text-white mb-4 translate-y-2/3 group-hover:-translate-y-[130%] duration-300">
            {projectName}  
          </h3>
          <p className=" text-base text-white mr-4 ml-4 h-40 opacity-0 group-hover:opacity-100 mt-20 group-hover:-translate-y-[60%] duration-300">
            {/* Put in text content here */}
            This is some default text to represent what would be a regular discription of a project
            This is so i can get some sizing correct.
          </p>

        </div>
      </button>
    </div>
  );
}

export default ProjectPreview;

// <div>
//   <div>
//     <img
//       className="rounded-lg h-auto max-w-full"
//       src="ProjectAssets\Complex\ComplexExample.gif"
//       alt=""
//     />
//   </div>
//   <a href="">
//     <h2>{projectName}</h2>
//     <div className="content">
//       <p>
//         I created a node generation system to take in an environment mesh
//         and produce a node graph for Ai agents.
//       </p>
//     </div>
//   </a>
// </div>