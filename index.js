let climber = document.querySelector(".climber");
let box = document.querySelector(".box");
let flag = document.createElement("img");
let button = document.querySelector(".button");
let input = document.querySelector(".input");
let text = document.querySelector(".text");
let counter = document.querySelector(".counter");
let rock = document.querySelector(".rock");
let head = document.querySelector(".head");
flag.className = ".flag";
flag.src = "./img/win.gif";
flag.style.top = "-125%";
flag.style.left = "83%";
flag.style.width = "5%";
flag.style.position = "relative";
let position = [
  {
    top: "-18%",
    left: "9%",
  },

  {
    top: "-40%",
    left: "23%",
  },
  {
    top: "-64%",
    left: "37%",
  },
  {
    top: "-68%",
    left: "52%",
  },
  {
    top: "-76%",
    left: "68%",
  },
  {
    top: "-96%",
    left: "83%",
  },
];
let i = 0;
let count = 0;
let positionRock = ["10%", "22%", "33%", "46%", "60%", "73%"];
for (let i = 1; i < position.length; i += 1) {
  let rockNew = rock.cloneNode(true);
  rockNew.style.left = positionRock[i];
  rockNew.style["animation-duration"] = i + "s";
  head.append(rockNew);
}
// if (пока не знаю как решить) {
//   let gameOver = document.createElement("div");
//   gameOver.style.position = "relative";
//   gameOver.style.top = "-100%";
//   gameOver.innerText = "Game Over";
//   gameOver.style.fontSize = "170px";
//   box.append(gameOver);
// }
document.addEventListener("keydown", (e) => {
  if (e.key === "x") {
    i += 1;
    climber.style.top = position[i].top;
    climber.style.left = position[i].left;

    if (i === 5) {
      box.append(flag);
      count += 1;
      counter.innerText = count;
    }
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "z") {
    i = i - 1;
    climber.style.top = position[i].top;
    climber.style.left = position[i].left;
    if (i < 5) {
      flag.remove();
    }
  }
});
button.addEventListener("click", () => {
  text.innerText = input.value;
  input.value = "";
});
