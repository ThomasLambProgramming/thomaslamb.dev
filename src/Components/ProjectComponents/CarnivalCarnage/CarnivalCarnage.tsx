import React, { Fragment } from 'react';

const CarnivalCarnageProject: React.FC = () =>
{
    return (
    <Fragment>
        <p className='mt-10 mb-10 text-3xl'>
            Carnival Carnage
        </p>

        <img src="/ProjectAssets/CarnivalCarnage/CarnivalCarnage.gif"></img>

        <p className='mt-4 mb-4'>
            During my advanced diploma of games development, we were placed into a team of three designers, three programmers, and three artists that would act as though they were contracted to only produce the assets to a given brief. Small note: I currently do not have images associated with the project, as unfortunately I no longer am in possession of a virtual reality headset that is compatible with the project since the project only works for the Oculus Quest 1/2.
        </p>

        <p className='mt-4 mb-4'>
            Carnival Carnage is a vr arcade game in which the player must smash clown heads within a time limit with a hammer that can return to them.
        </p>


        <p className='mt-4 mb-4 text-3xl'>
            Working In Vr
        </p>


        <p className='mt-4 mb-4'>
            Working with Unity's OpenXr development environment was a challenge that provided alot of learning for me and the team. The requirement to make everything into a prefab and to be very specific on what changes had to be made to the player controller allowed us to learn about the importance of communication and structuring git commits to be informative.
        </p>


        <p className='mt-4 mb-4'>
            I learned a lot about learning itself through needing to fill in the blanks while reading documentation that is not the most informative for troubleshooting.
            Getting to work on Vr was also alot of fun for testing as our game included destructables from throwing the hammer.
        </p>


        <p className='mt-4 mb-4 text-3xl'>
            Planning for assets
        </p>


        <p className='mt-4 mb-4'>
            Due to the limited time that we were given to complete this project. The art team was considered to be contractors working to a set brief. This gave me a lot of learning opportunities as we had to really design the game and mechanics to accommodate the lack of changes that could be made to the art.
        </p>

    </Fragment>
    );
}

export default CarnivalCarnageProject;