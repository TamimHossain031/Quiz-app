const questions = [
    {
        question: 'Which is largest animal in the world',
        answers:[
            {text: 'Shark', correct: false},
            {text: 'Blue whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false}
        ]
    },
    {
        question: 'Which is smallest animal in the',
        answers:[
            {text: 'Shark', correct: false},
            {text: 'Blue whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false}
        ]
    },
    {
        question: 'Which is largest animal in the world',
        answers:[
            {text: 'Shark', correct: false},
            {text: 'Blue whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false}
        ]
    },
    {
        question: 'Which is smallest animal in the world',
        answers:[
            {text: 'Shark', correct: false},
            {text: 'Blue whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false}
        ]
    }    
]
const question = document.querySelector('.question');
const answerButtons = document.querySelector('.question-box');
const nextBtn = document.querySelector('.next-btn');

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerText = questionNo + ' . '+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        let btn = document.createElement('button');
        btn.innerText = answer.text;
        btn.classList.add('btn');
        answerButtons.appendChild(btn);
        if(answer.correct){
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click',selectAns);
    })
}

function resetState(){
    nextBtn.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function  selectAns(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
   if(isCorrect){
    selectBtn.classList.add('correct');
    score++;
   }else{
    selectBtn.classList.add('incorrect');
   }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
           
        }       
        button.disabled = true;
    });
   
    nextBtn.style.display = 'block';
}
function handleNextBtn(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showResult();
    }
}

function showResult(){
    resetState();
    question.innerText = `You scored ${score} out of ${questions.length} !`;
    nextBtn.innerText = 'Play again';
    nextBtn.style.display = 'block';
   
    

}
nextBtn.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
       handleNextBtn();
    }else{
       startQuiz()
    }
})
startQuiz()
