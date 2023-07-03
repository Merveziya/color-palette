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
  var color1 = myColors[0].toLowerCase();
  var color2 = myColors[1].toLowerCase();

  if (
    (color1 === "red" && color2 === "blue") ||
    (color1 === "blue" && color2 === "red")
  ) {
    changeColor("magenta");
  } else if (
    (color1 === "yellow" && color2 === "red") ||
    (color1 === "red" && color2 === "yellow")
  ) {
    changeColor("orange");
  } else if (
    (color1 === "yellow" && color2 === "blue") ||
    (color1 === "blue" && color2 === "yellow") ||
    (color1 === "green" && color2 === "green")
  ) {
    changeColor("green");
  } else if (
    (color1 === "red" && color2 === "green") ||
    (color1 === "green" && color2 === "red")
  ) {
    changeColor("#654321");
  } else if (
    (color1 === "blue" && color2 === "green") ||
    (color1 === "green" && color2 === "blue")
  ) {
    changeColor("cyan");
  } else if (
    (color1 === "yellow" && color2 === "green") ||
    (color1 === "green" && color2 === "yellow")
  ) {
    changeColor("#90ee90");
  } else if (color1 === "red" && color2 === "red") {
    changeColor("red");
  } else if (color1 === "blue" && color2 === "blue") {
    changeColor("blue");
  } else if (color1 === "yellow" && color2 === "yellow") {
    changeColor("yellow");
  } else {
    changeColor("black");
    el_down.innerHTML = "You entered the wrong color pair. TRY AGAIN!!!";
  }
}
