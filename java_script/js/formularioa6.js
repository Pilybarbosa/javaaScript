console.log("holas");
let form=document.getElementById("validacion")
let docuu=document.querySelector("#documento .doc")
let num=document.querySelector("#nombre .nom")
let ape=document.querySelector("#apellido .app")
const $number=/^[0-9]{1,15}/
const $name=/^[A-Za-zñÑ]{1,50}/

//validacion antes de enviar 
//documento

form.docu.addEventListener("input",(a)=>{
    a.preventDefault();
    if ($number.test(a.target.value)) {
        form.docu.setAttribute("class","success")
        docuu.style.setProperty("visibility","hidden")
        docuu.style.setProperty("opacity","0")
    } else {
        form.docu.setAttribute("class","error")
        docuu.textContent="solo puede dijitar valores numercos debe ser min 1 "
        docuu.style.setProperty("visibility","visible")
        docuu.style.setProperty("opacity","1")
    } 
    })
    // nombre
    
form.docu.addEventListener("input",(e)=>{
    e.preventDefault();
    if ($number.test(e.target.value)) {
        form.docu.setAttribute("class","success")
        num.style.setProperty("visibility","hidden")
        num.style.setProperty("opacity","0")
    } else {
        form.docu.setAttribute("class","error")
        num.textContent="solo puede dijitar valores numercos debe ser min 1 "
        num.style.setProperty("visibility","visible")
        num.style.setProperty("opacity","1")
    }

})

 //apellido
 
form.docu.addEventListener("input",(i)=>{
    i.preventDefault();
    if ($n.test(i.target.value)) {
        form.docu.setAttribute("class","success")
        ape.style.setProperty("visibility","hidden")
        ape.style.setProperty("opacity","0")
    } else {
        form.docu.setAttribute("class","error")
        ape.textContent="solo puede dijitar valores numercos debe ser min 1 "
        ape.style.setProperty("visibility","visible")
        ape.style.setProperty("opacity","1")
    
    } 
})
