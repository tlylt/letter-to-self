function send() {
  let myStorage = window.localStorage;
  let myLetter = document.getElementById("letter").value;
  myStorage.setItem("myLetter", myLetter);
}

function view() {
  let myStorage = window.localStorage;
  let myLetter = document.getElementById("letter");
  myLetter.value = myStorage.getItem("myLetter");
}

function activate() {
  if (!isOpenDate) {
    send();
    btn.setAttribute("disabled", "true");
    btn.innerHTML = "DONE";
  } else {
    view();
  }
}

// setup
// var isOpenDate = new Date().getFullYear() >= 2021;
var isOpenDate = new Date().getMinutes() >= 15;
var btn = document.getElementById("btn");

// update button
if (isOpenDate) {
  btn.innerHTML = "VIEW";
}
btn.addEventListener("click", activate);
