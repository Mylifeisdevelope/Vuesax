class HtmlColectionClass {

    htmlColection(img, rating, price, category, name, description) {
        const html = `
    <div class="shop__item__content">
        <div class="shop__item__img">
            <img src="${img}" alt="">
        </div>
        <div class="rating__and__price">
            <div class="shop__item__rating">
                ${rating}
                <i class="far fa-star"></i>
            </div>
            <span class="shop__item__price">${price}</span>
        </div>
        <div class="name__and__description">
            <p data-category="${category}" class="shop__item__name">${name}</p>
            <p class="shop__item__description">${description}</p>

        </div>
        <div class="shop__item__buttons">
            <button class="wish__list"><i class="far fa-heart"></i> WISHLIST</button>
            <button class="add__to__cart" onclick="productPage.activeBtn(this,'${img}','${rating}','${price}','${name}','${category}','${description}')"><i class="fas fa-shopping-basket"></i> ADD TO CART</button>
        </div>
    </div>
`
        return html
    }

}


export default HtmlColectionClass