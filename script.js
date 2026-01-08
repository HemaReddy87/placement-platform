let timeLeft = 60;
let timer = document.getElementById("time");

let countdown = setInterval(() => {
  timeLeft--;
  timer.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    submitQuiz();
  }
}, 1000);

document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();
  submitQuiz();
});

function submitQuiz() {
  clearInterval(countdown);

  let score = 0;

  let q1 = document.querySelector('input[name="q1"]:checked');
  let q2 = document.querySelector('input[name="q2"]:checked');

  if (q1 && q1.value === "30") score++;
  if (q2 && q2.value === "JavaScript") score++;

  document.getElementById("result").innerText =
    "Your Score: " + score + "/2";
}
