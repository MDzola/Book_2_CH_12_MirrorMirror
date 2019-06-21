let inputEl = document.getElementById("message")
let outputEL = document.getElementById("inputfield1")
let outputEL2 = document.getElementById("inputfield2")

function writeHTML() {
    return `
        
    `
}

inputEl.addEventListener("keyup", function (event) {
    console.log(event.target.value)
    outputEL.innerHTML = event.target.value;
    outputEL2.innerHTML = event.target.value;
} )