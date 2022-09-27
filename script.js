var startBtn = document.getElementById("startbutton");
var questionEl = document.getElementById("Qbuttons");
var timerEl = document.getElementById("settimer");
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")
var mytimer = 75;
var arrayShuffledQuestions
var QuestionsIndex = 0
var a = "answer"
var gameover

var questions = [
{
Q: 'Which of the following are not a Javascript Data Type',
choices: ['number','CSS','Object','None'], 
a: 'CSS'},
{
Q: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
choices: ['Throws an error','Ignores the Statement','Gives a Warning','None of the above'],
a: 'Ignores the Statement'},
{
Q: 'Arrays in Javascript can be used to store __________.',
choices: ['numbers','booleans','strings','all of the above'],
a: 'all of the above'},
]

startBtn.addEventListener("click", startgame);
function startgame(){


// element.setAtrribute('class', 'nameofclass we want to add')
startBtn.setAttribute('class', 'hide')
questionEl.removeAttribute('class')
countdown()
    }

function countdown() {
    var timeInterval = setInterval(function (){
        mytimer--;
        timerEl.textContent = mytimer;
        console.log(mytimer);
      
    if(mytimer < 1){
        clearInterval(timeInterval)

    }
    if (gameover) {
        clearInterval(mytimer)
    }

    
    }, 1000);

    
} 

