'use strict';
let x=Math.trunc(Math.random()*20)+1;

let score=20;
let highscore=0;
console.log('highscore',highscore);
document.querySelector('.again').addEventListener('click',function()
{
   x=Math.trunc(Math.random()*20)+1;
   score=20;
  console.log(x);
  document.querySelector('.message').textContent="Start guessing...";
  document.querySelector('.score').textContent=score;
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem';
  document.querySelector('.number').textContent='?';

}
)
document.querySelector('.check').addEventListener('click',function()
{
  const guess=Number(document.querySelector('.guess').value);
  if (guess===x){
    document.querySelector('.message').textContent="gg"
    document.querySelector('.number').textContent=x;



    document.querySelector('body').style.backgroundColor='#00BF00';
    document.querySelector('.number').style.width='30rem';
    if(score>highscore){
      highscore=score;

    }
    document.querySelector('.highscore').textContent=highscore;
    console.log('dwada',highscore)

  }
  else if (guess>x){
    document.querySelector('.message').textContent="High";
    score--;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#ff0000';



  }
  else if (guess<x){
    document.querySelector('.message').textContent="Low";
    score--;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#ff0000';


  }
if(!guess){
  document.querySelector('.message').textContent="no input"
  document.querySelector('.score').textContent=score;

}


})
