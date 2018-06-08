
var qArray=[

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
var questionRandom = [];
var correct = [];
var incorrect1 = [];
var incorrect2 = [];
var incorrect3 = [];
var a = [];
var foo = [];
var fooTwo = [];
var scoreBoard = 0;
var remainQ = [];
var startTime = 11; 
var test = null;
var player =[0,0];
var turn = 0;
var counter = 0;


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



	

 check1 =function(){
	if(document.getElementById("answerOne").innerText==correct){
		document.getElementById("answerOne").style.color = "green";
		scoreBoard += 10;
		player[turn]=scoreBoard;
		document.getElementById("score").innerText = player[turn];
		console.log("you're right")
	}
	else{
	document.getElementById("answerOne").style.color = "red";
	console.log("you're wrong!")
	}
};

 check2 = function(){
	if(document.getElementById("answerTwo").innerText==correct){
		document.getElementById("answerTwo").style.color = "green";
		scoreBoard += 10;
		player[turn]=scoreBoard;
		document.getElementById("score").innerText = player[turn]
		console.log("you're right")
	}
	else{
	document.getElementById("answerTwo").style.color = "red";
	console.log("you're wrong!")
	}
};

 check3 = function(){
	if(document.getElementById("answerThree").innerText==correct){
		document.getElementById("answerThree").style.color = "green";
		scoreBoard += 10;
		player[turn]=scoreBoard;
		document.getElementById("score").innerText = player[turn];
		console.log("you're right")
	;
	}
	else{
	document.getElementById("answerThree").style.color = "red";
	console.log("you're wrong!")
	}
};

 check4 = function(){
	if(document.getElementById("answerFour").innerText==correct){
		document.getElementById("answerFour").style.color = "green";
		scoreBoard += 10;
		player[turn]=scoreBoard;
		document.getElementById("score").innerText = player[turn]; 
		console.log("you're right");
		console.log(correct);
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
	}
};

function timerBox(){

	if(counter==1){
		startTime--;
		document.getElementById("start").innerText="Game in Progress";
		if (startTime <= 0){
			startTime = 0;
			stop();
			document.getElementById("scoreToBeat").innerText="Score to beat:"+player[0];
			document.getElementById("score").innerText="final score:"+player[turn];
			document.getElementById("start").innerText="Player 2 click to start";
			document.getElementById("timer").innerText="Times up!"
			
		}
		else{
		document.getElementById("timer").textContent = "0:" + startTime;
		}

	}
	if(counter>1){
		document.getElementById("score").innerText=0
		turn = 1;
		startTime--;
		document.getElementById("start").innerText="Game in Progress";
		if (startTime <= 0){
			startTime = 0;
			stop();
			document.getElementById("score").innerText="final score:"+player[turn];
			document.getElementById("start").innerText="Game Over!";
			document.getElementById("timer").innerText="Times up!";
			if(player[turn] > player[0]){
				document.getElementById("player").innerText = "Player 2 Wins!";
			}
			if(player[0] > player[turn]){
				document.getElementById("player").innerText = "Player 1 Wins!";
			}
			if(player[turn] = player[0]){
				document.getElementById("player").innerText = "It's a Tie!"
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
	check1();
	slowReset();
}); 


var clickATwo = document.getElementById("answerTwo");
clickATwo.addEventListener('click', function(){
	check2();
	slowReset();
}); 




var clickAThree = document.getElementById("answerThree");
clickAThree.addEventListener('click', function(){
	check3();
	slowReset();
});



var clickAFour = document.getElementById("answerFour");
clickAFour.addEventListener('click', function(){
	check4();
	slowReset();
});




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


