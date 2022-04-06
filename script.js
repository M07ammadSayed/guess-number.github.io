window.onload = function () {
    localStorage.getItem("High-score");
    document.querySelector("section.high-score div span").innerHTML = localStorage.getItem("High-score");
    if (localStorage.getItem("High-score") === null) {
        document.querySelector("section.high-score div span").innerHTML = "0";
    }
};

document.querySelector(".high-score div").addEventListener("dblclick", function () {
    localStorage.removeItem("High-score");
    document.querySelector("section.high-score div span").innerHTML = "0";
});

let sec = 119,
    countDiv = document.querySelector("div.tc div"),
    secondPass;

document.getElementById("start-game").onclick = function () {
    document.getElementById("splash").style.display = "none";

    let = countDown = setInterval(function () {
        "use strict";
        secondPass();
    }, 1000);

    function secondPass() {
        "use strict";

        let min = Math.floor(sec / 60),
            remSec = sec % 60;

        if (sec < 70 && sec > 59) {
            remSec = "0" + remSec;
        } else if (sec < 10) {
            remSec = "0" + remSec;
        }

        countDiv.innerHTML = "0" + min + ":" + remSec;

        if (sec > 0) {
            sec -= 1;
        } else {
            clearInterval(countDown);
            countDiv.innerHTML = "Timeout!";
        }
        
    };


    let p = prompt("Type your name:");

    if (p === null || p === "") {
        document.getElementById("name").innerHTML = "Anonymous" + "&#128566";
    } else if (p.length > 12) {
        alert(
            '"The number of letters that make up your name cannot exceed the number 12"'
        );

        document.getElementById("name").innerHTML = "Anonymous" + "&#128566";
    } else {
        document.getElementById("name").innerHTML = p + "&#128512";
    }

    alert('Notice: "Input must contain numbers > 0 & <= 10"');
    document.querySelector("div.tc div").style.padding = "10px";
    setInterval(function () {
        if (Number(document.getElementById("score").innerHTML) > Number(document.querySelector("div.hs div span").innerHTML)) {
            alert("Awesome!, High score");
            document.querySelector("div.hs div span").innerHTML =
                document.getElementById("score").innerHTML;
            localStorage.setItem(
                "High-score",
                document.querySelector("div.hs div span").innerHTML
            );
        }
        alert("Hurry! timeout");

        alert(
            "Your score is " +
                '"' +
                document.getElementById("score").innerHTML +
                '"'
        );

        let con3 = confirm("Try again?");

        if (con3 === true) {
            location.reload();
        } else {
            document.getElementById("ques").style.opacity = "0";

            document.getElementById("guess-button").style.pointerEvents =
                "none";

            document
                .getElementById("guess-field")
                .setAttribute("disabled", "disabled");
        }
    }, 119000);
};

let randomNumber = Math.floor(Math.random() * 10 + 1);

document.getElementById("guess-button").onclick = function () {
    let guessField = document.getElementById("guess-field").value,
        trueImg = document.getElementById("true"),
        falseImg = document.getElementById("false"),
        gameScore = document.getElementById("score");

    if (guessField == randomNumber) {
        document.getElementById("audio1").play();
        trueImg.style.display = "block";
        falseImg.style.display = "none";
        setTimeout(function () {
            trueImg.style.display = "none";
            falseImg.style.display = "none";
        }, 1200);
        gameScore.innerHTML = parseInt(gameScore.innerHTML) + 1;
        let secondRandomNumber = Math.floor(Math.random() * 10 + 1);
        randomNumber = secondRandomNumber;

    } else if (guessField == "") {
        alert("Guess field mustn't be empty.");

    } else if (guessField > 10 || guessField < 0) {
        alert("Guess field must contain numbers > 0 & <= 10");

    } else {
        document.getElementById("audio2").play();
        falseImg.style.display = "block";
        trueImg.style.display = "none";
        setTimeout(function () {
            falseImg.style.display = "none";
            trueImg.style.display = "none";
        }, 1200);
    }
    document.getElementById("guess-field").focus();

    this.style.pointerEvents = "none";

    setInterval(function () {
        document.getElementById("guess-button").style.pointerEvents = "auto";
    }, 1200);
};

document.getElementById("guess-field").addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("guess-button").click();
            document.getElementById("guess-button").setAttribute("disabled", "disabled");
            setInterval(function () {document.getElementById("guess-button").removeAttribute("disabled")}, 1200);
        }
});

new WOW().init();