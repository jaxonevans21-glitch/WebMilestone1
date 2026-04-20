// this is the quiz function
function gradeQuiz() {
    var score = 0;
    var total = 5;
    var results = "";

    // Question 1
    var blank1 = document.getElementById("blank1").value.toLowerCase().trim();
    var q1Correct = "hypertext transfer protocol";

    if (blank1 === q1Correct) {
        score++;
        results += "<p class='correct'>1. Correct - Answer: Hypertext Transfer Protocol</p>";
    } else {
        results += "<p class='wrong'>1. Incorrect - Correct Answer: Hypertext Transfer Protocol</p>";
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "b") {
        score++;
        results += "<p class='correct'>2. Correct - Answer: HTTP/0.9</p>";
    } else {
        results += "<p class='wrong'>2. Incorrect - Correct Answer: HTTP/0.9</p>";
    }

    // Question 3
    var q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "b") {
        score++;
        results += "<p class='correct'>3. Correct - Answer: It kept connections open</p>";
    } else {
        results += "<p class='wrong'>3. Incorrect - Correct Answer: It kept connections open</p>";
    }

    // Question 4
    var q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "c") {
        score++;
        results += "<p class='correct'>4. Correct - Answer: HTTP/3</p>";
    } else {
        results += "<p class='wrong'>4. Incorrect - Correct Answer: HTTP/3</p>";
    }

    // Question 5
    var checks = document.querySelectorAll('input[name="q5"]:checked');
    var selected = [];

    for (var i = 0; i < checks.length; i++) {
        selected.push(checks[i].value);
    }

    selected.sort();

    var correctAnswers = ["multiplexing", "persistent", "quic"];
    correctAnswers.sort();

    if (JSON.stringify(selected) === JSON.stringify(correctAnswers)) {
        score++;
        results += "<p class='correct'>5. Correct - Answers: Persistent Connections, Multiplexing, QUIC</p>";
    } else {
        results += "<p class='wrong'>5. Incorrect - Correct Answers: Persistent Connections, Multiplexing, QUIC</p>";
    }

    // Pass or fail
    var finalResult = "";
    if (score >= 3) {
        finalResult = "<h2 class='pass'>Pass</h2>";
    } else {
        finalResult = "<h2 class='fail'>Fail</h2>";
    }

    document.getElementById("results").innerHTML =
        finalResult +
        "<h3>Total Score: " + score + " / " + total + "</h3>" +
        results;
}

// This function clears quiz results
function resetQuiz() {
    document.getElementById("results").innerHTML = "";
}