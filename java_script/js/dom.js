// Acceder al elemento por su id 

let contenido=document.getElementById("texto")
console.log(contenido)

// Aceder al elemento por su selector etiqueta 

let contenido2=document.querySelector("p")
console.log(contenido2)

// accedor al elemento por su selector id 
let contenido3=document.querySelector("#texto")
console.log(contenido3)
//Acceder a su elemeto por su selector clas 
let contenido4=document.querySelector(".texto") 
console.log(contenido4)
// acceder a varios selectores por su selector   un not liss es un elemento 
let contenido5=document.querySelectorAll("p")
console.log(contenido5)
// recorrer nodeList  
let contenido6=document.querySelectorAll("p").forEach((el)=>console.log(el))
// ejemplo  de acceso de campo de formulario  
let num=document.getElementById("num").type
console.log(num)
// acceder y cambiar el valor de etiquetA
document.querySelector("a").getAttribute("herf")
//cambiar 
document.querySelector("a").setAttribute("herf","https://www.youtube.com/")
//acceder atributo style para cambuiar el estilo css en html 
let color=document.querySelector("#texto")
color.style.setProperty("color","000hhf")
color.style.setProperty("backgroud-color","black")
color.style.setProperty("width","500px" )

/*
//Acceder 
let mic=document.querySelector(".factura")

let tex=
<h1> otro titulo </h1>
<p> un parrafo </p>
<p>segundo parrafo </p>

mic.textContent=text
mic.innerHTML=text */



let pp=document.querySelector("h1")
pp.textContent="este facture 1 " 


let pily=document.querySelector(".texto")
let text= `
<h1>pily barbosa</h1>
<p>Aprendiz ficha 2687390</p>`

pily.innerHTML=`
<h1>pily barbosa</h1>
<p>Aprendiz ficha 2687390</p>`

let img1=document.createElement("img")
img1.src="https://img.freepik.com/vector-gratis/lindo-panda-colgando-lapiz-dibujos-animados-vector-icono-ilustracion-educacion-animal-icono-plano-aislado_138676-7645.jpg?w=2000"

document.body.appendChild(img1)


let caja=document.createElement("div")
caja.innerHTML=`<img src="img/"/>`
pily.appendChild(caja)


