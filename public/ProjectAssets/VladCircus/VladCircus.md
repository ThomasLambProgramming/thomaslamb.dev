# Vlad Circus
!<pt-20>[FailedToLoadImage](/ProjectAssets/VladCircus/VladCircusCombat1.gif)

Vlad Circus is a Psychological Horror Puzzle game about a clown named Oliver Mills getting over his anxiety and trumatic stress of his circus burning down. The game was made by a small indie team named Indiesruption in Monogame using C# and was then ported by myself. Using the development kits at Blowfish Studios I ported the game to Xbox Series/X, Playstation 4/5, Switch and Epic games store and Gog Galaxy for pc, the steam version was already ported to steam by Diego the lead developer at Indiesruption.

Porting the game to consoles was a massive undertaking and taught me alot about build systems, project setup, using the console development kits and much more. The difficulty of porting this game came mainly from the game framework Monogame, due to it not having paid programmers for support there was not much documentation for the porting process, as majority of solutions and documentation came from a small discord server with 25 members. This taught me alot about how to find solutions though the code itself, how to be more efficent with google searches and also taught me alot about perserverence when hit with a brick wall as there was alot of smaller issues that appeared that required a large amount of time brute forcing solutions and testing before being able to find the issue itself.

![FailedToLoadImage](/ProjectAssets/VladCircus/VladCircusCombat2.gif)

Build systems became a very important part of the development as the build times for consoles was quite long (5-10 minutes for debug builds) and led me to learn how to leverage msbuild scripts to automate the whole build process and uploading to the required consoles. The long build times also taught me how to debug more effectively as I had to setup multiple tests for each build otherwise testing 3 solutions could take over 45 minutes to test just in build and upload times to the consoles.

I am very proud of the end result as no features had to be cut and no half measures and fixes were needed, the game runs at a perfect framerate on all consoles and mimics the pc version completely. 

<text-blue-500 hover:underline pt-0>[Steam Link](https://store.steampowered.com/app/1702430/Vlad_Circus_Descend_Into_Madness)