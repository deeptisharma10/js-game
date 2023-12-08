const playBtns = document.querySelectorAll(".play_btn");
let msg = document.getElementsByClassName("win_new");
let winnerName = document.querySelector("#winnerName");
let resetBtn = document.querySelectorAll(".reset_btn");
let confetti = document.querySelector(".confetti");

let turn0 = true;

let winPos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

function disabledBtn(status) {
  for (let btn of playBtns) {
    if(status === true){
        btn.disabled = true;
    } else{
        btn.innerText = "";
        btn.disabled = false;
        turn0 = true;
    }
    
  }
}

playBtns.forEach((playBtn) => {
  playBtn.addEventListener("click", () => {
    if (turn0) {
      playBtn.innerText = "O";
      turn0 = false;
    } else {
      playBtn.innerText = "X";
      turn0 = true;
    }
    playBtn.disabled = true;

    checkWinner();
  });
});

function checkWinner() {
  for (let winP of winPos) {
    let val1 = playBtns[winP[0]].innerText;
    let val2 = playBtns[winP[1]].innerText;
    let val3 = playBtns[winP[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        msg[0].classList.remove("hide");
        confetti.classList.remove("hide");
        winnerName.innerText = val1;
        disabledBtn(true);
    }
}
}
}

resetBtn.forEach((resetBt) => {
    resetBt.addEventListener("click", ()=>{
        disabledBtn(false);
        turn0 = true;
        if(!(msg[0].classList.contains("hide"))){
            msg[0].classList.add("hide");
            confetti.classList.add("hide");
            console.log('I AM CLICKED BY NEW Game')
        }
    });
});

// checkWinner();
