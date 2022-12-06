let addEl = document.getElementById("add-el")
let savEl = document.getElementById("save-el")
console.log(savEl)
let count = 0

function increase() {
    count += 1
    addEl.textContent = count
}


function saveEl() {
    let cStr = count + " - "
    savEl.textContent += cStr
    addEl.textContent = 0
    count = 0
}
