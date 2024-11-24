import React from 'react';

const NodeGraphGeneratorProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col justify-center'>
      <p className={`mt-10 mb-10 text-5xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Node Graph Generator
      </p>
      <div className='flex flex-col md:flex-row max-w-[95%] items-center my-4'>
        <div className='md:max-w-[45%]'>
          <p className='text-left md:mr-20'>
            When working with Unity's Ai navigation system, I found it slightly difficult to implement custom locomotion into the system.
          </p>
          <p className='text-left md:mr-20 mt-4 mb-8'>
            I then decided to create a node graph generator to allow my custom ai agents to have the environmental data they need to move without Unity's inbuilt systems. This generator would take an object as an environment and use it to create a node graph on top of it.
          </p>
        </div>

        <div className='max-w-[70%] min-w-[40%]'>
          <video autoPlay={true} muted loop src="/ProjectAssets/NodeGraphGenerator/ComplexExample.mp4"></video>
        </div>
      </div>

      <div className='w-full flex justify-center mt-10'>
        <img className='max-w-[80%]' src="/ProjectAssets/NodeGraphGenerator/ComplexOne.png"></img>
      </div>

      <div className='flex flex-col md:flex-row  max-w-[95%] items-center my-4'>
        <div className='md:max-w-[45%]'>
          <p className='text-left md:mr-20 mt-10'>
            One of the first problems that I ran into with this system was filtering out the vertices of objects that were not needed.
          </p>
          <p className='text-left md:mr-20 mt-4'>
            The solution to this was a dot product check against that object's other vertices to make sure that they were not underneath another vertex within a set distance.
          </p>
          <p className='text-left md:mr-20 mt-4 mb-8'>
            If they were then they are ignored. After this is done on all objects in the environment they are then collected into a single list container where they are filtered by distance, and heights to remove overlaps, placed into a node class and given connections then all the node objects are then collected into a single array to be used as a node graph.
          </p>
        </div>

        <div className='max-w-[70%] min-w-[40%]'>
          <img src='/ProjectAssets/NodeGraphGenerator/ComplexFiltering.png'></img>
        </div>
      </div>


      <div className='flex flex-col md:flex-row max-w-[95%] items-center my-4'>
        <div className='md:max-w-[45%]'>
          <p className='text-left md:mr-20'>
            To make it simple to use I made the system require a single object.
          </p>
          <p className='text-left md:mr-20 mt-4 mb-8'>
            This could be an empty child that has multiple hundreds of objects; the reasoning for this was so all objects are accounted for under the one environment object, so all objects with a mesh are processed without individually referencing them.
          </p>
        </div>

        <div className='max-w-[70%] min-w-[40%]'>
          <video autoPlay={true} muted loop src="/ProjectAssets/NodeGraphGenerator/ComplexAssessment.mp4"></video>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <div className='flex flex-col items-center text-left md:max-w-[70%] my-4'>
          <p className='mt-4 mb-4'>
            To increase performance the job system was used to add multithreading to the vertex processing. After this whole process is done, the array is also loaded into a NodeGraphContainer scriptable object to be saved so the generation process only needs to occur once.
          </p>
          <p className='mt-4 mb-4'>
            The final result is a fully ready node graph that can be generated from many different models or environments that AI can then traverse. The Ai in this example uses simple steering behaviours.
          </p>

        </div>
      </div>
    </div>
  );
}
export default NodeGraphGeneratorProject;
