const myColors = ["", ""];

function renderColors() {
  const colorContainer = document.getElementById("color-container");
  colorContainer.innerHTML = "";
  for (let i = 0; i < 2; i++) {
    const color = document.createElement("span");
    color.textContent = myColors[i];
    colorContainer.append(color);
  }
}

renderColors();

const unshiftBtn = document.getElementById("unshift-btn");
unshiftBtn.addEventListener("click", function () {
  const colorInput = document.getElementById("color-input");
  if (colorInput.value) {
    myColors.unshift(colorInput.value);
    colorInput.value = "";
    renderColors();
  }
});

const popBtn = document.getElementById("pop-btn");
popBtn.addEventListener("click", function () {
  myColors.pop();
  renderColors();
});

const shiftBtn = document.getElementById("shift-btn");
shiftBtn.addEventListener("click", function () {
  myColors.shift();
  renderColors();
});
var el_up = document.getElementById("GFG_UP");
var el_down = document.getElementById("GFG_DOWN");
var str = "Click on button to change the background color:";

el_up.innerHTML = str;

function changeColor(color) {
  document.body.style.background = color;
}

function gfg_Run() {
  if (
    (myColors[1] == "red" && myColors[0] == "blue") ||
    (myColors[0] == "red" && myColors[1] == "blue")
  ) {
    changeColor("magenta");
  } else if (
    (myColors[1] == "yellow" && myColors[0] == "red") ||
    (myColors[0] == "yellow" && myColors[1] == "red")
  ) {
    changeColor("orange");
  } else if (
    (myColors[1] == "yellow" && myColors[0] == "blue") ||
    (myColors[0] == "yellow" && myColors[1] == "blue") ||
    (myColors[0] == "green" && myColors[1] == "green")
  ) {
    changeColor("green");
  } else if (
    (myColors[1] == "red" && myColors[0] == "green") ||
    (myColors[0] == "red" && myColors[1] == "green")
  ) {
    changeColor("#654321");
  } else if (
    (myColors[1] == "blue" && myColors[0] == "green") ||
    (myColors[0] == "blue" && myColors[1] == "green")
  ) {
    changeColor("cyan");
  } else if (
    (myColors[1] == "yellow" && myColors[0] == "green") ||
    (myColors[0] == "yellow" && myColors[1] == "green")
  ) {
    changeColor("#90ee90");
  } else if (myColors[1] == "red" && myColors[0] == "red") {
    changeColor("red");
  } else if (myColors[1] == "blue" && myColors[0] == "blue") {
    changeColor("blue");
  } else if (myColors[1] == "yellow" && myColors[0] == "yellow") {
    changeColor("yellow");
  } else {
    changeColor("black");
    el_down.innerHTML = "You entered wrong color pair. TRY AGAIN!!!";
  }
}
