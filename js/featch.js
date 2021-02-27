const nextBtn = document.querySelector(".next__page__btn")
const requestFunc = async (requestUrl) => {
    try {
      nextBtn.classList.add("load__more")
      const response = await fetch(requestUrl)
      let json = await response.json()
      return json
    }
    catch {
      throw new Error('Error')
    }
    finally{
      nextBtn.classList.remove("load__more")
     
    }
  }
export default requestFunc



















































