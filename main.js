// =========================== function 1 =======================


// function text() {
//     var text = document.querySelectorAll("h2");
//     text.forEach((e)=>{
//         e.innerText="Hello from h1";
//     }) 
//     };
//     text();


// ============================================================


// =========================== Add Student 2 ==================

// const searchLabel = document.querySelector("input");
// const okButton = document.querySelector("#ok");
// const addStudentBtn = document.querySelector("#addStudent");
// const studentsContainer = document.querySelector(".students");
// const deleteStudentBtn = document.querySelectorAll(".close");

// let studentNumber = 1;

// let deleteStd = function (e) {
//   e.target.parentElement.remove();
// };

// let addStudent = function (e) {
//   let studentName = prompt("Enter Your name");

//   if (!studentName) return;

//   let studentDiv = document.createElement("div");

//   studentDiv.innerHTML = `<div class="student" >
//         <p class="name">${studentName}</p>
//          <button class="close">❌</button>
//       </div> <br/>`;

//   studentsContainer.appendChild(studentDiv);

//   document
//     .querySelectorAll(".close")
//     [document.querySelectorAll(".close").length - 1].addEventListener(
//       "click",
//       deleteStd
//     );
// };

// okButton.addEventListener("click", function (e) {
//   let input = searchLabel.value;
//   let nameP = document.querySelectorAll(".name");

//   if (!input) return;

//   nameP.forEach(function (name) {
//     if (name.innerHTML !== input) {
//       name.parentElement.classList.add("hidden");
//     }
//   });
// });

// searchLabel.addEventListener("keyup", function () {
//   if (!searchLabel.value) {
//     document.querySelectorAll(".student").forEach(function (std) {
//       std.classList.remove("hidden");
//     });
//   }
// });

// addStudentBtn.addEventListener("click", addStudent);



// ============================================================


// =========================== clock 3 =======================


function clock() {
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var clockk = document.getElementById("clockk");
    var timing = "AM";

    if (hh == 0) {
        hh = 12;

    }

    if (hh>12) {
        hh-=12;
        var timing = "PM";
    }

    hh = (hh<10)? "0"+hh :hh
    mm = (mm<10)? "0"+mm :mm
    ss = (ss<10)? "0"+ss :ss
    clockk.innerHTML= hh+":"+mm+":"+ss+" "+timing;
}

var repeat = setInterval(clock,1000)


// =================================================




// ====================== Timer ===========================


// function timer() {
//     var RealDate = new Date();
//     var date = new Date("sep 29 22 00:00:00");

//     // var hh= date.getHours();
//     // var mm= date.getMinutes();
//     // var ss= date.getSeconds();

//     var demo = document.getElementById("demo");


//     var timer = date - RealDate;
//     var days = Math.floor(timer / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((timer % (1000 * 60)) / 1000);


//     hours = (hours < 10) ? "0" + hours : hours
//     minutes = (minutes < 10) ? "0" + minutes : minutes
//     seconds = (seconds < 10) ? "0" + seconds : seconds

//     demo.innerHTML = days + "d :" + hours + "h :" + minutes + "m:" + seconds + "s";

// }

// var intval = setInterval(timer, 1000)
// timer()




// ========================================================
