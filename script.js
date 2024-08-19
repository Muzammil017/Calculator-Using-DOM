document.addEventListener("DOMContentLoaded", function () {
    
    let display = document.getElementById("display");
    let buttons = Array.from(document.getElementsByClassName("btn"));
    let currentInput = "";
    let operator = "";
    let firstValue = "";
    let secondValue = "";

    buttons.map(button => {
        button.addEventListener("click", (e) => {
            let value = e.target.getAttribute("data-value");

            if (value === "C") {
                currentInput = "";
                operator = "";
                firstValue = "";
                secondValue = "";
                display.textContent = "0";
                return;
            }

            if (value === "=") {
                secondValue = currentInput;
                display.textContent = eval(`${firstValue}${operator}${secondValue}`);
                currentInput = display.textContent;
                operator = "";
                return;
            }

            if (["+", "-", "*", "/"].includes(value)) {
                operator = value;
                firstValue = currentInput;
                currentInput = "";
                if (operator !== "") {
                    secondValue = currentInput;
                    currentInput = eval(`${firstValue}${operator}${secondValue}`);
                    display.textContent = currentInput;
                }
                
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
