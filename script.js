document.getElementById("submit-quiz").addEventListener("click", function () {

    let score = 0;
    let totalQuestions = 5;   // change this number if you add more questions

    for (let i = 1; i <= totalQuestions; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);

        if (answer && answer.value === "correct") {
            score++;
        }
    }

    document.getElementById("result").innerText =
        "Your Score: " + score + " / " + totalQuestions;
});
