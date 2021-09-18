
let item = document.querySelectorAll(".key");

function f1(e) {
  for (let i = 0; i < item.length; i++) {
    if (e.code == item[i].getAttribute("data")) {
      item[i].classList.add("activeKeyboard");
      console.log(item[i]);
    } else if (e.getModifierState("CapsLock") == true) {
      document.querySelector(".capslock").style.background = "red";
    } else if (e.getModifierState("CapsLock") == false) {
      document.querySelector(".capslock").style.background = "#fff";
    }
  }
  console.log(e);
}
document.querySelector(".i-1").addEventListener("keydown", f1);

function f1_1(e) {
  for (let i = 0; i < item.length; i++) {
    if (e.code == item[i].getAttribute("data")) {
      item[i].classList.remove("activeKeyboard");
    }
  }
}
document.querySelector(".i-1").addEventListener("keyup", f1_1);

