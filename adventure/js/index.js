
//load bg image before everything else
$("body").css("background-image: url(http://cdn.playbuzz.com/cdn/09f8f7dd-c046-4a1f-8339-f40c0ddc786f/49887369-2992-45c9-9eb9-7a4f526c6fb7.jpg) ;")

//init gameStart
gameStart = 0;




//function to check item inside an array
function isInArray(value, array) {
	return array.indexOf(value) > -1;
}


function removeItem(array, item){
	for(var i in array){
		if (array[i] == item){
			array.splice(i,1);
		}
	}
}





//This function holds the whole game and only starts when index.html's button gets pressed
function startTheGame () {

// GAME STARTS HERE
var inventory = ["Water", "Chocolate"];
var correctAns= 0;

alert("Your journey takes you to the deep caves. After a while you come across two tunnels going different ways");

var leftOrRight1 = prompt("Do you go left or right?").toUpperCase();

	
if (leftOrRight1 == "LEFT") {
    alert("you walk along a dark corridor, finding another that splits off");
    alert("you dive in deeper into the tunnel");

    while (correctAns != 1) { //at this moment the correctAns var is = 0 - its going to 
	    //go through the whole loop again and again until the correct Ans is 0
		var yesOrNo1 = prompt("Do you explore the tunnel?").toUpperCase();

		switch (yesOrNo1) {
			case "YES":
			  alert("You find a sword lying on the ground. You pick it up and continue on your journey.");
			  inventory.push("Sword");
			  correctAns = 1;
			  //collected sword, now move on
			  break;
			
			case "NO":
			correctAns = 1;
			break;

			default:
			  alert("...");
			break;
		}
	} //check the while loop

}

//RAPTOR SCENE

alert("You continue your exploratiokn of the caves. Later on, you encounter a sleeping rapter, twice the size of any other you've seen.");
	var correctAns = 0;
	var survive = 0;

while (correctAns != 1) {
	var yesOrNo2 = prompt("Do you try to ambush the rapter or do you try to sneak past it? Type Ambush or Sneak").toUpperCase();

	switch (yesOrNo2) {
		case "AMBUSH":
		//what happens on ambush

			var check = isInArray('Sword', inventory); 
			//alert('First check before removing the sword is '+check); //
			if (check == true) {
				alert("You succesfully plunge the sword into the rapters back, killing it instantly. You continue on your journey");
				alert("The acid blood of the rapter rots the sword, leaving it useless to your cause. You decide to leave the sword in the rapters back. You continue your journey.");
				removeItem(inventory,"Sword"); //remove sword
				survive=1;
				correctAns=1;
			}else{
				alert("you try to attack the raptor with your bare hands...you didn't survive the encounter. You're journey ends here!");
				correctAns=1;
			}
		break;

		case "SNEAK":
		//sneak scenario
			alert("In your attempt to sneak past the sleeping rapter, you step on a stray branch");
			alert("This wakes up the sleeping rapter with your back turned to it. You don't stand a chance, and it devours you. There was no chance to escape. Your Journey ends here!");
			correctAns=1;
		break;

		default:
			alert("You are undesisive, make a decision quickly!");
		break;
	}//end switch
}// end while



//BUTTON SCENE
if (survive == 1) {
	survive=0;
	alert("As you continue down the tunnel, you come across a button");
		var correctAns = 0;
		var sceneSkip = false;

	while (correctAns!=1) {
		var yesOrNo3 = prompt("Do you press the button? Type Yes or No").toUpperCase();

		switch (yesOrNo3) {
			case "YES":
				alert("It opens up a room with a chest.");
				correctAns=1;
			break;

			case "NO":
				//continue exploration
				alert("The button looks like a trap, you avoid the urge to press it and move on...");
				correctAns=1;
				sceneSkip = true;
				survive=1;
			break;

			default:
				alert("The button may change your life, do you press it or not? Make a decision quick!");
			break;
		}//end switch
	}//end while check
}//end if check



//CHEST SCENE
	if (sceneSkip == false) { 
		alert("CHEST MAKES A RUMBLING NOISE");
		var yesOrNo4 = prompt("Do you open the chest? Type Yes or No").toUpperCase();
		var correctAns = 0;

		while (correctAns!=1) {
			switch (yesOrNo4) {
				case "YES":
					alert("You open the chest - and to your delight - find it filed with gold coins. You grab as many as you can, though not realising you grow considerably weaker with each coin you stuff into your pouch");
					alert("as you stuff the very last coin into your pouch, you finally notice your fatigue. You drop to the ground and lay there. You do not have the strength needed to get up and eat. You starve to death");
					alert("Your journey ends with your greed.");
					correctAns=1;
				break;

				case "NO":
					//continue exploration
					alert(survive);
					alert("The chest looks like a trap, you avoid the urge to open it, it seems you will never know what the chest held. You move on...");
					correctAns=1;
					survive=1;
				break;

				default:
					//what??
					alert("The button may change your life, do you press it or not? Make a decision quick!");
				break;
			}//end switch
		}//end while check
	}


//SCENE 5
alert('BEFORE SCENE 5 its ' + survive);
if (survive == 1) {
scene5();
}

} // GAME START FUNCTION
