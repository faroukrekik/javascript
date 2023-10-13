var minus_buttons = document.querySelectorAll(".minus");
var plus_buttons = document.querySelectorAll(".plus");
var BTN_like = document.querySelectorAll(".like");
var btn_delete = document.querySelectorAll(".delete");

function dec(e) {
  var clickedbutton = e.target;
  var div = clickedbutton.parentElement;
  var paragraph = div.querySelector("p");
  var value = Number(paragraph.innerHTML);
  if (value > 0) {
    value--;
  }
  paragraph.innerHTML = value;
  var td = div.parentElement;
  var tr = td.parentElement;
  var up = tr.querySelector(".unitPrice");

  var p = tr.querySelector(".price");
  p.innerHTML = value * Number(up.innerHTML);
  calcul_sum();
}

for (let i = 0; i < minus_buttons.length; i++) {
  minus_buttons[i].addEventListener("click", dec);
}

function inc(e) {
  var clickedbutton = e.target;
  var div = clickedbutton.parentElement;
  var paragraph = div.querySelector("p");
  var value = Number(paragraph.innerHTML);
  value++;
  paragraph.innerHTML = value;
  var td = div.parentElement;
  var tr = td.parentElement;
  var up = tr.querySelector(".unitPrice");

  var p = tr.querySelector(".price");
  p.innerHTML = value * Number(up.innerHTML);
  calcul_sum();
}

for (let i = 0; i < plus_buttons.length; i++) {
  plus_buttons[i].addEventListener("click", inc);
}
function calcul_sum() {
  var prices_tab = document.querySelectorAll(".price");
  sum = 0;
  for (let i = 0; i < prices_tab.length; i++) {
    sum = sum + Number(prices_tab[i].innerHTML);
    var t = document.querySelector("#total");
    t.innerHTML = sum;
  }
}
for (let i = 0; i < BTN_like.length; i++) {
  BTN_like[i].addEventListener("click", changeColor);
}

function changeColor(e) {
  var btn = e.target;
  if (btn.style.color == "gray") {
    btn.style.color = "red";
  } else {
    btn.style.color = "gray";
  }
}
function supprimer(e) {
  var btnsupp = e.target;
  console.log(btnsupp);
  var div = btnsupp.parentElement.parentElement;
  var td = div.parentElement;
  var tr = td.parentElement;
  console.log(tr);
  var p = tr.querySelector(".price");
  p.innerHTML = 0;
  tr.remove();
  calcul_sum();
}

for (let i = 0; i < btn_delete.length; i++) {
  btn_delete[i].addEventListener("click", supprimer);
}
