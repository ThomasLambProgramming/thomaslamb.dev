import React from 'react';

const RapidDeliveryProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col justify-center'>

      <p className={`mt-10 mb-10 text-5xl text-center md:text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Rapid Delivery
      </p>
      <div className='flex flex-col md:flex-row max-w-[95%] items-center my-4'>
        <div className='max-w-[50%]'>
          <p className='text-left md:mr-20 md:mt-0'>
            As part of my diploma of games development, I was put into a small team of six developers over six weeks.
          </p>
          <p className='text-left md:mr-20 mt-4 md:mt-0 mb-4'>
            We created an endless runner game where the player must maneuver their car around obstacles while delivering tea to customers from their cannon on the top of the car.
          </p>
        </div>
        <div className='max-w-[70%] min-w-[40%]'>
          <video autoPlay={true} muted loop src="/ProjectAssets/RapidDelivery/RapidDeliveryGameplay.mp4"></video>
        </div>
      </div>

      <p className={`mt-4 w-full text-3xl text-center md:text-left  ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Road Generation and Obstacles
      </p>
      <div className='flex flex-col md:flex-row max-w-[95%] items-center my-4'>
        <div className='max-w-[50%] text-left '>
          <p className='text-left md:mr-20 mt-4 md:mt-0'>
            The road object is split into ten meter chunks that are instantiated at set intervals.
          </p>
          <p className='text-left md:mr-20 mt-4 md:mt-0'>
            This road object covers all three lanes and is not separated. For the spawning of obstacles, we have six different prefabs that are instantiated into the game beyond what the player can see and are deleted when they collide with a trigger box behind the player.
          </p>
          <p className='text-left md:mr-20 mt-4 md:mt-0 mb-4 '>
            Npc customers will spawn along the sidewalk at random intervals; when the player is in range the cannon will aim at the closest customer allowing the player to shoot tea at them.
          </p>
        </div>
        <div className='max-w-[70%] min-w-[40%]'>
          <video autoPlay={true} muted loop src="/ProjectAssets/RapidDelivery/RapidDeliverySceneView.mp4"></video>
        </div>
      </div>

      <p className={`mt-4 w-full text-3xl text-center md:text-left  ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Tileset Environment
      </p>
      <div className='flex flex-col md:flex-row max-w-[95%] items-center my-4'>
        <div className='max-w-[50%]'>
          <p className='text-left md:mr-20 mt-4 md:mt-0 mb-4 '>
            Due to our limited time of six weeks and the fact that we only had two artists, we made all of our environment tiled.
          </p>
          <p className='text-left md:mr-20 mt-4 md:mt-0 mb-4 '>
            They all have a base of a set size, and our designers worked with the artists to create small environment prefabs of the same size to allow for the constant spawning of environment without them being in the wrong position.
          </p>
          <p className='text-left md:mr-20 mt-4 md:mt-0 mb-4 '>
            Our final game was fully playable with a nice and simple UI. We managed to get small details in such as the falling and raising ! mark for customers and etc.
          </p>
        </div>
        <div className='max-w-[70%] min-w-[40%]'>
          <img src="/ProjectAssets/RapidDelivery/TemplatedEnvironment.png"></img>
        </div>
      </div>

      <div className='w-full flex justify-center mt-4'>
        <video autoPlay={true} muted loop src="/ProjectAssets/RapidDelivery/FirstYearMajorTwo.mp4"></video>
      </div>
    </div>
  );
}

export default RapidDeliveryProject;
