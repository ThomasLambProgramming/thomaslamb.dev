# Node Graph Generator

![FailedToLoadImage](/ProjectAssets/NodeGraphGenerator/ComplexExample.gif)

For my complex games systems assessment, I wanted to work with AI, but found unity's AI system hard to operate with custom locomotion. I then decided to create a simple to use node graph generator. This generator would take an object as an environment and use it to create a node graph on top of it.

![FailedToLoadImage](/ProjectAssets/NodeGraphGenerator/ComplexOne.png)

To make it simple to use I made the system require a single object; this could be an empty child that has multiple hundreds of objects; the reasoning for this was so all objects are accounted for under the one "environment" object, so all objects with a mesh are processed without individually referencing them.

![FailedToLoadImage](/ProjectAssets/NodeGraphGenerator/ComplexFiltering.png)

One of the first problems that I ran into with this system was filtering out the vertices of objects that were not needed. The solution to this was a dot product check against that object's other vertices to make sure that they were not underneath another vertex within a set distance. If they were then they are ignored. After this is done on all objects in the environment they are then collected into a single list container where they are filtered by distance, and heights to remove overlaps, placed into a node class and given connections then all the node objects are then collected into a single array to be used as a node graph.

To increase performance the job system was used to add multithreading to the vertex processing. After this whole process is done, the array is also loaded into a NodeGraphContainer scriptable object to be saved so the generation process only needs to occur once.

The final result is a fully ready node graph that can be generated from many different models or environments that AI can then traverse. The Ai in this example uses simple steering behaviours.

![FailedToLoadImage](/ProjectAssets/NodeGraphGenerator/ComplexAssessment.gif)

The unity package if you wish to use it is https://github.com/ThomasLambProgramming/NodeGraph