
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
var scoreOne = 0;
var remainQ = [];
var startTime = 30; 
var remainingTime = 0;

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
		scoreOne += 10;
		document.getElementById("score").innerText = scoreOne;
		console.log(scoreOne);
		console.log("you're right")
	}
	else{
	document.getElementById("answerOne").style.color = "red";
	console.log("you're wrong!")
	console.log(correct);
	}
};

 check2 = function(){
	if(document.getElementById("answerTwo").innerText==correct){
		document.getElementById("answerTwo").style.color = "green";
		scoreOne += 10;
		document.getElementById("score").innerText = scoreOne;
		console.log(scoreOne);
		console.log("you're right")
	}
	else{
	document.getElementById("answerTwo").style.color = "red";
	console.log("you're wrong!")
	console.log(scoreOne);
	console.log(correct);
	}
};

 check3 = function(){
	if(document.getElementById("answerThree").innerText==correct){
		document.getElementById("answerThree").style.color = "green";
		scoreOne += 10;
		document.getElementById("score").innerText = scoreOne;
		console.log(scoreOne);
		console.log("you're right")
		console.log(correct);
	}
	else{
	document.getElementById("answerThree").style.color = "red";
	console.log("you're wrong!")
	console.log(correct);
	}
};

 check4 = function(){
	if(document.getElementById("answerFour").innerText==correct){
		document.getElementById("answerFour").style.color = "green";
		scoreOne += 10;
		document.getElementById("score").innerText = scoreOne;
		console.log(scoreOne);
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

var updateClock = function() {
	startTime--;
	if (startTime <= 0){
	startTime = 0;
	}
	document.getElementById("timer").textContent = "0:" + startTime;
}
 
var test = function(){

	setInterval(updateClock,1000);
}

var clickStart = document.getElementById("start");
clickStart.addEventListener('click', function(){
	
	test();
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





