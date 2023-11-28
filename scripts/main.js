'use strict';

const ejercicios = {
    [1]: {
        prompt: "Preguntar nombre al usuario y saludarlo por su nombre.",
        function: function(values) {
            let nombre = prompt("Por favor digite su nombre.", "Miguel")
            return alert(`Bienvenido, ${nombre}!`)
        }
    },
    [2]: {
        prompt: "Preguntar nombre al usuario y saludarlo por su nombre. Si el usuario no escribe su nombre saludar: Hola, desconocido.",
        function: function(values) {
            let user = prompt("Por favor digite su usuario.")
            if (typeof(user) == "string" && user.length >= 3) {
                alert(`¡Bienvenido, ${user}!`) 
            } else {
                alert("¡Bienvenido, Desconocido!")
            }
        }
    },
    [3]: {
        prompt: "Leer nombre y apellido, saludar por nombre y apellido.",
        function: function(values) {
            let nombre = prompt("Por favor digite su nombre.")
            let apellido = prompt("Por favor digite su apellido.")
            alert(`¡Hola, ${nombre} ${apellido}!`)
        }
    },
    [4]: {
        prompt: "Pregunte al usuario si desea continuar, responder con hola o adiós.",
        function: function(values) {
            return 
        }
    },
    [5]: {
        prompt: "Leer nombre y edad, Mostrar si es o no mayor de edad.",
        function: function(values) {
            let nombre = prompt("¿Como te llamas?", "Miguel")
            let edad = prompt("¿Cuantos años tienes?", 21)
            if (nombre && edad || typeof(nombre) == "string" || typeof(edad) == "number") { // Ignorar los statements, son solo para testear.
                if (edad >= 18) {
                    alert("Eres mayor de edad.")
                } else {
                    alert("Eres menor de edad.")
                }
            }
        }
    },
    [6]: {
        prompt: "Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.",
        function: function(values) {
            let rol = prompt("¿Cual es tú rol en la empresa? EJ: admin, ventas, cliente", "admin")
            const roles = {
                admin: "Eres administrador, redirigiendo al sitio administrativo...",
                ventas: "Eres del sector de ventas, redirigiendo al sitio de marketing...",
                cliete: "Eres un cliente, redirigiendo al lobby..."
            }
            if (roles[rol]) {
                alert(roles[rol])
            } else {
                alert("Error: el rol digitado no es válido.")
            }
        }
    },
    [7]: {
        prompt: "Leer un número, mostrar el doble de n.",
        function: function(values) {
            return values[0] * 2
        }
    },
    [8]: {
        prompt: "Leer un número, mostrar la mitad de n.",
        function: function(values) {
            return values[0] / 2
        }
    },
    [9]: {
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
    [10]: {
        prompt: "Leer un número, mostrar si es par o impar.",
        function: function(values) {
            const answers = {
                [true]: 'ES PAR',
                [false]: 'ES IMPAR',
            };
            return `${values[0]} ${answers[values[0] % 2 == 0]}`;
        }
    },
    [11]: {
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
    [12]: {
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
    [13]: {
        prompt: "Leer dos números, mostrar la suma dividido en la resta.",
        function: function(values) {
            return (values[0] + values[1]) / values.length
        }
    },
    [14]: {
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
    [15]: {
        prompt: "Pedir un número, mostrar la suma total desde 1 hasta n.",
        function: function(values) {
            for (let i = 0; i <= values[0]; i++) { 
                console.log(i)
            }
            return "console"
        }
    },
    [16]: {
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
    [17]: {
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
    [18]: {
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
    [19]: {
        prompt: "Pedir un número, mostrar los números desde n hasta 0.",
        function: function(values) {
            for (let i = values[0]; i >= 0;) { 
                console.log(i)
                i--
            }
            return "console"
        }
    },
    [20]: {
        prompt: "Pedir un número, mostrar los números desde 0 hasta n.",
        function: function(values) {
            for (let i = 0; i >= values[0];) { 
                console.log(i)
                i++
            }
            return "console"
        }
    },
    [21]: {
        prompt: "Pedir un número, mostrar su tabla de multiplicar desde 0 hasta 10.",
        function: function(values) {
            for (let i = 0; i >= 10;) { 
                console.log(`${values[0]} x ${i} = ${values[0] * i}`)
                i++
            }
            return "console"
        }
    },
    [22]: {
        prompt: "Adivinar el número, leer un número y decir si adivinó el número.",
        function: function(values) {
            let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
            let numeroUsuario = null;
            console.log(numeroAleatorio)


            while (numeroUsuario != numeroAleatorio) {
                numeroUsuario = prompt("Escribe un numero entre el 1 y 10.")
            }
            alert(`Adivinaste, el número era ${numeroAleatorio}; ¡Felicidades!`)
        }
    },
}

let list = document.getElementById("case-list")
console.log(list)

for (let i = 1; i <= Object.keys(ejercicios).length; i++) {
    console.log(i, ejercicios[i], "yes")
    let li = document.createElement("li")
    // li.innerHTML = ejercicios[i].prompt | ESTE METODO TAMBIÉN FUNCIONA!
    li.appendChild(document.createTextNode(ejercicios[i].prompt))
    list.appendChild(li)
}

function alert_and_retry() {
    alert("Vuelta a intentarlo.")
    one()
}

const users = {
    ["admin"]: 123,
}

function usuario() {
    let user = prompt("Escriba su usuario.")
    let password = prompt("Escriba su contraseña.")

}

function one(n) {
    let numero = prompt("Bienvenido al portal de ejercicios JS, por favor indique el ejercicio a realizar:");

    // switch or ifs

    if (typeof(numero) == "number" || ejercicios[numero]) {
        let respuesta
        let matches

        if (numero > 6) {
            respuesta = prompt(ejercicios[numero].prompt)
            matches = respuesta.match(/\d+/g);
        } else {
            alert(ejercicios[numero].prompt)
        }
        

        let resultado = ejercicios[numero].function(matches)

        if (resultado && !(resultado == "console") == true && numero >= 7 || typeof(resultado) == "string" || typeof(resultado) == "number") {
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




