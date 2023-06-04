let instructores=[
    {firstName:"jennifer", lastName:"fajardo " , asignature:"javaScript"},
    {firstName:"tatiana", lastName:"cabrera", asignature:"javaAvanzaso"}
   ] 

   op=1;
   while (op==1) {
   
    let eleccion=parseInt(prompt(`que desea modificar 1.agregar instructor 2.ver instructores 3.buscar instructores 4.modificar indtructores 5.borar instructores  `))
   
   switch(eleccion){

    case 1:

        const  instructore={
            firstName:prompt(`ingrese su nombre `),
            lastName:prompt(`ingrese su apellido `),
            asignature:prompt(`ingrese la asignatura`)
            
        }  
        instructores.push(instructore)
        console.log(instructores)

    break;

    case 2:
        alert(`Estos son los instructores ${instructores}`)
    break;
    case 3:
       let  busqueda1=prompt(`ingrese el nombre que quiere buscar `)
       instructore=instructores.find(instructores.firstName>=instructores.firstName==busqueda1)
        console.log(instructore)
        alert(`el nombre que utt busco fue ${instructores}`)
   }
   op=parseInt(prompt(`¿Quiere seguir con el menu? 1 si 2 No`))
   } 
   
      
      