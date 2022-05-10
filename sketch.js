// clase-08-ejemplo-p5js-texto
// codigo adaptado desde ejemplo base de p5-serialcontrol
// por montoyamoraga
// v0.0.1 mayo 2022
// hecho con p5.js y p5.serialport.js
// basado en ejemplo https://github.com/p5-serial/p5.serialport/tree/master/examples/basics

// declarar variable para puerto serial
let serial;

// declarar variable con nombre de puerto de Arduino
// actualizar con nombre del puerto en tu computador
let nombrePuerto = "COM3";

// declarar variable para datos recibidos
let datosRecibidos = "esperando...";

// setup() ocurre una vez al principio
function setup() {

  // lienzo del tamaño del navegador
  createCanvas(windowWidth, windowHeight);

  // crear instancia de puerto serial
  serial = new p5.SerialPort();

  // obtener una lista de los puertos disponibles
  serial.list();

  // asumimos que microcontrolador Arduino está conectado
  // y abrimos la conexión al puerto especificado
  serial.open(nombrePuerto);

  // callback cuando recibimos "connected"
  // correr función servidorConectado
  serial.on('connected', servidorConectado);
  
  // callback cuando recibimos "list"
  // corremos función listaRecibida
  serial.on('list', listaRecibida);

  //callback cuando recibimos "data"
  // corremos función recibirDatos
  serial.on('data', recibirDatos);

  // callback cuando recibimos "error"
  // corremos función recibirError
  serial.on('error', recibirError);

  // callback cuando recibimos "open"
  // corremos función recibirApertura
  serial.on('open', recibirApertura);

  // callback cuando recibimos "close"
  // corremos función recibirCierre
  serial.on('close', recibirCierre);

}

// función para indicar que servidor está conectado
function servidorConectado() {
  print("servidor conectado");
}

// Got the list of ports
function listaRecibida(lista) {

  print("lista de puertos seriales:");
  
  // iterar sobre cada elemento
  for (let i = 0; i < lista.length; i++) {

    // imprimir en consola
    print(i + " " + lista[i]);

  }
}

// Connected to our serial device
function recibirApertura() {
  print("puerto serial está abierto");
}

function recibirCierre(){
    print("puerto serial está cerrado");
    datosRecibidos = "puerto serial está cerrado";
}

// si hay un error, imprimirlo
function recibirError(error) {
  print(error);
}

// si tenemos datos desde el puerto serial
function recibirDatos() {
  
  // leer línea de datos de entrada
  let entrada = serial.readLine();

  // borrar espacios
  trim(entrada);

  // si la línea está vacía, no hacer nada
  if (!entrada) return;

  // imprimir los datos en consola
  console.log(entrada);
  
  // actualizar variable datosRecibidos
  datosRecibidos = entrada;
}

// draw() ocurre en bucle, después de setup()
function draw() {

  // fondo blanco
  background(255);

  // relleno negro
  fill(0);

  // texto datos recibidos en posición 10, 10
  text(datosRecibidos, 10, 10);
  
}
