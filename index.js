const que1 = document.getElementById("que1")
const ans1 = document.getElementById("ans1")
const svg1 = document.getElementById("svg1")

const que2 = document.getElementById("que2")
const ans2 = document.getElementById("ans2")
const svg2 = document.getElementById("svg2")

const que3 = document.getElementById("que3")
const ans3 = document.getElementById("ans3")
const svg3 = document.getElementById("svg3")

const que4 = document.getElementById("que4")
const ans4 = document.getElementById("ans4")
const svg4 = document.getElementById("svg4")

const que5 = document.getElementById("que5")
const ans5 = document.getElementById("ans5")
const svg5 = document.getElementById("svg5")

const que6 = document.getElementById("que6")
const ans6 = document.getElementById("ans6")
const svg6 = document.getElementById("svg6")


que1.addEventListener("click", () => {
    ans1.classList.toggle("display")
    svg1.classList.toggle("rotate")
})

que2.addEventListener("click", () => {
    ans2.classList.toggle("display")
    svg2.classList.toggle("rotate")
})

que3.addEventListener("click", () => {
    ans3.classList.toggle("display")
    svg3.classList.toggle("rotate")
})

que4.addEventListener("click", () => {
    ans4.classList.toggle("display")
    svg4.classList.toggle("rotate")
})

que5.addEventListener("click", () => {
    ans5.classList.toggle("display")
    svg5.classList.toggle("rotate")
})

que6.addEventListener("click", () => {
    ans6.classList.toggle("display")
    svg6.classList.toggle("rotate")
})
