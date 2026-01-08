let timeLeft = 60;

let timer = setInterval(() => {
  document.getElementById("timer").innerText =
    "Time Left: " + timeLeft + " seconds";

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer);
    submitTest();
  }
}, 1000);

function submitTest() {
  clearInterval(timer);

  let score = 0;

  if (document.querySelector('input[name="q1"]:checked')?.value === "30") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "JavaScript") score++;
  if (document.querySelector('input[name="q3"]:checked')?.value === "HyperText Markup Language") score++;
  if (document.querySelector('input[name="q4"]:checked')?.value === "Styling") score++;
  if (document.querySelector('input[name="q5"]:checked')?.value === "Programming Language") score++;

  document.getElementById("result").innerText =
    "Your Score: " + score + " / 5";
}
