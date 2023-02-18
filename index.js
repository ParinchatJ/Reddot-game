// กดปุ่มแล้วเพิ่มทีละ 1
// มีนาฬิกานับถอยหลัง แบ่งเป็นด่านๆ (แบ่งหน้าก็ได้ มี 3 ระดับคือ ง่าย ปานกลาง ยาก แล้วกดเข้าไปมีนาฬิกาที่เวลาลดลงเรืื่อยๆไรงี้)
// ถ้ากดได้ทันตามที่กำหนด ภายใต้เวลาที่กำหนด ก็ขั้นชนะไรงี้
// สุ่มเวลาไหม ?
// * ลองไปดูว่าแต่ง alert ยังไง

let seconds = randomMath(5, 11)
let count = 0;

// DOM
let buttonTimer = document.querySelector(".startGame");
let buttonReset = document.querySelector(".resetGame");
let buttonCount = document.querySelector(".countGame");
let displayTime = document.getElementById("counter");
let displayCount = document.querySelector(".red-dot p");
let displayCountBox = document.querySelector(".red-dot")

buttonReset.style.display = "none";
buttonCount.style.display = "none";

buttonTimer.addEventListener("click", (event) => {
  buttonTimer.style.display = "none";
  buttonCount.style.display = "block";
  buttonReset.style.display = "none";

  let counter = setInterval(() => {
    displayTime.innerHTML = seconds;
    seconds--;
    if (seconds <= -1) {
      clearInterval(counter);
      displayTime.innerHTML = "TIME OUT!";

      // change button to reset
      if (displayTime.innerText === "TIME OUT!") {
        buttonCount.style.display = "none";
        buttonReset.style.display = "block";

        // กำหนดให้ alert ผลลัพธ์ และมีปุ่ม refresh 
        if (count >= 0 && count <= 60) {
          alert(`\nYour point ${count}\nพยายามเข้า`)
        } else if (count > 60) {
          alert(`\nYour point ${count}\nYou WIN!`)
        }

      }
    }
  }, 1000);

  if ((buttonCount.style.display = "block")) {
    buttonCount.addEventListener("click", (e) => {
      displayCount.innerText = count++;
    });
  }
});

// click to refresh
function refresh(){
  window.location.reload();
}

// random time
function randomMath(min, max) {
  return Math.floor(Math.random()* (max-min) + min)
}

// console.log(typeof count)


// displayCountBox.style.backgroundColor = "red";