let question = document.getElementById("question");
let choices = Array.from(document.getElementsByClassName("choice-element"));

// Variables
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [
    {
        question: "¿Cuantos meses tienen 28 días?",
        choice1: "Julio",
        choice2: "Febrero",
        choice3: "Todos",
        choice4: "Ninguno",
        answer: 3
    },
    {
        question: "A es padre de B, pero B no es el hijo de A. ¿Quién es B?",
        choice1: "La hija",
        choice2: "La abuela",
        choice3: "La vecina del 5º",
        choice4: "El gato",
        answer: 1
    },
    {
        question: "¿De qué color son las mangas del chaleco rojo de Nelson?",
        choice1: "Rojo",
        choice2: "Azul",
        choice3: "Ninguno",
        choice4: "Verde",
        answer: 3
    },
    {
        question: "El padre de Clara tiene 5 hijas: Jana, Jena, Jina, Jona y…",
        choice1: "Lidia",
        choice2: "Juna",
        choice3: "Manolo",
        choice4: "Clara",
        answer: 4
    },
    {
        question: "París empieza por P, ¿y termina por..?",
        choice1: "S",
        choice2: "A",
        choice3: "T",
        choice4: "I",
        answer: 3
    },
    {
        question: "¿Qué animal siempre está lleno?",
        choice1: "Perro",
        choice2: "Elefante",
        choice3: "Ballena",
        choice4: "Camello",
        answer: 3
    },
    {
        question: "¿Cuántos animales metió Moisés en el Arca?",
        choice1: "100",
        choice2: "Ninguno",
        choice3: "Todos menos el murcielago de Wuhan",
        choice4: "5.000",
        answer: 2
    },
    {
        question: "Si tengo diez peces en la pecera y tres se me ahogan, ¿cuantos quedan?",
        choice1: "Ninguno",
        choice2: "7",
        choice3: "10",
        choice4: "5",
        answer: 3
    },
    {
        question: "Si un gallo pone un huevo en lo alto de un campanario… ¿hacia qué lado caerá?",
        choice1: "Hacia delante",
        choice2: "Hacia un lado",
        choice3: "Ninguno",
        choice4: "Hacia atrás",
        answer: 3
    },
    {
        question: "¿Cúal es la única persona que nunca ha perdido un partido de fútbol?",
        choice1: "El árbitro",
        choice2: "Los espectadores",
        choice3: "Er beti, ole ahí mi beti bueno",
        choice4: "Messi",
        answer: 3
    },
    {
        question: "¿Cuál es el día más largo de la semana?",
        choice1: "Lunes",
        choice2: "Miercoles",
        choice3: "Todos",
        choice4: "Ninguno",
        answer: 2
    },
    {
        question: "Si durante una carrera adelantas a quien va segundo, ¿en qué posición estás?",
        choice1: "Primero",
        choice2: "Segundo",
        choice3: "Tercero",
        choice4: "Último",
        answer: 2
    }
]

// Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 6;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("./end.html");
    }

    questionCounter++;
    let questionIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        let number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        let selectedChoice = e.target;
        let selectedAnswer = selectedChoice.dataset["number"];
        
        let classToApply = "incorrect";
        if(selectedAnswer == currentQuestion.answer){
            classToApply = "correct";
        }

        selectedChoice.closest(".choice-container").classList.add(classToApply);
        setTimeout(()=> {
            selectedChoice.closest(".choice-container").classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    })
});



startGame();