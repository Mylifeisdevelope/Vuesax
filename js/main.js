// Drop Menu 
const ElemAll = document.querySelectorAll(".menu__arrow")
const subList = document.querySelectorAll(".sub__list")
const dropMenu = document.querySelectorAll(".drop__down__link ");

dropMenu.forEach((elem, index) => {
    elem.addEventListener("click", (e) => {
        e.preventDefault()
        const parentElement = e.target.closest(".list__item")
        if (parentElement) {
            if (index && !parentElement.children[1].classList.contains("open")) {
                parentElement.children[1].classList.add("open")
                elem.children[1].classList.add("menu__arrow__active")
            } else if (index && parentElement.children[1].classList.contains("open")) {
                parentElement.children[1].classList.remove("open")
                elem.children[1].classList.remove("menu__arrow__active")
            } else if (!index && parentElement.children[1].classList.contains("open")) {
                removeElem(subList, "open")
                removeElem(ElemAll, "menu__arrow__active")
            }
        }
    })
})

//Close All Drop Menu function

const removeElem = (element, removeClass) => {
    element.forEach(elem => {
        elem.classList.remove(removeClass)
    })
}











// dropMenu.forEach((elem, index) => {
//     elem.addEventListener("click", (e) => {
//         e.preventDefault()
//         const parentElement = e.target.closest(".list__item")
//         const arrowElement = e.target.closest(".menu__arrow")
//         if (parentElement) {
//             if (!parentElement.children[1].classList.contains("open") && !index) {
//                 removeElem(subList, "open")
//                 removeElem(ElemAll, "menu__arrow__active")
//                 console.log(index);
//             } else if (parentElement.children[1].classList.contains("open") ) {
//                 parentElement.children[1].classList.remove("open")
//                 elem.children[1].classList.remove("menu__arrow__active")
//             }
//             parentElement.children[1].classList.add("open")
//             elem.children[1].classList.add("menu__arrow__active")
//         }

//     })
// });
//select setings
const selectList = document.querySelector(".input__list")
const inputSubList = document.querySelector(".input__sub__list")
selectList.addEventListener("click", (e) => {
    const inputSubItem = document.querySelectorAll(".input__sub__item")
    e.preventDefault()
    if (e.target.classList.contains("input__item") || e.target.classList.contains("input__value")) {
        inputSubList.classList.toggle("add__select")
        selectStyleAdd()
        inputSubItem.forEach(elem => {
            elem.addEventListener("click", (e) => {
                const trim = e.target.textContent.trim()
                const linkValue = document.querySelector(".input__value")
                linkValue.textContent = trim
                inputSubList.classList.remove("add__select")
                selectStyleAdd()
            })
        })
    }
})


// select style add function 
const selectStyleAdd = () => {
    const inputArrow = document.querySelector(".input__value")
    if (inputSubList.classList.contains("add__select")) {
        selectList.style.background = "#ECECEC"
        inputArrow.classList.add("input__value__active")
    } else {
        selectList.style.background = ""
        inputArrow.classList.remove("input__value__active")
    }
}




//basket Popup menu 
const popUp = document.querySelector(".profile__foto")
const popUpBlock = document.querySelector(".popup__block")
const overlay = document.querySelector(".overlay")
let popUpBool = false
popUp.addEventListener("click", (e) => {


    if (popUpBool === false) {
        popUpBlock.classList.add("popup__block__active")
        overlay.classList.add("overlay__active")
        popUpBool = true
    } else if (popUpBool === true) {
        popUpBlock.classList.remove("popup__block__active")
        overlay.classList.remove("overlay__active")
        popUpBool = false
    }
})

// overlay for  PopUp menu
overlay.addEventListener("click", () => {
    popUpBlock.classList.remove("popup__block__active")
    overlay.classList.remove("overlay__active")
    popUpBool = false
})

// popUp close button 
const popUpCLose = document.querySelector(".close__popup")
popUpCLose.addEventListener("click", () => {
    popUpBlock.classList.remove("popup__block__active")
    overlay.classList.remove("overlay__active")
    popUpBool = false
})





  //  if (parentElement) {
        // if (parentElement.children[1].classList.contains("open")) {
        //     parentElement.children[1].classList.remove("open")
        //     elem.children[1].classList.remove("menu__arrow__active")
        // } else {
        //     parentElement.children[1].classList.add("open")
        //     elem.children[1].classList.add("menu__arrow__active")
        // }
        // }