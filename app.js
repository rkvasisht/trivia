
var master=[

		{'question':'Which holiday did Pam retunr on after the birth of her second child?',
	 	'answer':'Christmas',
	 	'option1':'Arbor Day',
	 	'option2':'Columbus Day',
	 	'option3':'Valentines day'
		},

		{'question':'Diangelo Vickers loves what region of the United States?',
	 	'answer':'Southwest',
	 	'option1':'Plain States',
	 	'option2':'Pacific Northwest',
	 	'option3':'New England'
		},

		{'question':'Darly turned down the Print in colors program by Saber because of what conflict?',
	 	'answer':'softball league',
	 	'option1':'eagles games',
	 	'option2':'cooking class',
	 	'option3':'getting back with his ex wife'
		},

		{'question':'Who is the author of the Ultimate guide to throwing a garden party',
	 	'answer':'James Trickton',
	 	'option1':'Jim Shalpert',
	 	'option2':'James Haller',
	 	'option3':'Jimmy Halp'
		},

		{'question':'Which of these charecters was on Robert Californias loser side of the list',
	 	'answer':'Pam',
	 	'option1':'Kevin',
	 	'option2':'Jim',
	 	'option3':'Dwight'
		},

		{'question':'What is Roys brothers name?',
	 	'answer':'Bill',
	 	'option1':'Troy',
	 	'option2':'Kenny',
	 	'option3':'Chris'
		},

		{'question':'What does Pam think Roy will be serving at their wedding?',
	 	'answer':'burgers',
	 	'option1':'hot dogs',
	 	'option2':'hot pockets',
	 	'option3':'tater tots'
		},

		{'question':'Why did Michael schedule his trip to Jamaica in December?',
	 	'answer':'So he would miss inventory',
	 	'option1':'So he was not around Toby for the holidays',
	 	'option2':'So he could get away from the cold',
	 	'option3':'Won the trip through a malbro points contest even though he is not a smoker'
		},

		{'question':'Who is the manager after Dwight shot off his gun?',
	 	'answer':'Robert California',
	 	'option1':'Jim',
	 	'option2':'Creed',
	 	'option3':'Andy'
		},

		{'question':'What type of gun did Dwight shoot into the floor?',
	 	'answer':'Beaumont-Adams',
	 	'option1':'Remington',
	 	'option2':'Colt',
	 	'option3':'Smith and Wessin'
		},

		{'question':'What is the name of the movie Michael made?',
	 	'answer':'Threat level midnight',
	 	'option1':'Die again then again',
	 	'option2':'Michael Scarn: The man with no fear',
	 	'option3':'Golden Face'
		},

		{'question':'what did Michael put in the desk of Toby to fram him for drugs',
	 	'answer':'Caprese Salad',
	 	'option1':'Chopped froze spinich',
	 	'option2':'Oregano',
	 	'option3':'Dill'
		}



	];
//question bank
var qArray= repopList();
// array of quesitons. The qArray are equal, so on the reset, the removed questions will be put back.
var questionRandom = [];
// array of random quesiont
var correct = [];
// array of correct answers
var incorrect1 = [];
// array of possible answers
var incorrect2 = [];
// array of possible answer
var incorrect3 = [];
// array of possible answers
var a = [];
// array of correct, and all 3 inncorrect answers.
var foo = [];
// array of answers shuffled
var fooTwo = [];
// array of questions shuffled 
var scoreOne = 0;
// player one score
var scoreTwo = 0;
// player two score
var remainQ = [];
// array of remaining questions after the splice of used questions
var startTime = 11; 
// starting time of timer. 
var test = null;
// set an interval of 1 second to the timer function
var player =[0,1];
// array that designated the players. 0=player 1 and 1= player 2. 
var turn = 0;
// represents the index of the player array. 0 starts on player 1. 
var counter = 0;
// counter counts how many clicks have been made on the start button. 
var scoreWin = 0;
// used to determine the winning score. 
var canClick = true;
// variable used to deactivate clicking events during timeouts. 



var initialize = function(){
	//function used to fill out the question and answer section after every click. 
	var rando = Math.floor(Math.random()* qArray.length)
	// used to get a random index of the qArray
	questionRandom = qArray[rando];
	// used to keep track of the questions that have been asked. 
	console.log(questionRandom);
	 correct = questionRandom.answer;

	// this is the answer to the question that is being asked.
	 incorrect1 = questionRandom.option1;
	 // this is the possible answer to the question that is being asked. 

	 incorrect2 = questionRandom.option2;
	 incorrect3 = questionRandom.option3;
	 qArray.splice(rando, 1)
	 console.log('qArray Splice', qArray.length)
	 //this spliced the question being asked out of the question array so it can't be asked again. 
	 
	 a =[correct, incorrect1, incorrect2, incorrect3];


	Array.prototype.shuffle = function() {
	    var input = this;
	     
	    for (var i = input.length-1; i >=0; i--) {
	     
	        var randomIndex = Math.floor(Math.random()*(i+1)); 
	        var itemAtIndex = input[randomIndex]; 
	         
	        input[randomIndex] = input[i]; 
	        input[i] = itemAtIndex;
	    }
	    return input;
	}
//this function shuffles the answer array 
 foo = a.shuffle();
// this is result of the shuffled array 



 fooTwo = questionRandom.question;
// this is the result of the shuffled question
	
	document.getElementById("questionAsked").innerText=fooTwo;
	document.getElementById("answerOne").innerText=foo[0];
	document.getElementById("answerTwo").innerText=foo[1];
	document.getElementById("answerThree").innerText=foo[2];
	document.getElementById("answerFour").innerText=foo[3];

//the inner text of the question and answer divs are set here. 

};

function repopList(){
	var temp = []
	master.forEach(function(item){
		temp.push(item);
	})
	return temp;
}


function startOver(){
//reset parameters
	console.log('startOver ran')
	var qArray = repopList();
	console.log(qArray)
	 questionRandom = [];
	 correct = [];
	 incorrect1 = [];
	 incorrect2 = [];
	 incorrect3 = [];
	 a = [];
	 foo = [];
	 fooTwo = [];
	 scoreOne = 0;
	 scoreTwo = 0;
	 remainQ = [];
	 startTime = 11; 
	 // test = null;
	 player =[0,1];
	 turn = 0;
	 counter = 0;
	 scoreWin = 0;
	 canClick = true;
	 questionToPutBack = [];
	 stuffPutBack = {};
	 canClickTwo = true;
	 document.getElementById("timer").innerText="30 Seconds on the Clock"
	 document.getElementById("player").innerText="Reset"
	 document.getElementById("start").innerText="Player 1 Click to Start"
	 stop();
};

	

var check1 =function(){
 //check fuction for answer1 div
	if(document.getElementById("answerOne").innerText==correct){
		document.getElementById("answerOne").style.color = "green";
		//change text if green. 
		if(player[turn]==0){
		scoreOne += 10;
		//adding 10 points to player 1 score
		scoreWin += 10;
		//adding 10 points to keep track of player 1 score(this might look like a redundantcy but
		//but kept in for expansion of more than 2 players. 
		document.getElementById("score").innerText = scoreOne;
		//puts score in div
		}
		if(player[turn]==1){
		scoreTwo += 10;
		//player 2 scoring
		document.getElementById("score").innerText = scoreTwo;
		
		}

	}
	else{
	document.getElementById("answerOne").style.color = "red";
	//change text if wrong.
	}
};

var check2 = function(){
 	//check two for div 2. Same functionality as check 1.
	if(document.getElementById("answerTwo").innerText==correct){
		document.getElementById("answerTwo").style.color = "green";
		if(player[turn]==0){
		scoreOne += 10;
		scoreWin += 10;
		document.getElementById("score").innerText = scoreOne;
		
		}
		if(player[turn]==1){
		scoreTwo += 10;
		document.getElementById("score").innerText = scoreTwo;
		
		}
	}
	else{
	document.getElementById("answerTwo").style.color = "red";
	
	}
};

var check3 = function(){
 	//check two for div 3. Same functionality as check 1.
	if(document.getElementById("answerThree").innerText==correct){
		document.getElementById("answerThree").style.color = "green";
		if(player[turn]==0){
		scoreOne += 10;
		scoreWin += 10;
		document.getElementById("score").innerText = scoreOne;
		
		}
		if(player[turn]==1){
		scoreTwo += 10;
		document.getElementById("score").innerText = scoreTwo;
		
		}
	}
	else{
	document.getElementById("answerThree").style.color = "red";
	
	}
};
var check4 = function(){
 	//check two for div 4. Same functionality as check 1.
	if(document.getElementById("answerFour").innerText==correct){
		document.getElementById("answerFour").style.color = "green";
		if(player[turn]==0){
		scoreOne += 10;
		scoreWin += 10;
		document.getElementById("score").innerText = scoreOne;
	
		}
		if(player[turn]==1){
		scoreTwo += 10;
		scoreWin += 0
		document.getElementById("score").innerText = scoreTwo;
		
		}
	}
	else{
	document.getElementById("answerFour").style.color = "red";
	
	}
};

var reset = function(){
	//fucntion resets the color of the all the answers back to black after every click. 
	document.getElementById("answerOne").style.color = "black";
	document.getElementById("answerTwo").style.color = "black";
	document.getElementById("answerThree").style.color = "black";
	document.getElementById("answerFour").style.color = "black";
	
	initialize();
//calls the initialize function so another question can be asked. 


}

var slowReset = function(){
//added a 700 mil sec delay to the reset function so the right or wrong answer will be shown first then the new q and a with show. 
	setTimeout(reset, 700);
};

function stop(){
//this function is to stop the time interval. 
	clearInterval(test);
};

function counterReset(){
//this function reset parameters for the second player to take their turn. 
	if(counter>1){
		qArray = repopList();
		startTime = 30;
		scoreOne = 0;
		turn = 1;
		canClick = true;
		document.getElementById("score").innerText="Score"
		playerId();
		//this function changes the player name tag. 
	}
};
function playerId(){
	//this function changes the player name tag. 
	if(turn==0){
		document.getElementById("start").style.backgroundImage = "url('images/dwight.jpg')";
	}
	else{
		document.getElementById("start").style.backgroundImage = "url('images/jim.jpg')";
	}
}

function timerBox(){
//timing function
	if(counter==1){
		//function and paramenters are set after the first click. During player ones turn 
		startTime--;
		document.getElementById("start").innerText="Game in Progress";
		if (startTime == 0){
			//when the timer hits zero the following things paraments and function take place.
			canClick = false;
			//click events can't be clicked
			startTime = 0;
			stop();
			//interval is cleard.
			document.getElementById("scoreToBeat").innerText="Score to beat:"+scoreWin;
			document.getElementById("score").innerText="final score:"+scoreOne;
			document.getElementById("start").innerText="Player 2 click to start";
			document.getElementById("timer").innerText="Times up!"
			//final score for player one are shown 
		}
		else{
		document.getElementById("timer").textContent = "0:" + startTime;
		//the timer will keep running until it hits zero
		}

	}
	if(counter>1){
	//for the second click and the start of player 2's turn, the following parameters 
	//are put in place.	
		
		startTime--;
		//the start time goes down by 1
		document.getElementById("start").innerText="Game in Progress";
		//game in progress is shown while player two is playing 
		if (startTime == 0){
		//paraments after player 2 time runs out. 
			canClick = false;
			//click events for answers don't work 
			startTime = 0;
			stop();
			document.getElementById("score").innerText="final score:"+scoreTwo;
			document.getElementById("start").innerText="Game Over!";
			document.getElementById("timer").innerText="Times up!";

			
			if(scoreWin > scoreTwo){
				document.getElementById("player").innerText = "And the Dundie goes to player 1! Click here to play again";
			}
			//win condition for player 1 win based off of if scoreWin is greater than player 2 score.
			if(scoreWin < scoreTwo){
				document.getElementById("player").innerText = "And the Dundie goes to player 2! Click here to play again";
			}
			//win condition for player 2 win based off of if scoreWin is less than player 2 score.
			if(scoreWin === scoreTwo){
			//win condition for tie based off of if scoreWin equals player 2 score.
				document.getElementById("player").innerText = "It's a Tie! Click here to play again"
			}
		}
		else{
		document.getElementById("timer").textContent = "0:" + startTime;
		}
	}
};
 


var clickStart = document.getElementById("start");
clickStart.addEventListener('click', function(){
//click event for the start function. 	
	counter++;
	//counter for keeping track of how many clicks are made. 
	counterReset();

	test = setInterval(timerBox,1000);
	initialize();
	
	
});


var clickAOne = document.getElementById("answerOne");
clickAOne.addEventListener('click', function(){
	if(canClick){
		check1();
		slowReset();
	
	}
//click event for answer1 div. Also defines when click can be made. 	
}); 


var clickATwo = document.getElementById("answerTwo");
clickATwo.addEventListener('click', function(){
	if(canClick){
	check2();
	slowReset();
	

	}
//click event for answer2 div. Also defines when click can be made. 
}); 



var clickAThree = document.getElementById("answerThree");
clickAThree.addEventListener('click', function(){
	if(canClick){
	check3();
	slowReset();

	};
//click event for answer3 div. Also defines when click can be made. 
});



var clickAFour = document.getElementById("answerFour");
clickAFour.addEventListener('click', function(){
	if(canClick){
	check4();
	slowReset();
//click event for answer2 div. Also defines when click can be made. 	
	};
});

var clickReset = document.getElementById("player");
clickReset.addEventListener('click', startOver);
// click event for reseting the game. 




	
