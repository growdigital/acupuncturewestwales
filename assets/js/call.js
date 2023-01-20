var ein = document.querySelector(".plain");
var eout = document.querySelector(".markdown");
function update() {
  eout.innerHTML = markdown(ein.value);
}
ein.addEventListener("input", update);
update();