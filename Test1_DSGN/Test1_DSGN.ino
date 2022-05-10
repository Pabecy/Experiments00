// ej_01_arduino_envia_pulsador_potenciometro
// por montoyamoraga
// v0.0.1 mayo 2022
// hecho con Arduino Uno y IDE 1.8.19
// basado en Examples/04. Communication/VirtualColorMixer

// variable para pin pulsador
const int pinPulsador1 = 7;
const int pinPulsador2 = 8;

// variable para almacenar lectura digital
int valorPulsador1 = 0;
int valorPulsador2 = 0;

// variable para pin potenciometro
const int pinPotenciometro1 = A0;
const int pinPotenciometro2 = A5;

// variable para almacenar lectura analoga
int valorPotenciometro1 = 0;
int valorPotenciometro2 = 0;

void setup() {

  // iniciar comunicacion serial
  Serial.begin(9600);

  // definir pin pulsador como entrada digital
  pinMode(pinPulsador1, INPUT);
  pinMode(pinPulsador2, INPUT);

}

void loop() {

  // leer valores digitales y analogos
  valorPulsador1 = digitalRead(pinPulsador1);
  valorPulsador2 = digitalRead(pinPulsador2);
  valorPotenciometro1 = analogRead(pinPotenciometro1);
  valorPotenciometro2 = analogRead(pinPotenciometro2);

  // enviar valores por puerto serial
  // separados por coma y al final nueva linea
  Serial.print(valorPulsador1);
  Serial.print(",");
  Serial.print(valorPulsador2);
  Serial.print("/");
  Serial.print(valorPotenciometro1);
  Serial.print(",");
  Serial.print(valorPotenciometro2);
  Serial.println("");

}
