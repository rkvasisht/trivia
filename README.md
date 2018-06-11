# trivia
This game will be a two person trivia game. The Theme of the game will be based on the 
popular show the office. The object of the game is score the most points in 30 seconds. 
Points are scored by answering a question correctly. 10 points are earned on every correct answer.
The game is a two player game. At the end of two 30 second rounds a winner will be crowned. 
The player with the most points wins. The players alternate after every round. Player 1 will 
go first followed by player two. 

Day 1:
I used a basic css grid in order to make a functional wire map. The Wire only had a set 
up for 1 question and 4 answers. This day was just used to develop a strategy on how to 
find possible scenarios on how random questions and answers can be generated from a bank
of questions and answers. 

Day 2: 
I developed an array of objects with questions and associated answers. I first randomized index of the array
and built two separate arrays for the question and the associating answers. I then used the fisher-yates
algorithm to shuffle the array so the answers would not be in the same position. 


Day 3: 
Now that the arrays of questions and answers where built, I needed to make sure that once a question was asked, 
it would not be asked again. In order to do this. I used the splice method to remove questions that had be answered, 
remove them so they would not be asked. I aslo started to integrate a timmer function into my code. Now that I had a set of questions 
and answers, I then moved on to show if the answers were correct or incorrect. I did this by adding click events with an associated check
functions which would turn the text green if it was correct and red if it was incorrect. 

Day 4: 
I worked on troubleshooting the timmer so it would stop after 30 seconds. I was able to solve this problem by make the inner 
value equal to zero when the value of hit zero. I then started to work on developing on what functions and parameters would be set 
during different time periods. An example of this is, when the timer hits zero seconds, a final score should by shown. 

Day 5: 

I finalized all of my time periods for player 1 and player 2 and then moved on to the win loss logic. I developed a set of if statements
depending on the score. I created a win scenario for player 1, player 2 and a tie scenario. This was done by comparing the final score of player two, 
vs. the score to beat(which was equal to the score of player 1). I spent this day also developing a reset function and taking care of some 
bugs in the code. 

Day 6: 

This day was spent on working through the styling of the game. I went through multiple different styles but a lot of them didn't represent the 
theme of the game.

Day 7:

Once I created a theme, I was able to style it to look like an office cork board. I used a series of css grid techniques in order to keep 
the images and text inline. I added a function that switched the picture of the players after during their turn. This day was challenging for 
me as I am not as strong in styling but I think the project came out pretty well. 
