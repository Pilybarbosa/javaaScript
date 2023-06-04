/*const  instructor ={
    nombre:"pily",
    apellido:"barbosa",
    materia:"fisica"
}
imprimirIndtructor() {
    console.log(`${instructor.apellido} jejeje`)
    console.log(` ${this.apellido} `)
}


//array de odjetos 

// agregar instructor 
let instruictor={
    firstName:"uldarico",
    lastName:"andrade" ,
    asignature:"python"
}
instructores.push(instructores)
console.log(instructores) */



let instructores=[
 {firstName:"jennifer", lastName:"fajardo " , asignature:"javaScript"},
 {firstName:"tatiana", lastName:"cabrera", asignature:"javaAvanzaso"}
] 

op=1;
while (op==1) {
    const  instructore={
        firstName:prompt(`ingrese su nombre `),
        lastName:prompt(`ingrese su apellido `),
        asignature:prompt(`ingrese `)
        
    }
    instructores.push(instructore)
    console.log(instructores)
    
    op=parseInt(prompt(`desea ingresar algun dato 1.si`))
   }
   