const inputValue = document.getElementById("user-input");
let lastOperator = "";

document.querySelectorAll(".calc-keys button").forEach(button => {
  button.addEventListener("click", (e) => {
    try {
      let lastValue = inputValue.innerText.substring(inputValue.innerText.length - 1, inputValue.innerText.length);
      if (!isNaN(lastValue) && e.target.innerHTML === "=") {
        inputValue.innerText = eval(inputValue.innerText.replace(/x/g, "*"));
        if (inputValue.innerText === "0") {
          inputValue.innerText = "";
        }
        lastOperator = "";
      } else if (e.target.innerHTML === "AC") {
        inputValue.innerText = "";
        lastOperator = "";
      } else if (e.target.innerHTML === "DEL") {
        inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
        if (inputValue.innerText.length == 0) {
          inputValue.innerText = "";
        }
        lastOperator = "";
      } else if (e.target.innerHTML === "sin") {
        inputValue.innerText = Math.sin(eval(inputValue.innerText.replace(/x/g, "*")));
        lastOperator = "";
      } else if (e.target.innerHTML === "cos") {
        inputValue.innerText = Math.cos(eval(inputValue.innerText.replace(/x/g, "*")));
        lastOperator = "";
      } else if (e.target.innerHTML === "tan") {
        inputValue.innerText = Math.tan(eval(inputValue.innerText.replace(/x/g, "*")));
        lastOperator = "";
      } else if (e.target.innerHTML === "sqrt") {
        inputValue.innerText = Math.sqrt(eval(inputValue.innerText.replace(/x/g, "*")));
        lastOperator = "";
      } else if (e.target.innerHTML === "pow") {
        inputValue.innerText = Math.pow(eval(inputValue.innerText.replace(/x/g, "*")), 2);
        lastOperator = "";
      } else if (e.target.innerHTML === "log") {
        inputValue.innerText = Math.log(eval(inputValue.innerText.replace(/x/g, "*")));
        lastOperator = "";
      } else if (e.target.innerHTML === "exp") {
        inputValue.innerText = Math.exp(eval(inputValue.innerText.replace(/x/g, "*")));
        lastOperator = "";
      } else if (e.target.innerHTML === "abs") {
        inputValue.innerText = Math.abs(eval(inputValue.innerText.replace(/x/g, "*")));
        lastOperator = "";
      } else if (e.target.innerHTML === "fact") {
        inputValue.innerText = factorial(eval(inputValue.innerText.replace(/x/g, "*")));
        lastOperator = "";
      } else if (e.target.innerHTML === "mod") {
        inputValue.innerText = eval(inputValue.innerText.replace(/x/g, "*")) % 10;
        lastOperator = "";
      } else if (e.target.innerHTML === "x") {
        inputValue.innerText += "x";
        lastOperator = "";
      } else if (e.target.innerHTML === "+" || e.target.innerHTML === "-" || e.target.innerHTML === "*" || e.target.innerHTML === "/") {
        if (lastOperator === e.target.innerHTML) {
          alert("Error: Multiple same operators not allowed");
          inputValue.innerText = "0";
        } else {
          inputValue.innerText += e.target.dataset.val;
          lastOperator = e.target.innerHTML;
        }
      } else {
        if (inputValue.innerText === "0") {
          inputValue.innerText = e.target.dataset.val;
        } else {
          inputValue.innerText += e.target.dataset.val;
        }
      }
    } catch (err) {
      inputValue.innerText = "0";
      if (err instanceof SyntaxError) {
        alert("Invalid input: " + err.message);
      } else if (err instanceof TypeError) {
        alert("Invalid operation: " + err.message);
      } else {
        alert("An error occurred: " + err.message);
      }
    }
  });
});

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}