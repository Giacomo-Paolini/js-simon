let containerNum = document.getElementById("containerNumbers");
const numbers = numberGenerator(5);

function boxGenerator(classe, numBox) {
    containerNum.innerHTML = "";
    for (let i = 0; i <= numBox-1; i++) {
        const box = document.createElement("div");
        box.classList.add(classe);
        containerNum.appendChild(box);
        box.innerText = numbers[i];
    }
}

function numberGenerator(num) {
    const numbers = [];
    while (numbers.length < num) {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}

btn.addEventListener("click", function() {
    boxGenerator("box", 5, numbers);
    setTimeout(hide, 29.5 * 1000);
    setTimeout(timer, 30 * 1000);
})

function hide() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(function(box) {
        box.classList.add("hidden");
    });
}

function timer() {
    const enteredNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const enteredNum = prompt("Inserisci un numero alla volta di quelli visti precedentemente");
        enteredNumbers.push(parseInt(enteredNum));
    }

    let isCorrect = true;
    for (let i = 0; i < enteredNumbers.length; i++) {
        if (numbers.indexOf(enteredNumbers[i]) === -1) {
            isCorrect = false;
            break;
        }
    }
    if (isCorrect) {
        alert("Complimenti, hai indovinato tutti i numeri!");
    } else {
        alert("Hai sbagliato! Il gioco finisce qui.");
    }
}