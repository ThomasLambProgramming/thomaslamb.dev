import React from 'react';

const RayTracingDemoProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (
    <div className='flex flex-col justify-center'>
      <p className={`mt-10 mb-10 text-5xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Ray Tracing Demo
      </p>
      <div className='flex flex-col md:flex-row max-w-[95%] items-center my-4'>
        <div className='md:max-w-[45%]'>
          <p className='text-left md:mr-20'>
            After creating an OpenGL renderer I wanted to start looking into how ray tracing works. this lead me to the Ray Tracing In A Weekend blogpost.
          </p>
          <p className='text-left md:mr-20 mt-4 mb-8'>
            Following along with the blogpost I ended up with this render as the final result, the image is rendered as it is on the gpu but it taught me alot about how ray tracing differs from standard lighting practices in games.
          </p>
        </div>

        <div className='max-w-[70%] min-w-[40%]'>
          <img src="/ProjectAssets/RayTracingDemo/RayTracingRender.png"></img>
        </div>
      </div>

      <div className='flex flex-col w-[95%] items-center my-4 md:ml-8'>

        <div className="flex flex-col md:flex-row items-center">
          <div className='max-w-[45%]'>
            <p className='text-left mt-4 md:ml-10 mb-4 md:mb-0'>
              Starting with a blank scene, I setup the basic ray sphere intersection tests to calculate if the ray coming from the camera would actually hit and add color to the end result based on if the next series of rays coming from the original would continue to hit other objects.
            </p>
          </div>
          <div className='md:ml-10'>
            <img src='/ProjectAssets/RayTracingDemo/RTDemoShadows.png'></img>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className='max-w-[45%]'>
            <p className='text-left mt-4 md:ml-10 mb-4 md:mb-0'>
              Next was adding additional materials, Dielectrics (Glass) and Metal, I found it very interesting that unlike with usual rendering techniques to give reflections the angle of ray reflection can create either lambertian or metal reflections quite easily.
            </p>
            <p className='text-left mt-4 md:ml-10 mb-4 md:mb-0'>
              Using Snell's law to calculate the refracted ray and adding some additonal checks against very steep angles I was able to make a glass material.
            </p>
          </div>
          <div className='md:ml-10'>
            <img src="/ProjectAssets/RayTracingDemo/RTDemoMaterialExample.png"></img>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className='max-w-[45%]'>
            <p className='text-left mt-4 md:ml-10 mb-4 md:mb-0'>
              Lastly the blogpost covered some camera effects to make the final render look much better such as depth of field and zooming.
            </p>
            <p className='text-left mt-4 md:ml-10 mb-4 md:mb-0'>
              Since going through with this blogpost I have learnt alot about ray tracing and in future hope to work on a OpenGL/Vulkan version of a ray tracer to get a real time game example.
            </p>
          </div>
          <div className='md:ml-10'>
            <img src="/ProjectAssets/RayTracingDemo/RTDemoLowQualExample.png"></img>
          </div>
        </div>

      </div>
    </div>
  );
}
export default RayTracingDemoProject;
