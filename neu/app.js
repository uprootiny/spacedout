// Define an array of study materials with questions and answers
const studyMaterials = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What year was the American Revolution?", answer: "1776" },
  { question: "What is the chemical symbol for gold?", answer: "Au" },
  // Add as many questions and answers as you like
];

// Define a function to randomly select a study material from the array
function selectStudyMaterial() {
  return studyMaterials[Math.floor(Math.random() * studyMaterials.length)];
}

// Define a function to prompt the user with a question and accept their answer
function promptUser(studyMaterial) {
  const userAnswer = prompt(studyMaterial.question);
  if (userAnswer === studyMaterial.answer) {
    alert("Correct!");
    // Increase the studyMaterial's "nextReview" date by a day
    studyMaterial.nextReview = new Date(Date.now() + 24 * 60 * 60 * 1000);
  } else {
    alert("Incorrect. The correct answer is: " + studyMaterial.answer);
    // Decrease the studyMaterial's "nextReview" date by half a day
    studyMaterial.nextReview = new Date(Date.now() + 12 * 60 * 60 * 1000);
  }
}

// Define a function to check if a study material is due for review
function isDueForReview(studyMaterial) {
  return studyMaterial.nextReview <= new Date();
}

// Continuously loop through the study materials and prompt the user with due questions
while (true) {
  const studyMaterial = selectStudyMaterial();
  if (isDueForReview(studyMaterial)) {
    promptUser(studyMaterial);
  }
}
