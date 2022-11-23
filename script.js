'use strict';


const aboutBtn = document.querySelector('.about');
const modalAbout = document.querySelector('.modal-about')
const closeAboutBtn = document.querySelector('.closeAbout');
modalAbout.classList.add('hidden');
const guessGame = document.querySelector('.guessNumber')
guessGame.classList.add('hidden');
const guessBtn = document.querySelector('.guess');
const homeBtn = document.querySelector('.home')
const modalContact = document.querySelector('.modal-contact');


aboutBtn.addEventListener('click', function(){
    modalAbout.classList.remove('hidden');
    modalContact.classList.add('hidden');
})

closeAboutBtn .addEventListener('click', function(){
    modalAbout.classList.add('hidden');
})

document.addEventListener('keydown', function(e){
    if(e.key == 'Escape'){
    modalAbout.classList.add('hidden');
    }
})

//ProjectBtn
const ProjectBtn = document.querySelector('.project')
ProjectBtn.addEventListener('click', function(){
    ProjectBtn.classList.add('hidden');
    aboutBtn.classList.add('hidden');
    contactBtn.classList.add('hidden');
    guessBtn.classList.remove('hidden');
    modalAbout.classList.add('hidden');
    modalContact.classList.add('hidden');
})
//Game
guessBtn.classList.add('hidden');
guessBtn.addEventListener('click', function(){
    guessGame.classList.remove('hidden');
    
})

//Guess Game Functions :)
const guessGameBtn = document.querySelector('.guessBtn');
const againBtn = document.querySelector('.again');

let number = Math.round(Math.random() * 19) + 1;
let currentScore = 20;
let highscore = 0
let message = document.querySelector(".message");

guessGameBtn.addEventListener("click", function () {
  let guess = document.querySelector('.numberInput').value;
  let score = document.querySelector(".score");
  if (guess == number && currentScore>=1) {
    message.innerHTML = "YOU WIN !!!!!";
    message.style.color = '#90EE90';
    if(currentScore > highscore){
      highscore = currentScore;
      document.querySelector('.highScore').textContent = highscore;
    }    
  } else if(guess > number && currentScore>=1){
    currentScore--;
    score.innerHTML = currentScore;
    message.innerHTML = "GO LOWER";
  }
  else if(!guess && currentScore>=1){
    message.textContent = "NO NUMBER !!!!";
  } else if(guess < number && currentScore>=1){
    currentScore--;
    score.innerHTML = currentScore;
    message.innerHTML = "GO Higher";
  }
  else if(currentScore < 1){
    message.textContent = "You lose !!!!";
  }
});

againBtn.addEventListener('click', function (){
  number = Math.round(Math.random() * 19) + 1;
  document.querySelector(".score").textContent = '20';
  currentScore = 20;
  message.innerHTML = "Start guessing...";
  message.style.color = "black";
})

//Btn Home 
homeBtn.addEventListener('click', function(){
    ProjectBtn.classList.remove('hidden');
    aboutBtn.classList.remove('hidden');
    contactBtn.classList.remove('hidden');
    guessBtn.classList.add('hidden');
    guessGame.classList.add('hidden');
    modalContact.classList.add('hidden');
})

// Contact Button
const contactBtn = document.querySelector('.contact');
modalContact.classList.add('hidden');
const contactBtnClose = document.querySelector('.closeContact');

contactBtnClose.addEventListener('click', function(){
  modalContact.classList.add('hidden');
})


contactBtn.addEventListener('click', function(){
  modalContact.classList.remove('hidden');
  modalAbout.classList.add('hidden');
})
document.addEventListener('keydown', function(e){
  if(e.key == 'Escape'){
    modalContact.classList.add('hidden');
  }
})