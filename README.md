Hanoi Tower
========


Hanoi Tower is a strategic game that has three towers and a certain amount of disks that we want to move to a winning tower. For this project there are 5 disks and the winning tower is on the right side. There are rules such as only the top disk can be moved, only one disk at a time can be moved, and a bigger disk cant be moved on a smaller disk. 


Link to deployed game 

![alt text]/TowerPic.png
=======



Development
========
I knew I needed disks and three towers. I created an HTML and some CSS to get the essentials of the game. Afterwards I knew I needed a way to transportate each disk. I decided to go with making them draggable elements. 

After being able to drag and drop each disk, I moved on to making the game logic. Soon after I realized any disk could be dropped into another disk. So I made it so only the three towers can have disk dropped into them. After that I needed to compare what was being dropped. I made conditionals based on the ID (or value, size) of each disk. I made a function to check for a winner which would have all five disk in the right tower. 

Challenges
========
The most challenging part of this project was having the conditionals be effective on every turn. Sometimes one conditional wouldn't do what I would expect and I had to add another conditional to fix it. Specifically the first tower not having disk caused a problem, we needed to create another value to fix it. 

The Future of this Game
========
I would like to add more levels and have a move count. 


Built With
========
- HTML
- CSS
- Javascript

Contributing
========
I welcome all feedback. Please fork and clone the repository and submit a pull request for any recommendations. 
