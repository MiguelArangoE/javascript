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

// const username = prompt("Bienvenido al portal de ejercicios JS, por favor ingrese su usuario:");

// function login(argumentos) {
//     console.log(argumentos)
//     console.log(typeof argumentos.user)
//     switch (true) {
//         case (argumentos.user == "admin" && argumentos.password == "123"):
//             return true;
//         case argumentos.user !== null && argumentos.user.length > 0:
//             return true;
//         case (argumentos.user == null):
//             alert("Bienvenido usuario desconocido");
//         default:
//             alert("Usuario / contraseña incorrectos.");
//             break;
//     }
// };


// // let prueba_de_datos_en_tabla = ['miguel', '123']
// // console.log(typeof prueba_de_datos_en_tabla)

// let login_info = { // datos en diccionario
//     user: username,
//     password: 123,
// };
// console.log(typeof login_info);

// if (login(login_info)) {
//     let notificacion = "Bienvenido, " + login_info.user + "!"
//     alert(notificacion)
//     document.write('<h1>' + notificacion + '</h1>')
//     // Comentarioss
// };

// FUNCIONES

const información = {
    nombre: 'Miguel',
    apellido: 'Arango',
    edad: 21,
    rol: 'admin',
}

// Leer nombre y apellido, saludar por nombre y apellido.
function nombre_apellido(params) {
    const CAGADA = 'Bienvenido, ${params.nombre} ${params.apellido}!'
    alert(`Bienvenido, ${params.nombre} ${params.apellido}!`);
}
nombre_apellido(información)

// Pregunte al usuario si desea continuar, responder con hola o adiós.
function continuar() {
    alert("Desea continuar?")
}
continuar()

// Leer nombre y edad, Mostrar si es o no mayor de edad.
function nombre_edad(params) {
    console.log(params.nombre, params.edad, params.edad >= 18)
}
nombre_edad(información)

// Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.
function rol(params) {
    const rol = params.rol
    if (rol == 'admin') {
        return "ES ADMIN"
    } else {
        return (`ES ${rol}`)
    }
}
alert(rol(información))

// Leer un número, mostrar el doble de n.
// Leer un número, mostrar la mitad de n.
// Leer un número, mostrar si es positivo, negativo o cero.
// Leer un número, mostrar si es par o impar.

// modes: double, half, pos_or_neg, odd_or_even
function numero(value, mode) {
    if (typeof value == 'number') {
        if (mode == 'double') {
            return value * 2
        } else if (mode == 'half') {
            return value / 2
        } else if (mode == 'pos_or_neg') {
            const answers = {
                [1]: 'ES POSITIVO',
                [0]: 'ES CERO',
                [-1]: 'ES NEGATIVO',
            };
            return answers[(value / value)]
        } else if (mode == 'odd_or_even') {
            const answers = {
                [true]: 'ES PAR',
                [false]: 'ES IMPAR',
            };
            return (`${value} ${answers[value % 2 == 0]}`);
        }
    }
}

numero(5, 'pos_or_neg')

// Leer dos números, mostrar el mayor.
function mayor(valor1, valor2) {
    let numero_mayor = null

    if (valor1 > valor2) {
        numero_mayor = valor1
    } else {
        numero_mayor = valor2
    }

    alert(`${numero_mayor} ES EL NÚMERO MAYOR`);
}

mayor(10, 20)

// Leer dos números, mostrar operaciones básicas (+,-,x,/,%,cuadrado).

const numeros = ['5', '25']

function operaciones_basicas(params) {
    const operaciones = [
        ['suma', '+'],
        ['resta', '-'],
        ['multiplicación', '*'],
        ['división', '/'],
        ['residuo', '%'],
        ['cuadrado', null],
    ];


    console.log(operaciones, operaciones.length)
    for (let i = 0; i < operaciones.length; i++) {
        console.log(i, operaciones[i][0])
        if (i == 5 || operaciones[i][0] == "cuadrado") { // Math.pow()
            console.log(`${operaciones[i][0]} ${params[0]} = ${Math.pow(params[0], 2)} | ${params[1]} = ${params[1] * params[1]}`)
        } else {
            let operation = `${params[0]} ${operaciones[i][1]} ${params[1]}`
            //console.log(operaciones[i][0], operaciones[i][1], eval(operation))
            console.log(`${operaciones[i][0]}: ${operation} ES IGUAL A: ${eval(operation)}`)
        }
    };


}


operaciones_basicas(numeros)
// Leer dos números, mostrar la suma dividido en la resta.




