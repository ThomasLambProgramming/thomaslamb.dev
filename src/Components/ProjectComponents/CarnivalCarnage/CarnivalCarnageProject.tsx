import React from 'react';

const CarnivalCarnageProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col justify-center'>
      <p className={`mt-10 mb-10 text-5xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Carnival Carnage
      </p>
      <div className='flex flex-col md:flex-row max-w-[95%] items-center my-4'>
        <div className='text-left max-w-[55%] mr-5 '>
          <p className=''>
            During my advanced diploma of games development, we were placed into a team of three designers, three programmers, and three artists that would act as though they were contracted to only produce the assets to a given brief.
          </p>
          <p className='mt-4'>
            DISCLAIMER: The game is fully functional but I did not take any screen captures while using the headset and I do not own a Oculus headset, this game was developed on site at AIE
          </p>
          <p className='mt-4'>Carnival Carnage is a vr arcade game in which the player must smash clown heads within a time limit with a hammer that can return to them.</p>
          <p className={`mt-10 mb-10 text-3xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
            Working In Vr
          </p>
          <p>Working with Unity's OpenXr development environment was a challenge that provided alot of learning for me and the team. The requirement to make everything into a prefab and to be very specific on what changes had to be made to the player controller allowed us to learn about the importance of communication and structuring git commits to be informative.</p>
          <p className={`mt-10 mb-10 text-3xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
            Planning for assets
          </p>
          <p className='mt-4'>I learned a lot about learning itself through needing to fill in the blanks while reading documentation that is not the most informative for troubleshooting.</p>
          <p className='mt-4'>Getting to work on Vr was also alot of fun for testing as our game included destructables from throwing the hammer.</p>
          <p className='mt-4'>Due to the limited time that we were given to complete this project. The art team was considered to be contractors working to a set brief.</p>
          <p className='mt-4'>This gave me a lot of learning opportunities as we had to really design the game and mechanics to accommodate the lack of changes that could be made to the art.</p>
        </div>

        <div className='max-w-[70%] min-w-[40%] mt-10 md:mt-10'>
          <video autoPlay={true} muted loop src="/ProjectAssets/CarnivalCarnage/CarnivalCarnage.mp4"></video>
        </div>
      </div>
    </div>
  );
}

export default CarnivalCarnageProject;
