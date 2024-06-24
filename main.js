
let menuBtn = document.querySelector("#menuButton")
let list  = document.querySelector("#list")
let closeBtn= document.querySelector("#crossButton")

menuBtn.addEventListener("click", function(){
    list.style.display = "flex";
    menuBtn.style.display = "none"
  closeBtn.style.display ="block"
})
closeBtn.addEventListener("click", function(){
    list.style.display = "none";
    closeBtn.style.display = "none"
    menuBtn.style.display ="block"
 
})