# <pt-40 pb-20> Maniac Cab

<pt-12 pb-2> I have recently started a project based on the crazy taxi genre where the player has to deliver as many passengers in a short amount of time, we wanted to work on this project because of its simplicity and that arcade games generally take a shorter amount of time to create.

# Raycast Suspension

!<pb-0>[FailedToLoadImage](/ProjectAssets/ManiacCab/ManiacCabSuspension.gif)

<pb-0>Initially we wanted to have a more reactive car while driving around, this initial raycast based suspension model for the car worked amazingly for the day it took to get an initial implementation completed. instead of attempting to simulate multiple wheels we are using four fake physics springs to act as the cars suspension and using the wheels as purely art. 

!<pb-0>[FailedToLoadImage](/ProjectAssets/ManiacCab/ManiacCabSuspensionCube.gif)

<pt-0 pb-12> To speed up our iteration speed acceleration, torque and friction values are affected by power curve assets, this allows our designers to be able to tweak values and iterate the cars feel without needing to touch any code or blueprints. We also implementated a drift function for the car by changing the friction power curve asset when the handbrake input key is pressed.

