//Calculator JS Script

const key = document.querySelector(".button")
const txtfield = document.querySelector("#textfield")
//const clear = document.querySelector("#clear")
const container = document.querySelector("#con")
const operator = document.querySelector("#operator")
const equals = document.querySelector("#equals")

let num
let operatorCapture
let result

//Handles Num event click
function numHandler(event) {
  let num = event.target.innerText
  // numClick displays the buttons clicked
  let numClick = document.createTextNode(num)
  txtfield.appendChild(numClick)
}
let numClick = key.addEventListener("click", numHandler)

//Handles operator click event
function operHandler(event) {
  let operatorCapture = event.target.innerText
  let operCLick = document.createTextNode(operatorCapture)
  txtfield.appendChild(operCLick)
}
operator.addEventListener("click", operHandler)

//Handles equals click event
function equalsHandler(event) {
  let equalCapture = event.target.innerText
  if (event.target.innerText === "=") {
    let equalCapture = num + num
  }
  //Handles display
  let equalCLick = document.createTextNode(equalCapture)
  txtfield.appendChild(equalCLick)
}
equals.addEventListener("click", equalsHandler)

function clearHandle() {
  txtfield.textContent = ""
}

clear.addEventListener("click", clearHandle)
