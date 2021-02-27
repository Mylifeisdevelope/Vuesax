import requestFunc from "./featch.js"


//get featch element price function 
const getFeatchElemPrice = (arg, arg2) => {
    requestFunc('./Json/catalog.json').then((result) => {
        const htmlColectinForFilter = document.querySelectorAll(".shop__item__content")
        htmlColectinForFilter.forEach((elem) => {
            const filterElem = elem.querySelector(".shop__item__price").innerHTML.slice(2)
            const changePriceNum = Number(filterElem)
            if (changePriceNum < arg) {
                elem.style.display = "none"
            }
            else if (arg2 < changePriceNum) {
                elem.style.display = "none"
            }
            else {
                elem.style.display = "grid"
            }
        })
    })
}


//input Checkbox multi Range
const checkBox = document.querySelectorAll(".check__box__input")
checkBox.forEach((elem) => {
    elem.addEventListener("change", (e) => {
        if (e.target.value.includes('All')) {
            getFeatchElemPrice(0)
        } else {
            const valueLine = e.target.value.split("-")
            const valueLoop = valueLine.map((element) => Number(element))
            if (valueLoop.length > 1) {
                getFeatchElemPrice(valueLoop[0], valueLoop[1])
            } else {
                getFeatchElemPrice(valueLoop[0])
            }
        }
        checkBoxChecked(elem)
    })
})

//input CheckBox checked function
const checkBoxChecked = (index) => {
    checkBox.forEach((elem) => {
        elem.checked = false;
    })
    index.checked = true;
}


//nuUiRange Slider
const rangeSlider = document.getElementById('range__slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [1, 5000],
        connect: true,
        step: 1,
        range: {
            'min': 1,
            'max': 5000
        }
    });
    const sliderSumMin = document.querySelector("#slider__sum__min")
    const sliderSumMax = document.querySelector("#slider__sum__max")
    const sliders = [sliderSumMin, sliderSumMax]
    rangeSlider.noUiSlider.on('update', function (values, handle) {
        sliders[handle].textContent = Math.round(values[handle])
        const rangeSliderValue1 = Number(values[0])
        const rangeSliderValue2 = Number(values[1])
        getFeatchElemPrice(rangeSliderValue1, rangeSliderValue2)
    });
}


//get element category
const addElem = []
const getElemCategory = (arg) => {
    requestFunc('./Json/catalog.json').then((result) => {
        result.forEach((elem) => {
            const delateTrimElem = elem.category.replace(/\s/g, '')
            if (arg.length === delateTrimElem.length && arg.includes(delateTrimElem)) {
                const htmlColectinForFilter = document.querySelectorAll(".shop__item__name")
                htmlColectinForFilter.forEach((el) => {
                    const getElemAtributs = el.dataset.category.replace(/\s/g, '')
                    addElem.push(arg)
                   console.log(addElem[length -1]);
                    if (getElemAtributs.includes(addElem)) {
                        el.closest(".shop__item__content").style.display = "grid"
                    }
                    else if (getElemAtributs !== arg) {
                        el.closest(".shop__item__content").style.display = "none"
                    }
                })
            }
        })
    })
}


//input Checkbox catalogy list function 
const catalogyInput = document.querySelectorAll(".category__input")
catalogyInput.forEach((elem) => {
    elem.addEventListener("change", (e) => {
        const delateTrimElem = e.target.dataset.category.replace(/\s/g, '')

        if (e.target.checked === true) {
            getElemCategory(delateTrimElem)
        }
        else {
            const htmlColectinForFilter = document.querySelectorAll(".shop__item__content")
            htmlColectinForFilter.forEach(element => {
                element.style.display = "grid"
            });
        }
    })
})






















// const arr = ['a', 'b', 'c']
// arr.forEach((elem, index, arr) => {
//     const createObjValue = arr.splice(0, 1)
//     const createObj = {}
//     createObj[createObjValue] = elem
//     console.log(createObj);
// })


// let arr1 = ['a', 'b', 'c', 'd'];

// function foo(arr) {
//     let obj1 = [{}];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         let obj = {};
//         obj[arr[i]] = obj1[0];
//         obj1[0] = obj;
//     }
//     return obj1[0];
// }
// console.log(foo(arr1));


