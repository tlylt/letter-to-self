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
var isOpenDate = new Date().getFullYear() == 2021;
var btn = document.getElementById("btn");
if (isOpenDate) {
  btn.innerHTML = "VIEW";
}
btn.addEventListener("click", activate);

function activate() {
  let isOpenDate = new Date().getFullYear() == 2021;
  if (!isOpenDate) {
    send();
    btn.setAttribute("disabled", "true");
  } else {
    view();
  }
}
