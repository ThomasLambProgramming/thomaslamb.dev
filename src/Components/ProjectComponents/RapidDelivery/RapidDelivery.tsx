import React, { Fragment } from 'react';

const RapidDeliveryProject: React.FC = () =>
{
    return (
    <Fragment>
        <p className='mt-10 mb-10 text-3xl'>
            Rapid Delivery
        </p>
        <img src="/ProjectAssets/RapidDelivery/RapidDeliveryGameplay.gif" className='flex justify-center items-center'></img>

        <p className='mt-4 mb-4'>
            As part of my diploma of games development, I was put into a small team of six developers over six weeks and we created an endless runner game where the player must maneuver their car around obstacles while delivering tea to customers from their cannon on the top of the car. 
        </p>

        <img src="/ProjectAssets/RapidDelivery/RapidDeliverySceneView.gif"></img>

        <p className='mt-10 mb-10 text-3xl'>
            Road generation and obstacles
        </p>

        <p className='mt-4 mb-4'>
            The road object is split into ten meter chunks that are instantiated at set intervals. This road object covers all three lanes and is not separated. For the spawning of obstacles, we have six different prefabs that are instantiated into the game beyond what the player can see and are deleted when they collide with a trigger box behind the player. Npc customers will spawn along the sidewalk at random intervals; when the player is in range the cannon will aim at the closest customer allowing the player to shoot tea at them.
        </p>

        <img src="/ProjectAssets/RapidDelivery/TemplatedEnvironment.png"></img>

        <p className='mt-10 mb-10 text-3xl'>
            Tileset Envionment
        </p>

        <p className='mt-4 mb-4'>
            Due to our limited time of six weeks and the fact that we only had two artists, we made all of our environment tiled. They all have a base of a set size, and our designers worked with the artists to create small environment prefabs of the same size to allow for the constant spawning of environment without them being in the wrong position. Our final game was fully playable with a nice and simple UI. We managed to get small details in such as the falling and raising ! mark for customers and etc.
        </p>
        <img src="/ProjectAssets/RapidDelivery/FirstYearMajorTwo.gif"></img>
    </Fragment>
    );
}

export default RapidDeliveryProject;