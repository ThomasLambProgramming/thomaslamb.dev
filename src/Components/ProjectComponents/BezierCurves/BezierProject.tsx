import React from 'react';

const BezierProject: React.FC<{ darkModeEnabled: boolean }> = ({ darkModeEnabled }) => {
  return (

    <div className='flex flex-col justify-center'>
      <p className={`mt-10 mb-10 text-5xl text-left ${darkModeEnabled ? "text-DarkNeutral-300" : "text-DarkNeutral-300"}`}>
        Bezier Curves
      </p>
      <div className='flex flex-row max-w-[95%] items-center my-4'>
        <div className='md:max-w-[45%]'>
          <p className='text-left md:mr-20'>
            I have been interested in learning how to make smoother movement and animations with code and have started learning bezier curves and splines.
          </p>
        </div>
      </div>

      <div className='w-full flex md:flex-row flex-col justify-center md:justify-left mt-4'>
        <video className='md:max-w-[48%] md:max-h-[380px] mr-4 mb-8' key={"Carousel"} muted autoPlay={true} loop src={"/ProjectAssets/BezierCurves/Spline1.mp4"}></video>
        <video className='md:max-w-[48%] md:max-h-[380px] ' autoPlay={true} muted loop src="/ProjectAssets/BezierCurves/Bezier1.mp4"></video>
      </div>

      <div className='flex flex-col md:flex-row max-w-[95%] items-center my-4'>
        <div className='md:max-w-[40%]'>
          <p className='text-left md:mr-20 mb-8'>
            I started with making simple bezier curves using Unity's Vector3.lerp function. I made a simple cubic and quadratic curve and found a tutorial with equations that combined the multiple lerps to make it more efficent. With these equations I learned that the derivatives could be used to find movement direction and acceleration (shown with the direction marked green above). I later followed some resources I found online to create the above spline editor.
          </p>
        </div>
        <div className='max-w-[70%] min-w-[40%]'>
          <img src='/ProjectAssets/BezierCurves/Bezier1.png' />
        </div>
      </div>

      <div className='flex flex-col md:flex-row max-w-[95%] items-center my-4'>
        <div className='md:max-w-[30%]'>
          <p className='text-left md:mr-20 mb-8'>
            This tutorial showed me the great usage of unity editor functions and tools, alongside how they can be made to increase working speeds and clarity of code. The above image shows some of the code that I made to place unity handles for each spline point.          </p>
        </div>
        <div className='max-w-[70%] min-w-[40%]'>
          <img src='/ProjectAssets/BezierCurves/Bezier4.png' />
        </div>
      </div>

      <div className='w-full flex justify-center mt-4'>
        <video className='max-w-[700px] w-[90%] h-full min-h-full' key={"Carousel"} muted autoPlay={true} loop src={"/ProjectAssets/BezierCurves/Baseball.mp4"}></video>
      </div>
    </div>
  );
}

export default BezierProject;
