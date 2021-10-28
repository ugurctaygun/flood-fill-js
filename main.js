const fillArea = document.getElementById("fill-area");
const colorPicker = document.getElementById("colorpicker");
let pickedColor;

let areaSize = 64;
let area = new Array(areaSize);
let randomNumber = Math.floor(Math.random() * 1000);

for (let i = 0; i < area.length; i++) {
  area[i] = Array.from(Array(areaSize).fill(randomNumber * i));
}

function findPixel(target) {
  for (let i = 0; i < area.length; i++) {
    let selectedPixel;
  }
}

colorPicker.addEventListener("change", (e) => {
  pickedColor = e.target.value;
});

fillArea.addEventListener("click", (e) => {
  findPixel(e.target.id);
});

function createPixel(arrIndex) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.id = arrIndex;
  fillArea.appendChild(pixel);
}

function createCanvas() {
  for (let i = 0; i < area.length; i++) {
    area[i].map((item) => createPixel(item));
  }
}

createCanvas();
