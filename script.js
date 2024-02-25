function Questions(){
    const questions = [
        {
            question: "Which of the following can read and render HTML web pages ",
            answers: [
                {text: "Server", correct: false},
                {text: "Head Tak", correct: false},
                {text: "Web Browser", correct: true},
                {text: "Empty", correct: false}
            ] 
        },
        {
            question: "The latest HTML standard is ",
            answers: [
                {text: "HTML 4.0", correct: false},
                {text: "HTML 5.0", correct: true},
                {text: "XML", correct: false},
                {text: "SGML", correct: false}
            ] 
        },
        {
            question: "Why were cookies designed? ",
            answers: [
                {text: "for server side programming", correct: true},
                {text: "for client side programming", correct: false},
                {text: "both a & b", correct: false},
                {text: "None", correct: false}
            ] 
        },
        {
            question: "What are variables used in JavaScript programs ",
            answers: [
                {text: "Varying Randomly", correct: false},
                {text: "Storing numbers , dates, and other values", correct: true},
                {text: "Used as header files", correct: false},
                {text: "None", correct: false}
            ] 
        },
        {
            question: "Identify the incorrect HTML tag among the following ",
            answers: [
                {text: "<input>", correct: false},
                {text: "<select>", correct: false},
                {text: "<list>", correct: true},
                {text: "<textarea>", correct: false}
            ] 
        },
        {
            question: "Full form of WWWC is",
            answers: [
                {text: "World wide web community", correct: false},
                {text: "World wide websites community", correct: false},
                {text: "World wide websites consortium", correct: false},
                {text: "World wide web consortium", correct: true}
            ] 
        },
        {
            question: " A website is a _______  cookie.",
            answers: [
                {text: "Volatile", correct: false},
                {text: "Transient", correct: true},
                {text: "inTransient", correct: false},
                {text: "Non-Volatile", correct: false}
            ] 
        },
        {
            question: " On which model is www based upon",
            answers: [
                {text: "client-server ", correct: true},
                {text: "local server", correct: false},
                {text: "3 tier", correct: false},
                {text: "None", correct: false}
            ] 
        },
        {
            question: " Identify the container among the following",
            answers: [
                {text: " <body> ", correct: false},
                {text: " <select>", correct: false},
                {text: " <input>", correct: false},
                {text: " both A & B", correct: true}
            ] 
        },
        {
            question: "To get the current system date which of the following function is used in ASP?",
            answers: [
                {text: " CurrentDate() ", correct: false},
                {text: " getDate()", correct: false},
                {text: " Now()", correct: false},
                {text: " Date()", correct: true}
            ] 
        }, 
    
    ]
}
Questions();

let quiz = document.querySelector(".quiz")