const quizData = [
    {
        question: "What do you add to a template in order to control where page content goes ?",
        a: "Text Frames",
        b: "HTML Controllers",
        c: "Editable Regions",
        d: " Page Content Controllers",
        correct: "c",
    },
    {
        question: "Which of the following JavaScript cannot do?",
        a: "JavaScript can react to events",
        b: "JavaScript can manipulate HTML elements",
        c: "JavaScript can be use to validate data",
        d: "All of the Above",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Whats so great about XML?",
        a: " Easy data exchange",
        b: "High speed on network",
        c: "Only B.is correct",
        d: "Both A & B",
        correct: "d",
    },
     {
        question: "Which is an scripting language ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: " _________ keyword is used to declare variables in javascript.",
        a: "Var",
        b: "String",
        c: "Dim",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
     {
        question: " Which is not a property of attribute Behaviour of <Marquee> tag?",
        a: "alternate",
        b: " blur",
        c: "slide",
        d: "Scroll",
        correct: "b",
    },
    {
        question: "Using _______ statement is how you test for a specific condition.",
        a: "Select",
        b: "If",
        c: "Switch",
        d: "for",
        correct: "b",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
<div class="position-absolute top-80 start-50 translate-middle">
         <button onclick="location.reload()" type="button"  class="btn btn-danger">Reload</button>
         </div>  `
       }
    }
})