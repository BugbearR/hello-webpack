var timerID;

function onDOMContentLoaded() {
  /* Create structure */
  var rootElm = document.getElementById("root");
  rootElm.innerHTML = '';

  var titleElm = document.createElement("h1");
  titleElm.setAttribute("id", "title");

  var timeElm = document.createElement("p");
  timeElm.setAttribute("id", "time");

  rootElm.append(titleElm);
  rootElm.append(timeElm);

  /* Set contents */
  // var titleElm = document.getElementById("title");
  titleElm.textContent = "Hello, world!";

  timerID = setInterval(redrawTime, 1000);
}

function redrawTime() {
  var timeElm = document.getElementById("time");
  timeElm.textContent = `It is ${new Date().toLocaleTimeString()}`;
}

window.addEventListener("DOMContentLoaded", onDOMContentLoaded);
