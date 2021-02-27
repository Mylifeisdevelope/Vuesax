//Change window settings
const container = document.querySelector(".container")
const body = document.querySelector("body")
const changePageStyleBtn = document.querySelector(".change__page__style")
let checkPageStyle = localStorage.getItem('checkPageStyle') === 'active__color'
changePageStyleBtn.addEventListener("click", (e) => {
    localStorage.setItem('checkPageStyle', 'active__color')
    if (checkPageStyle === false) {
        body.classList.add("active__color")
        localStorage.checkPageStyle = "active__color"
        checkPageStyle = true
    } else if (checkPageStyle === true) {
        localStorage.checkPageStyle = null
        body.classList.remove("active__color")
        checkPageStyle = false
    }
})
window.addEventListener("load", () => {
    body.classList.add(localStorage.getItem("checkPageStyle"))
})


