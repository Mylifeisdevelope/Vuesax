const paymentSum = document.querySelector(".payment__sum")
class ProductsLocalStorage {
    getLocalStorage(countSum) {
        if (localStorage.getItem("htmlLocal") !== null) {
            document.querySelector(".popup__shop__block").innerHTML = localStorage.getItem("htmlLocal");
            countSum()
        }
    }
    setLocalStorage() {
        const popUpShopBlock = document.querySelector(".popup__shop__block").innerHTML.trim()
        popUpShopBlock.length ? localStorage.setItem("htmlLocal", popUpShopBlock) : localStorage.removeItem("htmlLocal")
    }
}
export default ProductsLocalStorage