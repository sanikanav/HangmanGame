
var arranswer = ["B", "A", "N", "K"];
var arrprog = ["__ ", "__ ", "__ ", "__"];

var countWrong = 0;
var usedLetters = "";


function getValue(){
  var charToFind = document.getElementById("userguess").value;
  checkGuess(charToFind);
}


function checkGuess(charToFind){
  var found = false;
  for (var i = 0; i < arranswer.length; i++){
      if (arranswer[i].toUpperCase() == charToFind.toUpperCase()){
        arrprog.splice(i, 1);
        arrprog.splice(i, 0, charToFind);
        document.getElementById("output2").innerHTML = "FOUND THE LETTER!!"
        found = true;
        equalArray();
      }

    document.getElementById("filledarray").innerHTML = arrprog;
}
    if (found == false){
      countWrong++;
      document.getElementById("output2").innerHTML = "LETTER NOT FOUND";
      usedLetters = usedLetters + " " + charToFind + "  ";
      document.getElementById("usedletters").innerHTML = "Letters that have not worked: " + usedLetters;
      updateHangman();
    }
  }

function updateHangman(){
  if (countWrong == 1){
    document.getElementById("hangmanimg").innerHTML = "<img src = 'HPic2.png' height = '300' width = '330'>";
    //All hangman progression images were created by me on Google Draw using the shape tool
  }

  else if (countWrong == 2){
    document.getElementById("hangmanimg").innerHTML = "<img src = 'HPic3.png' height = '300' width = '330'>";
  }

  else if (countWrong == 3){
    document.getElementById("hangmanimg").innerHTML = "<img src = 'HPic4.png' height = '300' width = '330'>";
  }

  else if (countWrong == 4){
    document.getElementById("hangmanimg").innerHTML = "<img src = 'HPic5.png' height = '300' width = '330'>";
  }

  else if (countWrong == 5){
    document.getElementById("hangmanimg").innerHTML = "<img src = 'HPic6.png' height = '300' width = '330'>";
  }

  else if (countWrong == 6){
    document.getElementById("hangmanimg").innerHTML = "<img src = 'HPic7.png' height = '300' width = '330'>";
  }

  else if (countWrong == 7){
    document.getElementById("hangmanimg").innerHTML = "<img src = 'HPic8.png' height = '300' width = '330'>";
  }

  else if (countWrong == 8){
    document.getElementById("hangmanimg").innerHTML = "<img src = 'HPic9.png' height = '300' width = '330'>";
  }

  else if (countWrong == 9){
    document.getElementById("hangmanimg").innerHTML = "<img src = 'HPic10.png' height = '300' width = '330'>";
  }

  else if (countWrong >= 10){
    document.getElementById("hangmanimg").innerHTML = "<img src = 'HPic11.png' height = '300' width = '330'>";
    document.getElementById("LostorWin").innerHTML = "YOU HAVE LOST!!";
  }
}

function hint(){
    document.getElementById("hint").innerHTML = "I have branches, but no fruit, trunk or leaves. What am I?";
  }


function equalArray(){
var equatebool = true;

  	for (var i = 0; i < arranswer.length; i++) {
  		if (arrprog[i].toUpperCase() != arranswer[i].toUpperCase()){
        equatebool = false;
      }
    }
    if(equatebool == true){
      document.getElementById("LostorWin").innerHTML = "YOU HAVE WON!!";
      document.getElementById("hangmanimg").innerHTML = "<img src = 'H_wingif.gif' height = '300' width = '330'>"
      //Stick man dancing gif from Gyfcat, title: "Best Stickman Dancing Gifs"
    }
}
