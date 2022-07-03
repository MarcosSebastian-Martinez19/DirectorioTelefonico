// Directorio telefónico
// Necesitas almacenar tus contactos en una aplicación, para cada uno necesitas: nombre, número telefónico y correo electrónico.

let agregarContacto = prompt("Ingrese y para agendar contactos");
let directorioTelefonico = [];
let nombreContact;
let numContact;
let correoContact;
let newContact;

class Contacto{
    constructor(nombre, numeroTel, correoElec) {
        this.nombre = nombre,
        this.numero = numeroTel,
        this.correo = correoElec
    }
}
while (agregarContacto === "y") {
    
    nombreContact = prompt("Ingrese el nombre de su contacto")
    numContact = prompt("Ingrese el número de su contacto")
    correoContact = prompt("Ingrese el correo de su contacto")

    newContact = new Contacto(nombreContact, numContact, correoContact)
    directorioTelefonico.push(newContact)

    agregarContacto = prompt(`¿Quiere continuar ingresando contactos? o ¿Desea mostrar su agenda?
    y: Para continuar ingresando. s: Para mostrar`) 
}
for (let i = 1; i < directorioTelefonico.length; i++) {
    directorioTelefonico.push(i)
}
console.log(directorioTelefonico)