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

  let q1 = document.querySelector('input[name="q1"]:checked');
  let q2 = document.querySelector('input[name="q2"]:checked');

  if (q1 && q1.value === "30") score++;
  if (q2 && q2.value === "JavaScript") score++;

  document.getElementById("result").innerText =
    "Your Score: " + score + " / 2";
}
