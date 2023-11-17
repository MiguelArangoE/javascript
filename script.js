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

let username = prompt("Bienvenido al portal de ejercicios JS, por favor ingrese su usuario:")


function login(argumentos) {
    console.log(argumentos)
    console.log(typeof argumentos.user)
    switch (true) {
        case (argumentos.user == "admin" && argumentos.password == "123"):
            return true
        case argumentos.user !== null && argumentos.user.length > 3:
            return true
        case (argumentos.user == null):
            alert("Bienvenido usuario desconocido")
        default:
            alert("Usuario / contraseña incorrectos.")
            break;
    }
}

// et info_test = ['miguel', '123']

let login_info = {
    user: username,
    password: 123,
};

if (login(login_info)) {
    alert("Bienvenido, " + login_info.user + "!")
}

