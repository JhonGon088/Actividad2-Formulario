let tabla=[
    {nombre: 'pedro',apellido:'gomez',edad:'18',cedula:'1002230850',email:'jshf@hotmail.com',celular:'145154154',direccion:'calle 8',contraseña:'asfas4f85',},
    {nombre: 'pedro',apellido:'gomez',edad:'18',cedula:'1002230850',email:'jshf@hotmail.com',celular:'145154154',direccion:'calle 8',contraseña:'asfas4f85',},
    {nombre: 'pedro',apellido:'gomez',edad:'18',cedula:'1002230850',email:'jshf@hotmail.com',celular:'145154154',direccion:'calle 8',contraseña:'asfas4f85',},
];

let cuerpotabla= document.getElementById('tabla-usuarios')
function listar(){
    let listado="";
    for(let i=0; i< tabla.length; i++){
        listado+= `<tr><th scope="row"> ${(i+1)} </th> <td>${tabla[i].nombre} </td><td> ${tabla[i].apellido} </th> <td>${tabla[i].edad} </th> <td>${tabla[i].cedula} 
        </th> <td>${tabla[i].email} </th> <td>${tabla[i].celular} </th> <td>${tabla[i].direccion} </td><td>${tabla[i].contraseña} </td></tr> `
    }
    cuerpotabla.innerHTML=listado


}
function nuevo(){
    let nombre= document.getElementById('nombre').value;
    let apellido= document.getElementById('apellido').value;
    let edad= document.getElementById('edad').value;
    var cedula= document.getElementById('cedula').value;
    let email= document.getElementById('email').value;
    let celular= document.getElementById('celular').value;
    let direccion= document.getElementById('direccion').value;
    let contraseña= document.getElementById('contraseña').value;
    
    if (!nombre) {
        alert('Ingrese el nombre')
        return
    }
    if (!apellido) {
        alert('Ingrese el apellido')
        return
    }
    if (!edad) {
        alert('Ingrese su edad')
        return
    }
    if (!cedula) {
        alert('Ingrese su Numero de Identificacion')
        return
    }
    
    if (!email) {
        alert('Ingrese su Correo Electronico')
        return
    }
    if (
        celular.value.length != 9 ||
        celular.value.trim() == "" ||
        isNaN(celular.value)
      ) {
        alert('celular no valido');
        condicion = false;
      }
    if (!direccion) {
        alert('Ingrese la dirección')
        return
    }
    if (!contraseña) {
        alert('Ingrese una Contraseña')
        return  
    }
    
    let i=1;
    cuerpotabla.innerHTML=`<tr><th scope="row">${(i+1)}</th><td>${nombre}</td><td>${apellido}</td><td>${edad}</td><td>${cedula}</td><td>${email}</td><td>${celular}</td><td>${direccion}</td><td>${contraseña}</td></tr>`
    i+=1;
    let nuevo={nombre:nombre,apellido:apellido,edad:edad,cedula:cedula,email:email,celular:celular,direccion:direccion,contraseña:contraseña}
    tabla.push(nuevo)
}

