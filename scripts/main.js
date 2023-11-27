'use strict';

const ejercicios = {
    [1]: {
        prompt: "Leer un número, mostrar el doble de n.",
        function: function(values) {
            return values[0] * 2
        }
    },
    [2]: {
        prompt: "Leer un número, mostrar la mitad de n.",
        function: function(values) {
            return values[0] / 2
        }
    },
    [3]: {
        prompt: "Leer un número, mostrar si es positivo, negativo o cero.",
        function: function(values) {
            const answers = {
                [1]: 'ES POSITIVO',
                [0]: 'ES CERO',
                [-1]: 'ES NEGATIVO',
            };
            return answers[values[0] / values[0]]
        }
    },
    [4]: {
        prompt: "Leer un número, mostrar si es par o impar.",
        function: function(values) {
            const answers = {
                [true]: 'ES PAR',
                [false]: 'ES IMPAR',
            };
            return `${values[0]} ${answers[values[0] % 2 == 0]}`;
        }
    },
    [5]: {
        prompt: "Leer dos números, mostrar el mayor.",
        function: function(values) {
            let numero_mayor = null

            if (values[0] > values[1]) {
                numero_mayor = values[0]
            } else {
                numero_mayor = values[1]
            }

            return `${numero_mayor} ES EL NÚMERO MAYOR`;
        }
    },
    [6]: {
        prompt: "Leer dos números, mostrar operaciones básicas (+, -, x, /, %, cuadrado).",
        function: function(values) {

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
                console.log(`${operaciones[i][0]} ${values[0]} = ${Math.pow(values[0], 2)} | ${values[0]} = ${values[0] * values[0]}`)
            } else {
                let operation = `${values[0]} ${operaciones[i][1]} ${values[1]}`
                //console.log(operaciones[i][0], operaciones[i][1], eval(operation))
                console.log(`${operaciones[i][0]}: ${operation} ES IGUAL A: ${eval(operation)}`)
            }
        };
            return "console"
        }
    },
    [7]: {
        prompt: "Leer dos números, mostrar la suma dividido en la resta.",
        function: function(values) {
            return (values[0] + values[1]) / values.length
        }
    },
    [8]: {
        prompt: "Pedir un número y mostrar los números pares desde 1 hasta n.",
        function: function(values) {
            for (let i = 0; i <= values[0]; i++) { 
                if (i % 2 == 0) {
                    console.log(i)
                }
            }
            return "console"
        }
    },
    [9]: {
        prompt: "Pedir un número, mostrar la suma total desde 1 hasta n.",
        function: function(values) {
            for (let i = 0; i <= values[0]; i++) { 
                console.log(i)
            }
            return "console"
        }
    },
    [10]: {
        prompt: "Pedir un número, mostrar la suma de los números pares desde 1 hasta n.",
        function: function(values) {
            let number = 0
            for (let i = 0; i <= values[0]; i++) { 
                if (i % 2 == 0) {
                    number + i
                    console.log(number)
                }
            }
            return "console"
        }
    },
    [11]: {
        prompt: "Pedir un número, mostrar la suma de los números impares desde 1 hasta n.",
        function: function(values) {
            let number = 0
            for (let i = 0; i <= values[0]; i++) { 
                if (i % 2 == 1) {
                    number + i
                    console.log(number)
                }
            }
            return "console"
        }
    },
    [12]: {
        prompt: "Pedir un número, mostrar multiplos de 3 desde 1 hasta n.",
        function: function(values) {
            for (let i = 0; i <= values[0]; i++) { 
                if (i % 3 == 0) {
                    console.log(i)
                }
            }
            return "console"
        }
    },
    [13]: {
        prompt: "Pedir un número, mostrar los números desde n hasta 0.",
        function: function(values) {
            for (let i = values[0]; i >= 0;) { 
                console.log(i)
                i--
            }
            return "console"
        }
    },
    [14]: {
        prompt: "Pedir un número, mostrar los números desde 0 hasta n.",
        function: function(values) {
            for (let i = 0; i >= values[0];) { 
                console.log(i)
                i++
            }
            return "console"
        }
    },
    [15]: {
        prompt: "Pedir un número, mostrar su tabla de multiplicar desde 0 hasta 10.",
        function: function(values) {
            for (let i = 0; i >= 10;) { 
                console.log(`${values[0]} x ${i} = ${values[0] * i}`)
                i++
            }
            return "console"
        }
    },
}

function alert_and_retry() {
    alert("Vuelta a intentarlo.")
    one()
}


function one(n) {
    let numero = prompt("Bienvenido al portal de ejercicios JS, por favor indique el ejercicio a realizar:");

    // switch or ifs

    if (typeof(numero) == "number" || ejercicios[numero]) {
        let respuesta = prompt(ejercicios[numero].prompt)
        console.log(ejercicios[numero].prompt)

        let matches = respuesta.match(/\d+/g);

        let resultado = ejercicios[numero].function(matches)

        if (resultado && !(resultado == "console") == true && typeof(resultado) == "string" || typeof(resultado) == "number") {
            alert(resultado)
            // console.log(resultado)
            // console.log(!(resultado == "console") == true)
        } else if (resultado == "console") {
            alert("Revisar la consola.")
        }


    } else {
        alert_and_retry()
    }


}


function scrollReset() {
    window.scrollY = 0
}

// SEGUNDO

const form = document.getElementById('form');
const message = document.getElementById('message');

form.addEventListener('submit', function(input_text) {
    input_text.preventDefault();
    console.log(input_text);

    if (form.temp.value == "" && typeof(form.temp.value) == "string") {
        message.textContent = "Por favor vuelva a escribir la temperatura."
    } else {
        const conversion = ((form.temp.value - 32) * 5 / 9).toFixed(2) // Decimales toFixed
        message.textContent = `${form.temp.value}° Fahrenheit son: ${conversion}° Celsius`;
        form.temp.value = "";
    }
})






























//**


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

// // FUNCIONES

// const información = {
//     nombre: 'Miguel',
//     apellido: 'Arango',
//     edad: 21,
//     rol: 'admin',
// // }

// // Leer nombre y apellido, saludar por nombre y apellido.
// function nombre_apellido(values) {
//     const CAGADA = 'Bienvenido, ${values.nombre} ${values.apellido}!'
//     alert(`Bienvenido, ${values.nombre} ${values.apellido}!`);
// }
// nombre_apellido(información)

// // Pregunte al usuario si desea continuar, responder con hola o adiós.
// function continuar() {
//     alert("Desea continuar?")
// }
// continuar()

// // Leer nombre y edad, Mostrar si es o no mayor de edad.
// function nombre_edad(values) {
//     console.log(values.nombre, values.edad, values.edad >= 18)
// }
// nombre_edad(información)

// // Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.
// function rol(values) {
//     const rol = values.rol
//     if (rol == 'admin') {
//         return "ES ADMIN"
//     } else {
//         return (`ES ${rol}`)
//     }
// }
// alert(rol(información))

// // Leer un número, mostrar el doble de n.
// // Leer un número, mostrar la mitad de n.
// // Leer un número, mostrar si es positivo, negativo o cero.
// // Leer un número, mostrar si es par o impar.

// // modes: double, half, pos_or_neg, odd_or_even
// function numero(values, mode) {
//     if (typeof values == 'number') {
//         if (mode == 'double') {
//             return values * 2
//         } else if (mode == 'half') {
//             return values / 2
//         } else if (mode == 'pos_or_neg') {
//             const answers = {
//                 [1]: 'ES POSITIVO',
//                 [0]: 'ES CERO',
//                 [-1]: 'ES NEGATIVO',
//             };
//             return answers[(values / values)]
//         } else if (mode == 'odd_or_even') {
//             const answers = {
//                 [true]: 'ES PAR',
//                 [false]: 'ES IMPAR',
//             };
//             return (`${values} ${answers[values % 2 == 0]}`);
//         }
//     }
// }

// numero(5, 'pos_or_neg')

// // Leer dos números, mostrar el mayor.
// function mayor(valor1, valor2) {
//     let numero_mayor = null

//     if (valor1 > valor2) {
//         numero_mayor = valor1
//     } else {
//         numero_mayor = valor2
//     }

//     alert(`${numero_mayor} ES EL NÚMERO MAYOR`);
// }

// mayor(10, 20)

// // Leer dos números, mostrar operaciones básicas (+,-,x,/,%,cuadrado).

// const numeros = ['5', '25']

// function operaciones_basicas(values) {
//     const operaciones = [
//         ['suma', '+'],
//         ['resta', '-'],
//         ['multiplicación', '*'],
//         ['división', '/'],
//         ['residuo', '%'],
//         ['cuadrado', null],
//     ];


//     console.log(operaciones, operaciones.length)
//     for (let i = 0; i < operaciones.length; i++) {
//         console.log(i, operaciones[i][0])
//         if (i == 5 || operaciones[i][0] == "cuadrado") { // Math.pow()
//             console.log(`${operaciones[i][0]} ${values[0]} = ${Math.pow(values[0], 2)} | ${values[0]} = ${values[0] * values[0]}`)
//         } else {
//             let operation = `${values[0]} ${operaciones[i][1]} ${values[0]}`
//             //console.log(operaciones[i][0], operaciones[i][1], eval(operation))
//             console.log(`${operaciones[i][0]}: ${operation} ES IGUAL A: ${eval(operation)}`)
//         }
//     };


// }


// operaciones_basicas(numeros)
// // Leer dos números, mostrar la suma dividido en la resta.




