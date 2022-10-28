//Calculator JS Script

const key = document.querySelector(".button")
const txtfield = document.querySelector("#textfield")
const clear = document.querySelector("#clear")
//const container = document.querySelector("#con")

//Handles Num event click
function numHandler(event) {
  let num = event.target.innerText
  // numClick displays the buttons clicked
  let numClick = document.createTextNode(num)
  txtfield.appendChild(numClick)
}
let numClick = key.addEventListener("click", numHandler)

function clearHandle() {
  txtfield.textContent = ""
}

clear.addEventListener("click", clearHandle)
