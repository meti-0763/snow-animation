let body = document.querySelector("body")



document.addEventListener(`click`, e =>{
    console.log(e.offsetX);
    console.log(e.offsetY);
    
    let randomh = Math.floor(Math.random()*200) 
    
    
    let elem = ` <span id="span" style="left: ${e.offsetX}px; top: ${e.offsetY}px; width: ${randomh}px;" class="snowflake"><img style="width: 100%;" src="snowflake-image.svg" alt=""></span> `
    
    body.insertAdjacentHTML("afterbegin",elem)
    
    setTimeout(() => {
        document.querySelector("#span").remove()
        
    }, 1000);
    
})