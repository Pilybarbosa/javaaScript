let op ;
let tipodeDocumento="TI"
let nombreDocumento="123456"
let nombre="fulanito"
let apellido="perez"

alert(` 1.ingresar estudiante 2.ver estudiante 3.modificar estudiante   `)
switch (op) {
    

    case 1:
      tipodeDocumento=prompt(`ingrse su tipo de documento `)
      nombreDocumento=prompt(`ingrese su numero de documento `)
      nombre=prompt(`ingrese su nombre `)
      apellido=prompt(`ingrese su apellido`)

      if (tipodeDocumento==tipodeDocumento && nombreDocumento==nombreDocumento && nombre==nombre && apellido==apellido ) {
        alert(`sus datos si considen `)
      } else {
        alert(`sus datos no considen`)
      }

        break;
     case 2 ;
       alert(`el estudiantes ${nombre} y esta identificado con ${tipodeDocumento} con numero ${nombreDocumento} `)
        break;

    case 3;
        

    switch (op) {
        case 4:
            alert(`que dato desea modificar 1.tipodeDocumento 2.nombreDcumento 3.nombre 4.apellido`)
            break;
        case 1: 
        default:
            break;
    }
      
    default:
        break;
}
