const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Which planet is known as the hot Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Venus"
    },
    {
        question: "Which planet is known as the Coldest Planet?",
        options: ["Mars", "Venus", "Jupiter", "Uranus"],
        answer: "Uranus"
    },
    {
        question: "Which planet is known as the blue Planet?",
        options: ["Mars", "Earth", "Jupiter", "Uranus"],
        answer: "Earth"
    },
    // Add more questions as needed
];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.classList.add("option-btn");
        optionElement.addEventListener("click", () => selectAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

function selectAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resultElement.textContent = `Your score: ${score} out of ${quizData.length}`;
    submitButton.style.display = "none";
}

// Show first question when page loads
showQuestion();
