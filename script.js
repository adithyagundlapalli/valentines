const b = document.getElementById("btn-change");

function change() {
  var containerWidth = document.querySelector(".container").offsetWidth;
  var containerHeight = document.querySelector(".container").offsetHeight;

  var i = Math.floor(Math.random() * (containerWidth - b.offsetWidth));
  var j = Math.floor(Math.random() * (containerHeight - b.offsetHeight));

  b.style.left = i + "px";
  b.style.top = j + "px";
}
