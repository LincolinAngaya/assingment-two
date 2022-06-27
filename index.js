const button5 = document.querySelector("#plusFive")
let plusTen = document.querySelector("#plusTen")
let plusTen1 = document.querySelector("#plusTen1")
let plusFifteen = document.querySelector("#plusFifteen")
let plusTwenty = document.querySelector("#plusTwenty")
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
        disp.textContent = "added 5"
        indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
    })
    //add 10
plusTen.addEventListener('click', () => {
        disp.textContent = "added 10"
        indicator.textContent = (parseInt(indicator.textContent) + 10).toString()
    })
    //add 10
plusTen1.addEventListener('click', () => {
        disp.textContent = "added 10"
        indicator.textContent = (parseInt(indicator.textContent) + 10).toString()
    })
    //add 15
plusFifteen.addEventListener('click', () => {
        disp.textContent = "added 15"
        indicator.textContent = (parseInt(indicator.textContent) + 15).toString()
    })
    //add 20
plusTwenty.addEventListener('click', () => {
    disp.textContent = "added 20"
    indicator.textContent = (parseInt(indicator.textContent) + 20).toString()
})