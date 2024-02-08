import React from 'react';

const BezierProject: React.FC<{isDarkMode: boolean}> = ({isDarkMode}) =>
{
    return (
    <div className="">
        Bezier Curves

        ![FailedToLoadImage](/ProjectAssets/BezierCurves/NothingToCurve3.gif)

        I have been interested in learning how to make smoother movement and animations with code and have started learning bezier curves and splines.

        ![FailedToLoadImage](/ProjectAssets/BezierCurves/Spline1.gif)

        I started with making simple bezier curves using Unity's Vector3.lerp function. I made a simple cubic and quadratic curve and found a tutorial with equations that combined the multiple lerps to make it more efficent. With these equations I learned that the derivatives could be used to find movement direction and acceleration (shown with the direction marked green above). I later followed some resources I found online to create the above spline editor.

        ![FailedToLoadImage](/ProjectAssets/BezierCurves/Bezier1.png)
        ![FailedToLoadImage](/ProjectAssets/BezierCurves/Bezier4.png)

        This tutorial showed me the great usage of unity editor functions and tools, alongside how they can be made to increase working speeds and clarity of code. The above image shows some of the code that I made to place unity handles for each spline point.

        [FailedToLoadImage](/ProjectAssets/BezierCurves/Baseball.gif)
    </div>
    );
}

export default BezierProject;