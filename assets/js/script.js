var startButton=document.querySelector(".startQuiz");
var quizSection =document.querySelector(".quiz");
var questionEl=document.querySelector(".questions");
var answerEl=document.querySelector(".answerChoices");
var resultsEl=document.querySelector(".results");
var timeEl=document.querySelector(".timer");
var openingSection=document.querySelector(".openingMessage");

var questionList=[
    {
      question: "What is the result of the following expression: 2 + 2?",
      choices: ["three", "four", "five", "six"],
      answer: "four"
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      choices: ["let", "var", "const", "variable"],
      answer: "var"
    },
    {
      question: "What is the purpose of the 'typeof' operator in JavaScript?",
      choices: ["To check if a variable is defined", "To check the type of a value", "To compare two values", "To create new variables"],
      answer: "To check the type of a value"
    },
    {
      question: "What is an array in JavaScript?",
      choices: ["A function", "A string", "A number", "A collection of values"],
      answer: "A collection of values"
    },
    {
      question: "What does 'NaN' stand for?",
      choices: ["Not a Name", "Not a Null", "Not a Number", "No Action Needed"],
      answer: "Not a Number"
    }
  ]

var questionIndex=0;
var time=60;
var score=0;
function startTimer(){
    window.timerint=setInterval(function(){ 
        timeEl.textContent=time;
        time--;
        if(time<=0)
        {
            clearInterval(timerint);
        }
    },1000)
    
};

function displayQuestion(){
    startTimer();
    quizSection.classList.remove("hide");
    openingSection.classList.add("hide");
    questionEl.textContent=questionList[questionIndex].question;
    var answerList=questionList[questionIndex].choices;
    console.log(answerList);
    var options="";
    for(var i=0; i<answerList.length; i++){
        options += `<li> ${ answerList[i]}</li>`;
        answerEl.innerHTML=options;
    }
}

answerEl.addEventListener("click",function(event){
    event.preventDefault();
    if(event.target.matches("li")){
        checkAnswer(event.target.textContent);
    }
})
function checkAnswer(event){
    var correctAnswer=questionList[questionIndex].answer;
    if(event===correctAnswer){
        score++;
    }
    else{
        score--;
        time -= 10;
    }
    questionIndex++;
    if(questionList.length>questionIndex){
        displayQuestion();
    }
    else{
        clearInterval(window.timerint);
    }
}
startButton.addEventListener("click", function(event) {
        event.preventDefault();
        displayQuestion();
       
    }
)