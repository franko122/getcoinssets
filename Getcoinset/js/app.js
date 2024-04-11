 function startCode() {
    let  slideone = document.getElementById("slideone");
    let  slidetwo = document.getElementById("lidetwo");
    let  leftslidet = document.getElementById("leftslidet");
    let  local = document.getElementById("local");
    let  move = document.getElementById("move");  
    let  dropone = document.getElementById("dropone")
    let depo = document.getElementById("depo")
    let depoll = document.getElementById("depoll")
    let cliolive = document.getElementById("cliolive")
    let meshow = document.getElementById("meshow") 
    let trt = document.getElementById("trt") 
    let meo = document.getElementById("meo") 
    cliolive.addEventListener("click",()=>{
        meshow.style.width="100%"
        meshow.style.height="100vh"
        trt.style.width="70%"
        trt.style.transition="1s"
    })

    meo.addEventListener("click",()=>{
        meshow.style.width="0px"
        meshow.style.transition="1s"
    })
    setTimeout(() => {
        depo.style.width="100%"
        depo.style.transition="1s"
    }, 1000);
    setInterval(() => {
        depoll.style.width="0%" 
    }, 3000);
    setInterval(() => {
        move.style.height="0px"
        move.style.overflow="hidden" 
    }, 6000);  
      setInterval(() => {
        local.style.height="67px"  
    }, 7000);
    setInterval(() => {                     
        slideone.style.height="0px"
        slideone.style.overflow="hidden"
    }, 5000);
     setInterval(() => { 
        slidetwo.style.height="67px"
    }, 6000);
 }
 startCode() 
 function amGreat(a,b,c,){
  console.log(b ,"is",a,"years old");
} 
amGreat(22,"frank",true) 