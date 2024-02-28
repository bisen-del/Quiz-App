const questionArr = [
    {
        question: "Which of the following can read and render HTML web pages ",
        answers: [
            { text: "Server", correct: false },
            { text: "Head Tak", correct: false },
            { text: "Web Browser", correct: true },
            { text: "Empty", correct: false }
        ]
    },
    {
        question: "The latest HTML standard is ",
        answers: [
            { text: "HTML 4.0", correct: false },
            { text: "HTML 5.0", correct: true },
            { text: "XML", correct: false },
            { text: "SGML", correct: false }
        ]
    },
    {
        question: "Why were cookies designed? ",
        answers: [
            { text: "for server side programming", correct: true },
            { text: "for client side programming", correct: false },
            { text: "both a & b", correct: false },
            { text: "None", correct: false }
        ]
    },
    {
        question: "What are variables used in JavaScript programs ",
        answers: [
            { text: "Varying Randomly", correct: false },
            { text: "Storing numbers , dates, and other values", correct: true },
            { text: "Used as header files", correct: false },
            { text: "None", correct: false }
        ]
    },
    {
        question: "Identify the incorrect HTML tag among the following ",
        answers: [
            { text: "input tag", correct: false },
            { text: "select tag", correct: false },
            { text: "list tag", correct: true },
            { text: "textarea", correct: false }
        ]
    },
    {
        question: "Full form of WWWC is",
        answers: [
            { text: "World wide web community", correct: false },
            { text: "World wide websites community", correct: false },
            { text: "World wide websites consortium", correct: false },
            { text: "World wide web consortium", correct: true }
        ]
    },
    {
        question: " A website is a _______  cookie.",
        answers: [
            { text: "Volatile", correct: false },
            { text: "Transient", correct: true },
            { text: "inTransient", correct: false },
            { text: "Non-Volatile", correct: false }
        ]
    },
    {
        question: " On which model is www based upon",
        answers: [
            { text: "client-server ", correct: true },
            { text: "local server", correct: false },
            { text: "3 tier", correct: false },
            { text: "None", correct: false }
        ]
    },
    {
        question: " Identify the container among the following",
        answers: [
            { text: " body tag ", correct: false },
            { text: " select tag", correct: false },
            { text: " input tag", correct: false },
            { text: " both A & B", correct: true }
        ]
    },
    {
        question: "To get the current system date which of the following function is used in ASP?",
        answers: [
            { text: " CurrentDate() ", correct: false },
            { text: " getDate()", correct: false },
            { text: " Now()", correct: false },
            { text: " Date()", correct: true }
        ]
    },

]



// get dom  elements
let quiz = document.querySelector(".quiz");
let timer = document.querySelector("#timer");
const questionEL = document.getElementById("question");
const answerButtonsEL = document.getElementById("answer-buttons");
let userscore = document.querySelector("#user-score")
let next = document.querySelector("#next-btn");

//quiz starting state

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    userscore = 0;
    next.innerHTML = "Next";
    showQuestions();
    // timerDisplay();
}

function showQuestions() {
    resetState();
    let currentQuestion = questionArr[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEL.innerHTML = questionNo + ". " + currentQuestion.question; // showing questions
    // console.log(currentQuestion.question);
    // console.log(currentQuestion.answers);

    currentQuestion.answers.forEach(function (ans) {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        // console.log(ans.text);
        button.classList.add("btn");
        answerButtonsEL.appendChild(button);

        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectAnswer);  // calling selectanswer function
    });

}
showQuestions();

//reset
function resetState() {
    next.style.visibility = "hidden";
    while (answerButtonsEL.firstChild) {
        answerButtonsEL.removeChild(answerButtonsEL.firstChild);
    }
}

//select answer
function selectAnswer(e) {
    console.log(e.target);
    const selectbtn = e.target;
    const isCorrect = selectbtn.dataset.correct === "true";

    if (isCorrect) {
        selectbtn.classList.add("correct");
        userscore++;
    }
    else {
        selectbtn.classList.add("incorrect");
    }

    Array.from(answerButtonsEL.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.visibility = "visible";

}

//score 
function showScore() {
    resetState();
    questionEL.innerHTML = `your scored ${userscore} out of ${questionArr.length}!`;
    next.innerHTML = "Play Again"
    next.style.visibility = "visible";
}

//next button
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionArr.length) {
        showQuestions();
    }
    else {
        showScore()

    }
}

//Go to next question
next.addEventListener("click", function () {
    if (currentQuestionIndex < questionArr.length) {
        handleNextButton();
        // timerDisplay();
    }
    else {
        startQuiz();

    }
})

startQuiz();




//timer
function timerDisplay() {
    count = 150;
    countdown = setInterval(() => {
        count--;
        console.log(count)
        timer.innerHTML = `${count}s`

        if (count == 0) {
            clearInterval(countdown)
            showScore();
        }
    }, 1000);
}
timerDisplay();