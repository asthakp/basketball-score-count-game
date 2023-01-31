let firstBtn=document.getElementById("first")
let secondBtn=document.getElementById("second")
let thirdBtn=document.getElementById("third")
let fourthBtn=document.getElementById("fourth")
let fifthBtn=document.getElementById("fifth")
let sixthBtn=document.getElementById("sixth")
let parafirst=document.getElementById("homeFirst")
let parasecond=document.getElementById("guestFirst")
let resetBtn=document.getElementById("reset")
let countOne=0
let countTwo=0
firstBtn.addEventListener("click", ()=>{
    countOne+=1
    parafirst.innerText=countOne
    changeColor()
})
secondBtn.addEventListener("click", ()=>{
    countOne+=2
    parafirst.innerText=countOne
    changeColor()
})
thirdBtn.addEventListener("click", ()=>{
    countOne+=3
    parafirst.innerText=countOne
    changeColor()
})
fourthBtn.addEventListener("click", ()=>{
    countTwo+=1
    parasecond.innerText=countTwo
    changeColor()
})
fifthBtn.addEventListener("click", ()=>{
    countTwo+=2
    parasecond.innerText=countTwo
    changeColor()
})
sixthBtn.addEventListener("click", ()=>{
    countTwo+=3
    parasecond.innerText=countTwo
    changeColor()
})
resetBtn.addEventListener("click", ()=>{
countOne=0
countTwo=0
parafirst.textContent=0
parasecond.textContent=0
parafirst.style.color="#f94f6d"
parasecond.style.color="#f94f6d" 

})

let changeColor = ()=>{
    if(parseInt(parafirst.textContent)>parseInt(parasecond.textContent)){
       parafirst.style.color="green" 
       parasecond.style.color="#f94f6d" 
    }
    else if (parseInt(parafirst.textContent)<parseInt(parasecond.textContent)){
        parasecond.style.color="green" 
        parafirst.style.color="#f94f6d" 
     }
     else if  (parseInt(parafirst.textContent)==parseInt(parasecond.textContent)){
        parasecond.style.color="#f94f6d" 
        parafirst.style.color="#f94f6d" 
     }
     
     }
   

