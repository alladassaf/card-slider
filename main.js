const list = document.querySelector(".list")
const cards = document.querySelectorAll(".list .card")
const carousel = document.querySelector(".navigation .carousel")
const cardBasis = window.getComputedStyle(cards[0]).flexBasis
const cardsShown = 100 / cardBasis.substring(5, cardBasis.indexOf("%"))
let carouselNum = cards.length / parseInt(cardsShown)
console.log(parseInt(carouselNum))

const arrows = document.querySelectorAll(".arrows .arrow")
console.log(Number.isInteger(carouselNum))

if (!Number.isInteger(carouselNum)) {
    carouselNum = parseInt(carouselNum) + 1
} else {
    carouselNum = parseInt(carouselNum)
}

arrows.forEach(arrow => {
    
    if (arrow.classList.contains("left")) {

        arrow.addEventListener("click", () => {updateCarousel(-1)})

    } else if (arrow.classList.contains("right")) {

        arrow.addEventListener("click", () => {updateCarousel(1)})

    }
})

let index = 0


for (let i = 0; i < parseInt(carouselNum); i++) {
    const indicator = document.createElement("div")
    indicator.className = "indicator"
    carousel.appendChild(indicator)
}

const indicators = carousel.querySelectorAll(".indicator")
indicators[index].classList.add("active")

/* let pos = [...indicators].findIndex(indicator => indicator.classList.contains("active"))


console.log(pos) */

function updateCarousel(inc) {
    pos = [...indicators].findIndex(indicator => indicator.classList.contains("active"))
    
    console.log(`Index: ${index}`)
    console.log(`Incrementor: ${inc}`)
    console.log(`Position: ${pos}`)

    indicators[index].classList.remove("active")
    
    index = index+inc

    if (index >= carouselNum) {
        index = 0
    }

    if (index < 0) {
        index = carouselNum - 1
    }

    slideCards(index)

    indicators[index].classList.add("active")
    pos = [...indicators].findIndex(indicator => indicator.classList.contains("active"))

    console.log(`%cIndex: ${index}`, "text-decoration: underline; font-weight: bold;")
    console.log(`%cIncrementor: ${inc}`, "text-decoration: underline; font-weight: bold;")
    console.log(`%cPosition: ${pos}`, "text-decoration: underline; font-weight: bold;")
}

function slideCards(ind) {

    gap = 25 * ind

    list.style.transform = `translateX(calc(-${100 * ind}% - ${gap}px))`
}