import React from 'react';
import ProjectTopicPoint from '../ProjectTopicPoint';

const InfiniteHallwayProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col justify-center'>
      <p className={`mt-10 mb-10 text-5xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Infinite Hallway
      </p>
      <div className='flex flex-row max-w-[95%] items-center my-4'>
        <div className='max-w-[45%]'>
          <p className='text-left mr-20'>
            Our gdml (aie third year) team decided to do a mind bending horror/thriller game.
          </p>
          <p className='text-left mr-20 mt-4'>
            Our two designers really wanted the player to be on edge and the best way we found to do that was changing the environment constantly whenever the player would look away
          </p>
        </div>

        <div className='max-w-[70%] min-w-[40%]'>
          <video autoPlay={true} muted loop src="/ProjectAssets/InfiniteHallway/InfiniteHallwayLarge.mp4"></video>
        </div>
      </div>

      <div className='flex flex-row max-w-[95%] items-center my-4'>
        <div className='max-w-[45%]'>
          <p className='text-left mr-20'>
            I created a small script that allowed the designers to assign unity events whenever the player would enter a collider and was looking in an angle range of a direction.          </p>
        </div>

        <div className='max-w-[70%] min-w-[40%]'>
          <video autoPlay={true} muted loop src="/ProjectAssets/InfiniteHallway/InfiniteHallwayUnityScene.mp4"></video>
        </div>
      </div>
    </div>
  );
}
export default InfiniteHallwayProject;
