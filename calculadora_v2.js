const readline = require('readline');

class Calculadora {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this.iniciarCalculadora();
  }

  iniciarCalculadora() {
    this.rl.question('Ingrese la operación a realizar (+, -, *, /): ', (operador) => {
      this.rl.question('Ingrese el primer número: ', (numero1Input) => {
        this.rl.question('Ingrese el segundo número: ', (numero2Input) => {
          const numero1 = parseFloat(numero1Input);
          const numero2 = parseFloat(numero2Input);

          // Verificar si los números ingresados son válidos (is not a Number)
          if (isNaN(numero1) || isNaN(numero2)) {
            console.log("Por favor, ingrese números válidos.");
          } else {
            // Realizar la operación según el operador ingresado
            const resultado = this.realizarOperacion(operador, numero1, numero2);
            console.log("El resultado es: " + resultado);
          }

          this.rl.close();
        });
      });
    });
  }

  realizarOperacion(operador, numero1, numero2) {
    switch (operador) {
      case "+":
        return numero1 + numero2;
      case "-":
        return numero1 - numero2;
      case "*":
        return numero1 * numero2;
      case "/":
        if (numero2 !== 0) {
          return numero1 / numero2;
        } else {
          console.log("No se puede dividir por cero.");
          return undefined;
        }
      default:
        console.log("Operador no válido.");
        return undefined;
    }
  }
}


const calculadora = new Calculadora();