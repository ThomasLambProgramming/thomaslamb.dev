# Maniac Cab <text-4xl text-white>

I have recently started a project based on the crazy taxi genre where the player has to deliver as many passengers in a short amount of time, we wanted to work on this project because of its simplicity and that arcade games generally take a shorter amount of time to create.

![FailedToLoadImage](/ProjectAssets/ManiacCab/ManiacCabSuspension.gif)<ml-20>

<text-4xl> Initially we wanted to have a more reactive car while driving around, this initial raycast based suspension model for the car worked amazingly for the day it took to get an initial implementation completed. instead of attempting to simulate multiple wheels we are using four fake physics springs to act as the cars suspension and using the wheels as a purely art. 

! <mr-20> [FailedToLoadImage](/ProjectAssets/ManiacCab/ManiacCabSuspensionCube.gif)

To add additional layers to the gameplay loop from crazy taxi our car currently has its acceleration, torque and friction values be affected by power curve assets, this allows our designers to be able to tweak values and iterate the cars feel without needing to touch any code or blueprints. We also implementated a drift function for the car by changing the friction power curve asset when the handbrake input key is pressed.
