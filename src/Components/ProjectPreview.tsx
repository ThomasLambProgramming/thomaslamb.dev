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
                <a className="relative block w-1/4 bg-gray-900 group"
                    href="##">
                    <img className="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                        src=
"ProjectAssets\Complex\ComplexExample.gif" />
                    <div className="relative p-5">
                        <div className="mt-40">
                            {/* Hidden content */}
                            <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                                <div className="p-2">
                                    <p className="text-lg text-white">
                                        Welcome to GeeksforGeeks.
                                    </p>
                                    <button className="px-4 py-2 text-sm 
                                            text-white bg-green-600">
                                        Visit site
                                    </button>
                                </div>
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </a>
            </div>
    );
}

export default ProjectPreview;