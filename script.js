'use strict';


function display (message){

    document.querySelector('.message').textContent = message;

}

var a = Math.floor((Math.random() * 20) + 1);
var score = 10;
var highscore = 0;


 
document.querySelector('.check').addEventListener('click', function func(){

    let guess = Number(document.querySelector('.guess').value);
   
    console.log(guess, typeof guess);

    if( !guess ) 
    {
        display('No number');
    }
    else if( guess == a )
    {
        display('Correct Guess !!');
        document.querySelector('.number').textContent = a;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30em';

        if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        }
            
    }
    
    else
    {
        if(score>1){

        display(guess > a ? 'Too high!' : 'Too Low!');
        score --;
        document.querySelector('.score').textContent = score;
        }
        else{
            display('Game Over , Try Again');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#b30b0b';
            document.querySelector('.number').textContent = a;
            


        }
    }
    


});


document.querySelector('.again').addEventListener('click', function restart(){


       document.querySelector('.number').textContent = '?';
       document.querySelector('body').style.backgroundColor = '#222';
       document.querySelector('.number').style.width = '15rem';
       document.querySelector('.guess').value = '';
            display('Start Guessing...');






});
