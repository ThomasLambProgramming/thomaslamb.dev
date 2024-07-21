import React from 'react';

const MaliciousProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col justify-center'>
      <p className={`mt-10 mb-10 text-5xl text-center md:text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Malicious
      </p>
      <div className='flex flex-col md:flex-row max-w-[95%] items-center my-4'>
        <div className='md:max-w-[50%] max-w-[70%]'>
          <p className='text-left md:mr-20'>
            For the final project of my advanced diploma of games development, I was placed into a group of 7 developers with 3 artists, 3 designers, and myself as the sole programmer.          </p>
          <p className='text-left md:mr-20 mt-4 mb-8'>
            The game that we developed is a 3D Puzzle Platformer where you play as a virus that must escape from its creator.
          </p>
        </div>
        <div className='max-w-[70%] min-w-[40%]'>
          <img src="/ProjectAssets/Malicious/MaliciousTitle.png"></img>
        </div>
      </div>



      <div className='flex flex-col md:flex-row  max-w-[95%] items-center my-4'>
        <p className='text-left md:mr-20 mb-8'>
          This game brought alot of challenges and I learned alot about developing as a team.
        </p>
        <div className='max-w-[70%] min-w-[40%]'>
          <img src="/ProjectAssets/Malicious/RoomDisplay.jpg"></img>
        </div>
      </div>



      <p className={`mt-4 w-full text-3xl text-center md:text-left  ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Hacking Mechanic
      </p>

      <div className='flex flex-col md:flex-row  max-w-[95%] items-center my-4'>
        <div className='md:max-w-[50%] max-w-[70%]'>
          <p className='text-left md:mr-20 mt-4'>
            One of the biggest challenges that this project brought was the hacking mechanic.
          </p>
          <p className='text-left md:mr-20 mt-4'>
            This mechanic was challenging for me as it required me to learn how to develop more modular and reusable code as this hacking mechanic had to work alongside the enemy, blocks, drone, spring and wire mechanics.
          </p>
          <p className='text-left md:mr-20 mt-4 mb-4'>
            I solved this issue by making a base class of hackable that was then inherited by all the mechanics that needed it. allowing the player to enter and exit without affecting any of the code for that specific mechanic itself.
          </p>
        </div>
        <div className='w-full flex justify-center mt-4'>
          <video autoPlay={true} muted loop src="/ProjectAssets/Malicious/Malicious1.mp4"></video>
        </div>
      </div>



      <p className={`mt-4 w-full text-3xl text-center md:text-left  ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Wire Mechanic
      </p>

      <div className='flex flex-col md:flex-row  max-w-[95%] items-center my-4'>
        <div className='md:max-w-[50%] max-w-[70%]'>
          <p className='text-left md:mr-20 mt-4'>
            To add verticality to the platforming without directly allowing the player to jump up all the blocks, the designers came up with the wire mechanic.
          </p>
          <p className='text-left md:mr-20 mt-4'>
            This mechanic allows the player to enter into a wire and use the wasd, space and ctrl keys to place wires and move along them.
          </p>
          <p className='text-left md:mr-20 m-4 mb-4'>
            The wire does raycasts to check if a wire can be placed and is checked against a layer mask to give the designers more options. The player also has a limit on the amount of moves they can do. At any time the player can launch themselves out of the wire in the direction they are facing.
          </p>
        </div>
        <div className='w-full flex justify-center mt-4'>
          <video autoPlay={true} muted loop src="/ProjectAssets/Malicious/Malicious2.mp4"></video>
        </div>
      </div>



      <p className={`mt-4 w-full text-3xl text-center md:text-left  ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Fan Mechanic
      </p>

      <div className='flex flex-col md:flex-row  max-w-[95%] items-center my-4'>
        <div className='max-w-[70%]'>
          <p className='text-left md:mr-20 mt-4'>
            This fan mechanic taught me the most about games development in a team.
          </p>
          <p className='text-left md:mr-20 mt-4'>
            This mechanic had a few smaller features to make it a better fan then just applying force in a direction such as a dot product check for the current objects velocity and apply extra force accordingly (this was done to allow for smoother fan pushing when the fan was horizontally pushing).
          </p>
          <p className='text-left md:mr-20 mt-4'>
            The fan also used a different force to push based on the distance away from the object it was pushing. I implemented this because I wanted a smarter fan then just pushing it. This however led me to learn quite alot, as when explaining the fan to my other team members, they didn't understand what I was trying to add to the fan, and it caused a lot of communication issues.          </p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row max-w-[95%] items-center my-4'>
        <div className='md:max-w-[50%] max-w-[70%]'>
          <p className='text-left md:mr-20 mt-4'>
            I learned a lot from this experience as it taught me how to communicate with less technically knowledgeable team members.
          </p>
          <p className='text-left md:mr-20 mt-4'>
            The need for tooling and variable limit setting, good descriptions (in Unity's case tooltips) and most importantly.
          </p>
          <p className='text-left md:mr-20 mt-4 mb-4'>
            Knowing when something actually adds to the game rather than wasting time adding extra features that will not be noticed by the general player base and spending time refining what will be noticed.
          </p>
        </div>
        <div className='w-full flex justify-center mt-4'>
          <video autoPlay={true} muted loop src="/ProjectAssets/Malicious/Malicious3.mp4"></video>
        </div>
      </div>



      <p className={`mt-4 w-full text-3xl text-center md:text-left  ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Enemies
      </p>

      <div className='flex flex-col md:flex-row  max-w-[95%] items-center my-4'>
        <div>
          <p className='text-left md:mr-20'>
            This ground enemy shown below just had simple seek behaviors with a limited turning speed. It acts as one of the main dangers to the player.
          </p>
        </div>
        <div className='w-full flex justify-center mt-4'>
          <video autoPlay={true} muted loop src="/ProjectAssets/Malicious/Malicious4.mp4"></video>
        </div>
      </div>



      <div className='text-center max-w-[95%] mt-4'>
        <p className='mb-4'>
          Our final game was fully playable with a full sprint schedule of alpha, beta, and gold. Our end result had very few bugs and none of them were game breaking.
        </p>
        <a className='mt-4 text-blue-500 hover:underline pt-0' href='https://haydencarterdesign.itch.io/malicious' target='_blank'>The build is avaliable on Itch.io here</a>
      </div>

    </div>
  );
}

export default MaliciousProject;
