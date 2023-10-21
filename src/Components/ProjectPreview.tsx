import React from 'react';

const ProjectPreview: React.FC<{projectName: string}> = ({projectName}) =>
{
    return (
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

      <div className="flex items-center justify-center mt-12">
        <a className="relative block w-full bg-slate-900 group" href="##">
          <img
            className="absolute inset-0 object-fill 
                                w-full h-full group-hover:opacity-50 "
            src="ProjectAssets\Complex\ComplexExample.gif"
          />
          <div className="relative align-top text-center">
            <div className="mt-40">
              {/* Hidden content */}
              <div className="transition-all transform 
                                opacity-0
                                group-hover:opacity-100 
                                group-hover:-translate-y-1/2">
                <h3 className="text-3xl text-white mb-4">Project Title</h3>
                <p className="text-lg text-white mr-4 ml-4">
                  {/* Put in text content here */}
                  Default Text Content TestDefault Text Content TestDefault Text
                  Content TestDefault Text Content TestDefault Text Content
                  TestDefault Text Content Test
                </p>
              </div>
              {/* End of hidden content */}
            </div>
          </div>
        </a>
      </div>
    );
}

export default ProjectPreview;