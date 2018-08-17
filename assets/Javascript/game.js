

var guessNum;
var letter;
var winsNum = 0;
var lossesNum = 0;
var guessesLeft;

function Begin(){



guessesLeft = 10;

document.getElementById("winsNum").textContent = winsNum;

document.getElementById("lossesNum").textContent = lossesNum;

document.getElementById("guessesLeft").textContent = guessesLeft;

document.getElementById("guesses").innerHTML = "";


   guessNum =  Math.floor(Math.random() * 26) + 1; 

   if(guessNum == 1)
   {
       letter = "a";
   }
   if(guessNum == 2)
   {
       letter = "b";
   }
   if(guessNum == 3)
   {
       letter = "c";
   }
   if(guessNum == 4)
   {
       letter = "d";
   }
   if(guessNum == 5)
   {
       letter = "e";
   }
   if(guessNum == 6)
   {
       letter = "f";
   }
   if(guessNum == 7)
   {
       letter = "g";
   }
   if(guessNum == 8)
   {
       letter = "h";
   }
   if(guessNum == 9)
   {
       letter = "i";
   }
   if(guessNum == 10)
   {
       letter = "j";
   }
   if(guessNum == 11)
   {
       letter = "k";
   }
   if(guessNum == 12)
   {
       letter = "l";
   }
   if(guessNum == 13)
   {
       letter = "m";
   }
   if(guessNum == 14)
   {
       letter = "n";
   }
   if(guessNum == 15)
   {
       letter = "o";
   }
   if(guessNum == 16)
   {
       letter = "p";
   }
   if(guessNum == 17)
   {
       letter = "q";
   }
   if(guessNum == 18)
   {
       letter = "r";
   }
   if(guessNum == 19)
   {
       letter = "s";
   }
   if(guessNum == 20)
   {
       letter = "t";
   }
   if(guessNum == 21)
   {
       letter = "u";
   }
   if(guessNum == 22)
   {
       letter = "v";
   }
   if(guessNum == 23)
   {
       letter = "w";
   }
   if(guessNum == 24)
   {
       letter = "x";
   }
   if(guessNum == 25)
   {
       letter = "y";
   }
   if(guessNum == 26)
   {
       letter = "z";
   }

   console.log(letter);
}

function Guess(){

 var input = document.getElementById("guessBox").value;


    if(letter == input)
    {
        alert("You guessed correctly!");
        winsNum++;
        Begin();
    }
    else
    {
        
        alert("That's not it. Try again.");
        document.getElementById("guesses").innerHTML += (" " + input);
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        
    }

        if(guessesLeft <= 0)
        {
            alert("You Lose!");
            lossesNum++;
            Begin();
        }

        document.getElementById("guessBox").value = "";

}

Begin();
