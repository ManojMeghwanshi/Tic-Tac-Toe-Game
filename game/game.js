let boxes = document.querySelectorAll(".box");
let alertmsg = document.querySelector("#alert");
let alertcont = document.querySelector(".alert-container");
let newbtn = document.querySelector("#new-btn");
let resetbtn = document.querySelector("#reset-btn");
let exitbtn1 = document.querySelector("#exit1");
let exitbtn2 = document.querySelector("#exit2");
let alertcont2 = document.querySelector(".alert-container2");

//varible are use to change trun of player
let turn = true;

// array of ways to Win game
const winways = [
  // horizontal win patterns
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical win patterns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Cross Win patterns
  [0, 4, 8],
  [6, 4, 2],
];

// this function work to exit from game
const exit = () => {
  window.location.href = "../index.html";
};

exitbtn1.addEventListener("click", exit);
exitbtn2.addEventListener("click", exit);

const enableboxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor = "#FEE715";
  });
  count = 0;
  turn = true;
};

const gamedraw = () => {
  alertmsg.innerText = `Game Draw !`;
  alertcont.classList.remove("hide");
  alertcont2.classList.add("hide");
};

const newgame = () => {
  enableboxes();
  alertcont2.classList.remove("hide");
  alertcont.classList.add("hide");
};

const showwin = (val1) => {
  alertmsg.innerText = `Winner is ${val1}`;
  alertcont.classList.remove("hide");
  alertcont2.classList.add("hide");
  enableboxes();
};

const checkwin = (val) => {
  for (let box of winways) {
    let val1 = boxes[box[0]].innerText;
    let val2 = boxes[box[1]].innerText;
    let val3 = boxes[box[2]].innerText;
    if (val1 && val2 && val3) {
      if (val1 === val2 && val2 === val3) {
        showwin(val1);
        return true;
      }
    }
  }
};

let count = 0;
boxes.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (!turn) {
      element.innerText = "X";
      element.style.color = "red";
      turn = true;
    } else {
      element.innerText = "O";
      element.style.color = "black";
      turn = false;
    }
    element.disabled=true
    let winner = checkwin(element);
    count++;
    if (!winner && count == 9) {
      count = 0;
      gamedraw();
    }
  });
});

const reset = () => {
  enableboxes();
};
resetbtn.addEventListener("click", reset);
newbtn.addEventListener("click", newgame);
