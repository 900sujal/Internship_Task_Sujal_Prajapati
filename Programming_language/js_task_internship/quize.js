var currentQuestion = 1;
var score = 0;

function main() {
  var correct_ans = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'A'
  };

  // Check answer for the current question
  var answer = document.querySelector('input[name="' + currentQuestion + '"]:checked');
  if (answer && answer.value === correct_ans[currentQuestion]) {
    score++;
  }

  // Hide the current question and show the next one
  document.getElementById("que" + currentQuestion).style.display = "none";

  // Show the next question
  currentQuestion++;
  if (currentQuestion <= 5) {
    document.getElementById("que" + currentQuestion).style.display = "block";

  } else {
    // Display the score when all questions are answered
    var result = `Your score is ${score} out of 5`;
    document.getElementById("result").innerText = result;
        // Hide the "Continue" button after score display
  document.getElementById("Continue").style.display = "none";
  }

}


