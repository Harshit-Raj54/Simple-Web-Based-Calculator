let buttons = document.querySelectorAll(".btn");
let display = document.querySelector("#display");
let equal = document.querySelector(".btn1");

const operators = ["+", "-", "/", "X", "%", "^"];

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let value = btn.getAttribute("id");
        let lastChar = display.innerText.slice(-1);

        // AC
        if (value === "AC") {
            display.innerText = "";
        }
        // DEL
        else if (value === "d") {
            display.innerText = display.innerText.slice(0, -1);
        }
        // Multiply button (* → X)
        else if (value === "*") {
            if (lastChar !== "X") {
                display.innerText += "X";
            }
        }
        // Prevent double operators (** ++ --)
        else if (operators.includes(value) && operators.includes(lastChar)) {
            return;
        }
        // Normal input
        else {
            display.innerText += value;
        }
    });
});

equal.addEventListener("click", () => {
    try {
        let expression = display.innerText;

        // Convert display symbols to JS operators
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
