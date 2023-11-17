'use strict'


// const dataSet = [
//     ['admin', 'https://amd.com/admin']
//     ['cliente', 'https://amd.com/user']
// ]

// new DataTable('#ejemplo', {
//     columns: [
//         {title: 'website'},
//         {title: 'link'}
//     ],
//     dataSet
// });

const username = prompt("Bienvenido al portal de ejercicios JS, por favor ingrese su usuario:");

function login(argumentos) {
    console.log(argumentos)
    console.log(typeof argumentos.user)
    switch (true) {
        case (argumentos.user == "admin" && argumentos.password == "123"):
            return true;
        case argumentos.user !== null && argumentos.user.length > 0:
            return true;
        case (argumentos.user == null):
            alert("Bienvenido usuario desconocido");
        default:
            alert("Usuario / contraseña incorrectos.");
            break;
    }
};

// let prueba_de_datos_en_tabla = ['miguel', '123']
// console.log(typeof prueba_de_datos_en_tabla)

let login_info = { // datos en diccionario
    user: username,
    password: 123,
};
console.log(typeof login_info);

if (login(login_info)) {
    let notificacion = "Bienvenido, " + login_info.user + "!"
    alert(notificacion)
    document.write('<h1>' + notificacion + '</h1>')
    // Comentarioss
};

