import React from 'react';

const DirectXRendererProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col justify-center'>
      <p className={`mt-10 mb-10 text-5xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        DirectX 11 Renderer
      </p>
      <div className='flex flex-col md:flex-row max-w-[100%] md:max-w-[95%] items-center my-4'>
        <div className='w-full md:max-w-[45%] flex flex-col justify-center'>
          <p className='text-left md:mr-20'>
            After wanting to learn more about graphics programming I found the rastertek resources to create my own DirectX11 renderer.
          </p>
          <p className='text-left md:mr-20 mt-4'>
            DISCLAIMER: I tried experimenting with the tutorials to learn more and now the project is a mess. I learned alot but will actively be working on an Opengl Renderer moving forward.
          </p>
        </div>
      </div>

      <p className={`mt-10 mb-10 text-3xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Debugging
      </p>
      <div className='flex flex-col md:flex-row max-w-[100%] md:max-w-[95%] items-center my-4'>
        <div className='w-full md:max-w-[45%] flex flex-col justify-center'>
          <p className='text-left md:mr-20'>
            On this project the main thing I learnt was how to debug graphics programs using renderdoc and my IDE. It also taught me to always check data layouts.
          </p>
          <p className='text-left md:mr-20 mt-2'>
            Multiple times I missed a small layout change on a shader and spent a long time debugging. This project taught me how to use renderdoc and moving forward it will be a primary tool that I will use for future graphics projects.
          </p>
        </div>

        <div className='md:max-w-[70%] min-w-[40%] mt-10 md:mt-0'>
          <img src="/ProjectAssets/DirectXRenderer/RenderdocExample.jpg"></img>
        </div>
      </div>

      <p className={`mt-10 mb-2 text-4xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Below is a few of the different effects that I made.
      </p>


      <div className='flex flex-col md:flex-row md:max-w-[95%] justify-center'>
        <div className='mx-2 min-w-[50%]'>
          <p className={`mt-10 mb-2 text-3xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
            Multiple Lights
          </p>
          <div className=''>
            <video className="" autoPlay={true} muted loop src="/ProjectAssets/DirectXRenderer/MultiLightingExample.mp4"></video>
          </div>
        </div>

        <div className='mx-2 min-w-[50%]'>
          <p className={`mt-10 mb-2 text-3xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
            Flyby Camera
          </p>
          <div className=''>
            <video autoPlay={true} muted loop src="/ProjectAssets/DirectXRenderer/FlybyExample.mp4"></video>
          </div>
        </div>
      </div>


      <div className='flex flex-col md:flex-row md:max-w-[95%] justify-center'>
        <div className='mx-2 min-w-[50%]'>
          <p className={`mt-10 mb-2 text-3xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
            Specular Lighting
          </p>
          <div className=''>
            <video autoPlay={true} muted loop src="/ProjectAssets/DirectXRenderer/SpecularLighting.mp4"></video>
          </div>
        </div>

        <div className='mx-2 min-w-[50%]'>
          <p className={`mt-10 mb-2 text-3xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
            Lightmap
          </p>
          <div className=''>
            <img className="md:max-h-[406px]" src="/ProjectAssets/DirectXRenderer/LightmapExample.jpg"></img>
          </div>
        </div>
      </div>


      <div className='flex flex-col md:flex-row md:max-w-[95%] justify-center'>
        <div className='mx-2 min-w-[50%] flex flex-col '>
          <p className={`mt-10 mb-2 text-3xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
            Transparency
          </p>
          <div className=''>
            <video className="md:max-h-[282px]" autoPlay={true} muted loop src="/ProjectAssets/DirectXRenderer/TransparencyExample.mp4"></video>
          </div>
        </div>

        <div className='mx-2 min-w-[50%]'>
          <p className={`mt-10 mb-2 text-3xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
            Fog
          </p>
          <div className=''>
            <video className="" autoPlay={true} muted loop src="/ProjectAssets/DirectXRenderer/FogExample.mp4"></video>
          </div>
        </div>
      </div>


    </div>
  );

}

export default DirectXRendererProject;
