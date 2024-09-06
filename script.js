let display = document.getElementById("display");
let expression = "";

function clickButton(button) {
  let buttonText = button.textContent;
  if (buttonText === "=") {
    try {
      let result = eval(expression);
      if (result == 11) {
        display.value = "missu HAHAHAHHAH";
      } else {
        display.value = result;
      }
    } catch (e) {
      alert("Error: " + e.message);
    }
  } else {
    expression += buttonText;
    display.value = expression;
  }
}

function deleteLastChar() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function clearEntry() {
  expression = "";
  display.value = "";
}