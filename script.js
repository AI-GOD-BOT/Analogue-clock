let input = document.querySelector("input");
input.style.background = " aliceblue";
let button = document.querySelector("button");
let ul = document.querySelector("ul");

function addelment(e) {
  e.preventDefault();

  if (input.value == "") {
    alert("please Add  data ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;

    let del = document.createElement("span");
    del.style.marginLeft = "10em";
    del.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
    li.appendChild(del);

    del.addEventListener("click", () => {
      ul.removeChild(li);
    });

    let mod = document.createElement("span");
    mod.innerHTML = `<ion-icon name="create-outline"></ion-icon>`;
    li.appendChild(mod);

    mod.addEventListener("click", () => {
      input.value = li.textContent.replace("", "");
      ul.removeChild(li);
    });
    ul.appendChild(li);
  }
  input.value = "";
}

button.addEventListener("click", addelment);

setInterval(() => {
  let d = new Date();
  let sec = d.getSeconds() * 6;
  let min = d.getMinutes() * 6 + d.getSeconds() * 0.1;
  let hou = (d.getHours() % 12) * 30 + d.getMinutes() * 0.5;
  document.getElementById("second").style.transform = "rotate(" + sec + "deg)";
  document.getElementById("minute").style.transform = "rotate(" + min + "deg)";
  document.getElementById("hour").style.transform = "rotate(" + hou + "deg)";
}, 1000);
