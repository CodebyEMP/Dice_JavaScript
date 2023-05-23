function changeEyes(a){

    if (a == 1){
        document.getElementById("dice").src="1 diceimg.png";
    }

    else if (a == 2){
        document.getElementById("dice").src="2 diceimg.png";
    }
    
    else if (a == 3){
        document.getElementById("dice").src="3 diceimg.png";
    }
    
    else if (a == 4){
        document.getElementById("dice").src="4 diceimg.png";
    }
    else if (a == 5){
        document.getElementById("dice").src="5 diceimg.png";
    }
    
    else{
        document.getElementById("dice").src="6 diceimg.png";
    }
};

function rolldice(){

  rand  = Math.floor(Math.random() * 6 ) + 1;
    changeEyes(rand);

    // andere Lösungsmöglichkeit (ohne  Anwendung von Methode changeEyes())
    // document.getElementById("dice").src=rand+" diceimg.png"
    
}


