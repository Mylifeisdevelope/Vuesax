import requestFunc from "./featch.js"
import HtmlColectionClass from "./HtmlColcection.js"
import ProductsLocalStorage from "./LocalStorage.js"
const nextBtn = document.querySelector(".next__page__btn")
const shopList = document.querySelector(".shop__list")
const popUpShopItemBlock = document.querySelector(".popup__shop__block")
const localStorageCheck = new ProductsLocalStorage()
const paymentSum = document.querySelector(".payment__sum")
let count = 0
let newCount = 0
let sumPrice = 0



class Products extends HtmlColectionClass {
    constructor() {
        super()
    }
    sum(currentSum) {
        return sumPrice += currentSum
    }
    sumMiuns(currentSum) {
        return sumPrice -= currentSum
    }
    btnRemove(elem, img, rating, price, name, category, description) {
        const removePrice = this.sumMiuns(Number(price.slice(2)))
        paymentSum.textContent = ` $ ${removePrice} `
        const getElem = elem.closest(".popup__shop__item")
        getElem.remove()
        localStorageCheck.setLocalStorage()
    }
    activeBtn(elem, img, rating, price, name, category, description) {
        const addPrice = this.sum(Number(price.slice(2)))
        paymentSum.textContent = ` $ ${addPrice} `
        const shopItemHtml = `
        <div class="popup__shop__item">
           <div class="popup__shop__img__block">
                <img class="popup__shop__img" src="${img}" alt="">
           </div> 
            <div class="popup__shop__name__and__price">
            <div class="price__and__rating">
                <span class="popup__shop__rating">${rating}<i class="far fa-star" aria-hidden="true"></i></span>
                <span class="popup__shop__price">${price}</span>
            </div>
                <span>${name}</span>
                <p>${description}</p>
            </div>
            <button class="popup__shop__remove__btn" onclick="productPage.btnRemove(this,'${img}','${rating}','${price}','${name}','${category}','${description}')"><i class="far fa-trash-alt"></i></button>
        </div>
      `
        popUpShopItemBlock.innerHTML += shopItemHtml
        localStorageCheck.setLocalStorage()
    }

    render() {
        const shopItem = document.querySelector(".shop__list")
        let boolColor = false
        if (count === 0) {
            requestFunc('./Json/catalog.json').then((result) => {
                count = 9
                let addElem = result.slice(newCount, count)
                newCount = count
                addElem.forEach(({ img, rating, price, category, name, description }) => {
                    shopItem.innerHTML += this.htmlColection(img, rating, price, category, name, description)
                })
            })
        }
        nextBtn.addEventListener("click", () => {
            requestFunc('./Json/catalog.json').then((result) => {
                count += 9
                let addElem = result.slice(newCount, count)
                newCount = count
                addElem.forEach(({ img, rating, price, category, name, description }) => {
                    shopItem.innerHTML += this.htmlColection(img, rating, price, category, name, description)
                })
            })
        })
    }

}



const countSum = () => {
    const getPriceElem = document.querySelectorAll(".popup__shop__price").forEach((elem) => {
        const pricelemNum = Number(elem.textContent.slice(2))
        sumPrice += pricelemNum
        paymentSum.textContent = `$ ${sumPrice}`
    })
}

window.productPage = new Products()
window.productPage.render()

localStorageCheck.getLocalStorage(countSum)


