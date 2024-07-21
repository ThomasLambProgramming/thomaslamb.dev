import React from 'react';

const ManiacCabProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col justify-center'>
      <p className={`mt-10 mb-10 text-5xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Suspension Tech Demo
      </p>

      <p className='mt-4 mb-4 max-w-4xl text-left'>
        I saw an example online for a suspension based car in unity that seemed fairly straightforward to get working. For a while I wanted to work in unreal as at the time I had little experience in it. The following is examples of a suspension based vehicle with one rigidbody and 4 fake wheels.
      </p>



      <p className='text-3xl mt-10 text-left text-DarkNeutral-300'>
        Raycast Suspension
      </p>
      <div className='flex flex-col md:flex-row md:max-w-[95%] items-center my-4'>
        <div className='text-left md:mr-20'>
          <p className='text-xl'>
            The car uses three separate forces to calculate a fake wheel.
          </p>
          <ul className='mt-4'>
            <li className=' mb-2'>Spring Force: Raycasting down from the wheel position we take the ideal offset of a fake spring to calculate how much force upwards would a spring of a set strength apply if it was attached to the car. </li>
            <li className=' mb-2'>Friction Force: Get the current velocity and project it into the right direction of the wheel, using this and a power curve we can apply a force in the opposite direction based on a dot product</li>
            <li className=' mb-2'>Acceleration Force: Applying a force in the current forward direction of the wheel</li>
          </ul>
          <p className='mb-8'>Finally using a small rotation on the front wheels the above forces are able to be used for steering as the acceleration and friction allow for turning motions while removing some velocity</p>
        </div>
        <div className='md:max-w-[70%] min-w-[40%]'>
          <video autoPlay={true} muted loop src="/ProjectAssets/VehicleSuspension/CarSuspension.mp4"></video>
        </div>
      </div>

      <p className='text-3xl mt-10 text-left text-DarkNeutral-300'>
        InAir Correction
      </p>
      <div className='flex flex-col md:flex-row md:max-w-[95%] items-center my-4'>
        <div>
          <p className='text-left md:mr-20'>
            While testing the car I noticed that there was alot of flipping and not landing quite right which would ruin the flow that the player would have. to solve this whenever the car was in the air for more than a set duration, the car raycasts 5 times outward taking the average normal hit that was around 70 degrees from the upwards direction.
          </p>
          <p className='text-left md:mr-20 mt-4 mb-8'>
            The result of this was the car would rotate slightly based on a speed so that the players landing was consistently smoother allowing for a larger retention of speed giving a much better gameplay loop.
          </p>
        </div>
        <div className='md:max-w-[70%] min-w-[40%] mb-4'>
          <video autoPlay={true} muted loop src="/ProjectAssets/VehicleSuspension/CarAirCorrection.mp4"></video>
        </div>
      </div>

      <div className='flex items-center w-full'>
        <div className=''>
          <video autoPlay={true} muted loop src="/ProjectAssets/VehicleSuspension/SuspensionPreview.mp4"></video>
        </div>
      </div>
    </div>
  );
}

export default ManiacCabProject;
