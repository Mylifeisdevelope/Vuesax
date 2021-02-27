import requestFunc from "./featch.js"
const searchInput = document.querySelector("#search__input")
const searchArea = document.querySelector('.search__input__area')
const searchFunc = () => {
    requestFunc('./Json/catalog.json').then((result) => {
        result.forEach(({ name, link }) => {
            const searchHtmlElem = `
            <a href="${link}" class="search__element" >
               <span>${name}</span>
            </a>
            `
            searchArea.innerHTML += searchHtmlElem
            searchInput.addEventListener("input", (e) => {
                const value = e.target.value.trim()
                const toUpperCaseValue = value.toUpperCase()
                if (value !== '') {
                    document.querySelectorAll(".search__element").forEach((elem) => {
                        const elemToUpperCase = elem.textContent.toUpperCase()
                        console.log(elem);
                        if (elemToUpperCase.search(toUpperCaseValue) === -1) {
                            elem.classList.add("search__element__hide")
                            elem.classList.remove("search__element__show")
                            searchArea.classList.add("search__input__area__active")
                        } else {
                            elem.classList.remove("search__element__hide")
                            elem.classList.add("search__element__show")
                            
                        }
                        elem.addEventListener("click", () => {
                            if (searchArea.classList.contains("search__input__area__active")) {
                                searchArea.classList.remove("search__input__area__active")
                            }
                        })
                    })
                } else {
                    document.querySelectorAll(".search__element").forEach((elem) => {
                        elem.classList.add("search__element__hide")
                        elem.classList.remove("search__element__show")
                        searchArea.classList.remove("search__input__area__active")
                    })
                }
            })
        });
    })
}

window.addEventListener("load", () => {
    searchInput.value = ''
})
searchInput.addEventListener("blur", () => {
    setTimeout(() => {
        if (searchArea.classList.contains("search__input__area__active")) {
            searchArea.classList.remove("search__input__area__active")
        }
    }, 200);
})
searchInput.addEventListener("focus", (e) => {
    setTimeout(() => {
        if (e.target.value !== '') {
            searchArea.classList.add("search__input__area__active")
        }
    }, 200);
})
searchFunc()





