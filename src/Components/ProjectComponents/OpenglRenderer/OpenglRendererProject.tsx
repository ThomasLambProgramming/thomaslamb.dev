import React from 'react';


const OpenglRendererProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col justify-center'>
      <p className={`mt-10 mb-10 text-5xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        OpenGL Renderer
      </p>

      <p className='mt-4 max-w-4xl text-left'>
        I am currently working on an OpenGL renderer for learning graphics programming and lighting for use in future games.
      </p>
      <p className='max-w-4xl mb-4 text-left'>
        Note: This is an old OpenGL renderer I made but I am currently working on a new OpenGL Renderer to take its place but it is currently not ready.
      </p>



      <p className='text-3xl mt-10 text-left text-DarkNeutral-300'>
        Particle System
      </p>
      <div className='flex flex-col md:flex-row md:max-w-[95%] items-center my-4'>

        <div className='md:max-w-[40%] text-left md:mr-20'>
          <p className=''>
            I was interested in learning how particle effects work in games and made this particle system from scratch using Imgui to give me live input.
          </p>
          <p className='mt-2'>This particle system is capable of changing: </p>
          <ul className='ml-12 list-disc'>
            <li>Velocity</li>
            <li>Sizing</li>
            <li>Lifetime</li>
            <li>Start and End Color</li>
          </ul>

          <p className='mb-8 mt-4'>Creating this particle system taught me alot about how graphics works and how simple math can be used to make amazing effects, it also taught me how fun and enjoyable it is to use Imgui as it is simple and powerful</p>
        </div>

        <div className='md:max-w-[70%] min-w-[40%]'>
          <video autoPlay={true} muted loop src="/ProjectAssets/OpenglRenderer/ParticleSystem.mp4"></video>
        </div>
      </div>


      <p className='text-3xl mt-10 text-left text-DarkNeutral-300'>
        Multi-light and Directional Lighting
      </p>
      <div className='flex flex-col md:flex-row md:max-w-[95%] items-center my-4'>

        <div className='md:max-w-[40%] text-left md:mr-20'>
          <p className=''>
            As I started to learn lighting I wanted to see how multiple lights are processed.
          </p>
          <p className='mt-2'>Each of the spheres are a visual representation of where the light is in the scene</p>
          <p className='mt-2'>The spinning line is the current direction of the main directional light.</p>
          <p className='mb-8 mt-4'>Creating this lighting effect taught me alot about costs of multiple lighting and how it can scale very heavily as more lights are added. This has taught me alot about future lighting uses in my games and to always consider the performance impact lights could have.</p>
        </div>

        <div className='md:max-w-[70%] min-w-[40%]'>
          <video autoPlay={true} muted loop src="/ProjectAssets/OpenglRenderer/SpearLighting.mp4"></video>
        </div>
      </div>

    </div>
  );
}

export default OpenglRendererProject;
