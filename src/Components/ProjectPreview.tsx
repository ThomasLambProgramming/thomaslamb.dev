import React from 'react';

const ProjectPreview: React.FC<{projectName: string}> = ({projectName}) =>
{
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <a className="relative block bg-slate-900 group" href="##">
        <img
          className="relative inset-0 object-cover w-full h-full group-hover:opacity-50 "
          src="ProjectAssets\Complex\ComplexExample.gif"/>

          <div className="transition-all flex-1 text-center absolute opacity-0 group-hover:-translate-y-[200%] group-hover:opacity-100 duration-300">
            <h3 className="text-3xl flex-1 text-white mb-4 opacity-100">
              {projectName}  
            </h3>
            <p className="text-lg flex-1 text-white mr-4 ml-4">
              {/* Put in text content here */}
              This is some default text to represent what would be a regular discription of a project
              This is so i can get some sizing correct.
            </p>
          </div>
      </a>
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