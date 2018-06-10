
var master=[

		{'question':'what color is the sky?',
	 	'answer':'blue',
	 	'option1':'green',
	 	'option2':'brown',
	 	'option3':'purple'
		},

		{'question':'what is 2+2?',
	 	'answer':'4',
	 	'option1':'3',
	 	'option2':'7',
	 	'option3':'97'
		},

		{'question':'what is my name',
	 	'answer':'rahul',
	 	'option1':'bob',
	 	'option2':'moe',
	 	'option3':'joe'
		},

		{'question':'what color is the color of grass?',
	 	'answer':'green',
	 	'option1':'yellow',
	 	'option2':'brown',
	 	'option3':'purple'
		},

		{'question':'what is 3+3?',
	 	'answer':'6',
	 	'option1':'3',
	 	'option2':'7',
	 	'option3':'97'
		},

		{'question':'what is your name',
	 	'answer':'bill',
	 	'option1':'bob',
	 	'option2':'moe',
	 	'option3':'joe'
		},

		{'question':'what color is the color of dirt',
	 	'answer':'brown',
	 	'option1':'green',
	 	'option2':'aqua',
	 	'option3':'purple'
		},

		{'question':'what is 4+4?',
	 	'answer':'8',
	 	'option1':'3',
	 	'option2':'7',
	 	'option3':'97'
		},

		{'question':'what is his name',
	 	'answer':'ted',
	 	'option1':'bob',
	 	'option2':'moe',
	 	'option3':'joe'
		},

		{'question':'what color is water?',
	 	'answer':'water color',
	 	'option1':'green',
	 	'option2':'brown',
	 	'option3':'purple'
		},

		{'question':'what is 5+5?',
	 	'answer':'10',
	 	'option1':'3',
	 	'option2':'7',
	 	'option3':'97'
		},

		{'question':'what is her name',
	 	'answer':'jill',
	 	'option1':'bob',
	 	'option2':'moe',
	 	'option3':'joe'
		}



	];
var qArray=master;
var questionRandom = [];
var correct = [];
var incorrect1 = [];
var incorrect2 = [];
var incorrect3 = [];
var a = [];
var foo = [];
var fooTwo = [];
var scoreOne = 0;
var scoreTwo = 0;
var remainQ = [];
var startTime = 11; 
var test = null;
var player =[0,1];
var turn = 0;
var counter = 0;
var scoreWin = 0;
var canClick = true;



var initialize = function(){

  
console.log(qArray.length)
var rando = Math.floor(Math.random()* qArray.length)
 questionRandom = qArray[rando];
console.log(questionRandom);
 correct = questionRandom.answer;
console.log(correct);
 incorrect1 = questionRandom.option1;
console.log(incorrect1);
 incorrect2 = questionRandom.option2;
 incorrect3 = questionRandom.option3;
 qArray.splice(rando, 1)
 console.log('post splice', qArray)
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

 foo = a.shuffle();
console.log(foo);

 fooTwo = questionRandom.question;
console.log(fooTwo);
	
	document.getElementById("questionAsked").innerText=fooTwo;
	document.getElementById("answerOne").innerText=foo[0];
	document.getElementById("answerTwo").innerText=foo[1];
	document.getElementById("answerThree").innerText=foo[2];
	document.getElementById("answerFour").innerText=foo[3];



};

function startOver(){
	qArray = master;
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

	

 check1 =function(){
	if(document.getElementById("answerOne").innerText==correct){
		document.getElementById("answerOne").style.color = "green";
		if(player[turn]==0){
		scoreOne += 10;
		scoreWin += 10;
		document.getElementById("score").innerText = scoreOne;
		console.log("you're right")
		}
		if(player[turn]==1){
		scoreTwo += 10;
		document.getElementById("score").innerText = scoreTwo;
		console.log("you're right")
		}

	}
	else{
	document.getElementById("answerOne").style.color = "red";
	console.log("you're wrong!")
	}
};

 check2 = function(){
	if(document.getElementById("answerTwo").innerText==correct){
		document.getElementById("answerTwo").style.color = "green";
		if(player[turn]==0){
		scoreOne += 10;
		scoreWin += 10;
		document.getElementById("score").innerText = scoreOne;
		console.log("you're right")
		}
		if(player[turn]==1){
		scoreTwo += 10;
		document.getElementById("score").innerText = scoreTwo;
		console.log("you're right")
		}
	}
	else{
	document.getElementById("answerTwo").style.color = "red";
	console.log("you're wrong!")
	}
};

 check3 = function(){
	if(document.getElementById("answerThree").innerText==correct){
		document.getElementById("answerThree").style.color = "green";
		if(player[turn]==0){
		scoreOne += 10;
		scoreWin += 10;
		document.getElementById("score").innerText = scoreOne;
		console.log("you're right")
		}
		if(player[turn]==1){
		scoreTwo += 10;
		document.getElementById("score").innerText = scoreTwo;
		console.log("you're right")
		}
	}
	else{
	document.getElementById("answerThree").style.color = "red";
	console.log("you're wrong!")
	}
};

 check4 = function(){
	if(document.getElementById("answerFour").innerText==correct){
		document.getElementById("answerFour").style.color = "green";
		if(player[turn]==0){
		scoreOne += 10;
		scoreWin += 10;
		document.getElementById("score").innerText = scoreOne;
		console.log("you're right")
		}
		if(player[turn]==1){
		scoreTwo += 10;
		scoreWin += 0
		document.getElementById("score").innerText = scoreTwo;
		console.log("you're right")
		}
	}
	else{
	document.getElementById("answerFour").style.color = "red";
	console.log("you're wrong!")
	console.log(correct);
	}
};

var reset = function(){

document.getElementById("answerOne").style.color = "black";
document.getElementById("answerTwo").style.color = "black";
document.getElementById("answerThree").style.color = "black";
document.getElementById("answerFour").style.color = "black";
	
	initialize();



}

var slowReset = function(){

	setTimeout(reset, 700);
};

function stop(){

	clearInterval(test);
};

function counterReset(){
	if(counter>1){
		startTime = 11;
		scoreOne = 0;
		turn = 1;
		canClick = true;


		
	}
};

function timerBox(){

	if(counter==1){
		startTime--;
		document.getElementById("start").innerText="Game in Progress";
		if (startTime == 0){
			canClick = false;
			startTime = 0;
			stop();
			document.getElementById("scoreToBeat").innerText="Score to beat:"+scoreWin;
			document.getElementById("score").innerText="final score:"+scoreOne;
			document.getElementById("start").innerText="Player 2 click to start";
			document.getElementById("timer").innerText="Times up!"
			
		}
		else{
		document.getElementById("timer").textContent = "0:" + startTime;
		}

	}
	if(counter>1){
		
		
		startTime--;
		document.getElementById("start").innerText="Game in Progress";
		if (startTime == 0){
			canClick = false;
			startTime = 0;
			stop();
			document.getElementById("score").innerText="final score:"+scoreTwo;
			document.getElementById("start").innerText="Game Over!";
			document.getElementById("timer").innerText="Times up!";
			console.log(scoreWin,scoreTwo);
			if(scoreWin > scoreTwo){
				document.getElementById("player").innerText = "Player 1 Wins! Click here to play again";
			}
			if(scoreWin < scoreTwo){
				document.getElementById("player").innerText = "Player 2 Wins! Click here to play again";
			}
			if(scoreWin === scoreTwo){
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
	
	counter++;
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
	
}); 


var clickATwo = document.getElementById("answerTwo");
clickATwo.addEventListener('click', function(){
	if(canClick){
	check2();
	slowReset();
	

	}

}); 




var clickAThree = document.getElementById("answerThree");
clickAThree.addEventListener('click', function(){
	if(canClick){
	check3();
	slowReset();

	};
});



var clickAFour = document.getElementById("answerFour");
clickAFour.addEventListener('click', function(){
	if(canClick){
	check4();
	slowReset();
	
	};
});

var clickReset = document.getElementById("player");
clickReset.addEventListener('click', startOver);



	// if()
	// startTime--;
	// if (startTime <= 0){
	// startTime = 0;
	// stop();
	// document.getElementById("scoreToBeat").innerText=player[0];
	// document.getElementById("score").innerText="final score:"+player[turn];
	// turn=1;
	// if(counter==1){
		
	// 	document.getElementById("score").innerText=0;
	// 	document.getElementById("start").innerText ="Player 2 Start"
	// 	startTime = 31;
	// 	startTime--;
	// 	if (startTime <= 0){
	// 		startTime = 0;
	// 		stop();
	// 		if(player[0] > player[turn]){
	// 			console.log("player 1 wins")
	// 		}
	// 		else{
	// 			console.log("player 2 wins")
	// 		};

	// 	};

	// }


	// }
	// document.getElementById("timer").textContent = "0:" + startTime;


