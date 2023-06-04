let nombre,ver,  apellido
let aprendices=["carmen","carla","jeimy ","carmen ","pily"]



let op=parseInt(prompt(`que desea modificar 1.agregar aprendiz 2.ver aprendices 3.buscar aprendices 4.modificar aprendices 5.borar aprendiz `))


    
while (op) {
    if (op==1) {
        nombre=prompt(`ingrese su nombre `)
        aprendices.push(nombre)
        alert(`su lista es ${aprendices}`)
        

    } else if (op==2){
        console.log(aprendices)
        alert(`los estudiantes sin `+aprendices)

    } else if (op==3){
      let busqueda1=prompt(`ingrese el aprendiz que quiere buscar`)
let busqueda2=aprendices.find(aprendices>=aprendices==busqueda1)
     alert(`el nombre que utt busco fue ${aprendices}`)
    }
else if(op==4) {

    }
}




 
 