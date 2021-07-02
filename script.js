//Variables globales para mantener la consistencia del sistema
var tipo;
var numeroDePregunta = -1;
var resultado = 0;

//Preguntas y respuestas de Cine
let cine = [
    ["¿Quién fue director de la pelicula El laberinto del fauno?",
        "Alejandro Gonzalez Iñaritú",
        "Alfonso Cuarón",
        "Eugenio Derbez",
        "Guillermo del Toro", "Guillermo del Toro"
    ],
    ["¿Qué film ganó el Oscar a mejor película en 2017?",
        "La la Land: una historia de amor",
        "Moonligth",
        "Roma",
        "Historias cruzadas", "Moonligth"
    ],
    ["¿Qué peliculas son de Stanley Kubrick?",
        "Piscosis y Casablanca",
        "El resplandor y La naranja mecánica",
        "La naranja mecánica y Psicosis",
        "Casablanca y El resplandor", "El resplandor y La naranja mecánica"
    ],
    ["¿Cuál fue la primera pelicula de anime ganadora de un Oscar?",
        "Mi vecino Totoro",
        "Your name",
        "El viaje de Chihiro",
        "Papikra", "El viaje de Chihiro"
    ],
    ["¿Cuál fue la primera película a color?",
        "On with the show",
        "Chicken Little",
        "Blanca Nieves",
        "Rambo", "On with the show"
    ],
    ["¿Cuántos Oscar ganó la película Titanic?",
        "5",
        "14",
        "11",
        "8", "11"
    ],
    ["¿En qué año se estrenó la pelicula Matrix?",
        "2004",
        "1999",
        "1995",
        "2001", "1999"
    ],
    ["¿Cuál fue la película más taquillera de la historia?",
        "Avengers: Era de Ultrón",
        "Avatar",
        "Titanic",
        "Avengers: Endgame", "Avengers: Endgame"
    ],
    ["¿Quién dirigio la película Pulp Fiction Tiempos violentos?",
        "Stanley Kubrick",
        "Alfonso Cuarón",
        "Christopher Nolan",
        "Quentin Tarantino", "Quentin Tarantino"
    ],
    ["¿Qué pelicula de Harry Potter dirigió Alfonso Cuarón?",
        "La piedra filosofal",
        "El prisionero de Azkaban",
        "Principe mestizo",
        "El cáliz de fuego", "El prisionero de Azkaban"
    ]
];

//Preguntas y respuestas de de Turismo
let turismo = [
    ["¿En qué región de México se encuentran los cenotes?",
        "Monterrey",
        "Veracruz",
        "Peninsula de Yucatán",
        "Guadalajara", "Peninsula de Yucatán"
    ],
    ["¿Cuántos pueblos mágicos existen?",
        "125",
        "86",
        "110",
        "132", "132"
    ],
    ["¿Cuál es la bebida caracteristica de Guadalajara?",
        "Agua de coco",
        "Jamaica",
        "Refresco",
        "Tequila", "Tequila"
    ],
    ["¿Qué raza canina no es originaria de México?",
        "Calupoh",
        "Xoloitzcuincle",
        "Bulldog",
        "Chihuahueño", "Bulldog"
    ],
    ["¿Cuál es la principal ciudad productora de plata en México?",
        "Taxco",
        "Morelia",
        "León",
        "Tepic", "Taxco"
    ],
    ["¿Cuántas maravillas del mundo hay en México?",
        "4",
        "1",
        "7",
        "3", "1"
    ],
    ["¿Ciudad que se caracteriza por sus playas cristalinas?",
        "Cancún",
        "Acapulco",
        "Monterrey",
        "Ciudad de México", "Cancún"
    ],
    ["¿Qué significa la palabra México?",
        "Tierra azteca",
        "En el ombligo de la luna",
        "Tierra de valientes",
        "El ombligo del sol", "En el ombligo de la luna"
    ],
    ["¿En dónde se encuentra la Torre Latino?",
        "Estado de México",
        "Ciudad de México",
        "Yucatán",
        "Sinaloa", "Ciudad de México"
    ],
    ["¿En donde se encuentra La Quebrada?",
        "Huatulco",
        "Cancún",
        "Acapulco",
        "Guanajuato", "Acapulco"
    ]
];

//funcion que dado el nombre de un usuario lo saluda y pasa a la pantalla de seleccionar categoria
function reemplazar() {
    var name = document.getElementById("nombre").value;
    var titulo = document.getElementById("titulo");
    var tituloMayus = "¡Hola " + name + "!"
    titulo.innerHTML = tituloMayus.bold()
    var presentacion = document.getElementById('presentacion');
    presentacion.style.display = "none";
    var seleccionaCategoria = document.getElementById('seleccionaCategoria');
    seleccionaCategoria.style.display = "inline";

}

//funcion que dada la seleccion de un usuario nos manda a las preguntas de cine o turismo
function seleccionaCategoria() {
    document.getElementById('seleccionaCategoria').style.display = "none"
    if ((document.getElementById('r1').checked)) {
        tipo = "cine"
    } else {
        tipo = "turismo";
    }
    siguientePregunta();
    document.getElementById('preguntas').style.display = "inline";
}

//funcion que pasa de una pregunta a otra, cargando la informacion de las preguntas y verifica el resultado de la pregunta en cuestion
function siguientePregunta() {
    //verificamos si la respuesta en la pregunta anterior fue correcta o no
    if (numeroDePregunta >= 0) {
        verificaPregunta();
    }
    if (numeroDePregunta < cine.length - 1) {
        numeroDePregunta++;
        if (tipo == "cine") {
            document.getElementById("pregunta").innerHTML = cine[numeroDePregunta][0];
            document.getElementById("respuestaUno").innerHTML = cine[numeroDePregunta][1];
            document.getElementById("respuestaRadioUno").value = cine[numeroDePregunta][1];
            document.getElementById("respuestaDos").innerHTML = cine[numeroDePregunta][2];
            document.getElementById("respuestaRadioDos").value = cine[numeroDePregunta][2];
            document.getElementById("respuestaTres").innerHTML = cine[numeroDePregunta][3];
            document.getElementById("respuestaRadioTres").value = cine[numeroDePregunta][3];
            document.getElementById("respuestaCuatro").innerHTML = cine[numeroDePregunta][4];
            document.getElementById("respuestaRadioCuatro").value = cine[numeroDePregunta][4];

        }
        //tipo turismo
        else {
            document.getElementById("pregunta").innerHTML = turismo[numeroDePregunta][0];
            document.getElementById("respuestaUno").innerHTML = turismo[numeroDePregunta][1];
            document.getElementById("respuestaRadioUno").value = turismo[numeroDePregunta][1];
            document.getElementById("respuestaDos").innerHTML = turismo[numeroDePregunta][2];
            document.getElementById("respuestaRadioDos").value = turismo[numeroDePregunta][2];
            document.getElementById("respuestaTres").innerHTML = turismo[numeroDePregunta][3];
            document.getElementById("respuestaRadioTres").value = turismo[numeroDePregunta][3];
            document.getElementById("respuestaCuatro").innerHTML = turismo[numeroDePregunta][4];
            document.getElementById("respuestaRadioCuatro").value = turismo[numeroDePregunta][4];

        }
    }
    //se terminaron las preguntas
    else {
        document.getElementById("preguntas").style.display = "none";
        document.getElementById("resultado").innerHTML = resultado;
        document.getElementById("resultados").style.display = "inline";
    }

}

function verificaPregunta() {
    if (tipo == "cine") {
        if (document.getElementById("respuestaRadioUno").checked) {
            if (document.getElementById("respuestaRadioUno").value == cine[numeroDePregunta][5]) {
                resultado = resultado + 1;
            }
        }
        if (document.getElementById("respuestaRadioDos").checked) {
            if (document.getElementById("respuestaRadioDos").value == cine[numeroDePregunta][5]) {
                resultado++;
            }
        }
        if (document.getElementById("respuestaRadioTres").checked) {
            if (document.getElementById("respuestaRadioTres").value == cine[numeroDePregunta][5]) {
                resultado++;
            }
        }
        if (document.getElementById("respuestaRadioCuatro").checked) {
            if (document.getElementById("respuestaRadioCuatro").value == cine[numeroDePregunta][5]) {
                ++resultado;
            }
        }
    }
    //tipo turismo
    else {
        if (document.getElementById("respuestaRadioUno").checked) {
            if (document.getElementById("respuestaRadioUno").value == turismo[numeroDePregunta][5]) {
                resultado++;
            }
        }
        if (document.getElementById("respuestaRadioDos").checked) {
            if (document.getElementById("respuestaRadioDos").value == turismo[numeroDePregunta][5]) {
                resultado++;
            }
        }
        if (document.getElementById("respuestaRadioTres").checked) {
            if (document.getElementById("respuestaRadioTres").value == turismo[numeroDePregunta][5]) {
                resultado++;
            }
        }
        if (document.getElementById("respuestaRadioCuatro").checked) {
            if (document.getElementById("respuestaRadioCuatro").value == turismo[numeroDePregunta][5]) {
                resultado++;
            }
        }
    }
}

function reiniciarJuego() {
    numeroDePregunta = -1;
    resultado = 0;
    document.getElementById("resultados").style.display = "none";
    document.getElementById('seleccionaCategoria').style.display = "inline"
}