import React from 'react';

const ManiacCabProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col justify-center'>
      <p className={`mt-10 mb-10 text-3xl ${darkModeEnabled ? "text-white" : "text-black"}`}>
        Maniac Cab
      </p>

      <p className='mt-4 mb-4'>
        I have recently started a project based on the crazy taxi genre where the player has to deliver as many passengers in a short amount of time, we wanted to work on this project because of its simplicity and that arcade games generally take a shorter amount of time to create.
      </p>

      <p className='mt-10 mb-10 text-3xl'>
        Raycast Suspension
      </p>

      <img src="/ProjectAssets/ManiacCab/ManiacCabSuspension.gif"></img>

      <p className='mt-4 mb-4'>
        Initially we wanted to have a more reactive car while driving around, this initial raycast based suspension model for the car worked amazingly for the day it took to get an initial implementation completed. instead of attempting to simulate multiple wheels we are using four fake physics springs to act as the cars suspension and using the wheels as purely art.
      </p>

      <img src="/ProjectAssets/ManiacCab/ManiacCabSuspensionCube.gif"></img>

      <p className='mt-4 mb-4'>
        To speed up our iteration speed acceleration, torque and friction values are affected by power curve assets, this allows our designers to be able to tweak values and iterate the cars feel without needing to touch any code or blueprints. We also implementated a drift function for the car by changing the friction power curve asset when the handbrake input key is pressed.
      </p>
    </div>
  );
}

export default ManiacCabProject;
