let circle = document.getElementsByClassName("selected"); // display board id

let score = document.getElementsByClassName("score"); //score card

let win = 0;
let lose = 0;
let round = 1;

function generate_number(selectedNumber)
 {
  if (win < 3) // if user have win 3 round it would not allow to move further and ends the game 
   {
    
    if (round < 10) // it check the number of round and display the result 
     {
      circle[0].innerText = selectedNumber; //putting user selected number in big ball

      var random = Math.random() * 6; // multlipay the rendom number with 6 so it can note generate value greater than 6
      random = Math.ceil(random);    // take the next integer and ends the decimal value
     
      circle[1].innerText = random;  // updating the system generated number in big ball
      score[0].innerText = "Round = " + round;  // display number round attempet by user in score bar
      round = ++round; // increment in number of round to count turns 

      //if user guess the correct number this code will rune
      if (random === selectedNumber) 
      {
       circle[1].style.color = "green";
       circle[1].style.bordercolor  = "green";

       circle[2].style.background  = "green";
       circle[2].innerText = "You win";
       circle[2].style.color = "white";

        score[1].innerText = "Win = " + ++win;
      } 
      
      //if user guess the wrong number this code will rune
      else
       {
        circle[1].style.color = "Red";
        circle[1].style.bordercolor  = "red";

       circle[2].style.background  = "red";
        circle[2].innerText = "You lose";
        circle[2].style.color = "white";
        score[2].innerText = "Lose = " + ++lose;
      }
    } 
    
    // user have been attempet 10 turn and did not won 3 round so this code will run
    else
     {
        score[0].innerText = "Round = " + round;
        score[2].innerText = "Lose = " + ++lose;
        
      let result_lose = document.getElementsByClassName("reuslt_lose");
      circle[0].style.display = "none";
      circle[1].style.display = "none";
      circle[2].style.display = "none";
      result_lose[0].style.display = "block"; // dispalying the result and hiding big balls
    } // end of 10 round conditio
  } 

  // if user win 3 rund so this code run
  else
   {
    let result_win = document.getElementsByClassName("reuslt_win");
    circle[0].style.display = "none";
    circle[1].style.display = "none";
    circle[2].style.display = "none";
    result_win[0].style.display = "block";
  } // end of win condition
} // end of function
