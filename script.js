let $ = document;
document.addEventListener("click",(e)=>{
    let spanEl = document.createElement("span")
    spanEl.classList.add("snowflake")
    let size =Math.floor(Math.random()*100)
    spanEl.style.width  = `${size}px`
    spanEl.style.height  = `${size}px`
    spanEl.style.left = e.clientX + "px"
    spanEl.style.top = e.clientY + "px"
    document.body.appendChild(spanEl)
    setTimeout(()=>{
        spanEl.remove()
    },1000)
})