let buttons = document.querySelectorAll(".btn");
let display = document.querySelector("#display");
let equal = document.querySelector(".btn1");

const operators = ["+", "-", "/", "X", "%", "^"];

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let value = btn.getAttribute("id");
        let lastChar = display.innerText.slice(-1);

        if (value === "AC") {
            display.innerText = "";
        }
        else if (value === "d") {
            display.innerText = display.innerText.slice(0, -1);
        }
        else if (value === "*") {
            if (lastChar !== "X") {
                display.innerText += "X";
            }
        }
        else if (operators.includes(value) && operators.includes(lastChar)) {
            return;
        }
        else {
            display.innerText += value;
        }
    });
});

equal.addEventListener("click", () => {
    try {
        let expression = display.innerText;

        expression = expression.replaceAll("X", "*");
        expression = expression.replaceAll("MOD", "%");
        expression = expression.replaceAll("^", "**");

        let result = eval(expression);

        if (result === Infinity || result === -Infinity) {
            display.innerText = "Math Error";
        } else {
            display.innerText = result;
        }

    } catch {
        display.innerText = "Error";
    }
});
