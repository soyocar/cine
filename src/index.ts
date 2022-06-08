import "./styles.css";
//carga arreglo booleano si el mayor o igual a 0.5 es true caso contrario False
function cargarArreglo(butacasArreglo: boolean[], dimArreglo: number) {
  let indice: number;
  for (indice = 0; indice < dimArreglo; indice++) {
    butacasArreglo[indice] = Math.random() >= 0.5;
  }
}

function mostrarArreglo(butacasArreglo: boolean[], dimArreglo: number) {// con un console.log es suficiente pero esta bien que lo hagas asi para practicar.
  let indice: number;
  let linea: string = "";
  for (indice = 0; indice < dimArreglo; indice++) {
    linea += ` ${butacasArreglo[indice]}`;
  }
  console.log(linea);
}

function calcularButacasLibres(
  butacasArreglo: boolean[],
  dimArreglo: number
): number {
  let butacasLibres: number = 0;
  let indice: number;
  for (indice = 0; indice < dimArreglo; indice++) {
    if (butacasArreglo[indice] === false) {
      butacasLibres += 1;
    }
  }
  return butacasLibres;
}

//dimensiona el array con el valor introducido por el usuario
let dimArreglo: number = Number(prompt(`Indique la cantidad de butacas: `));
let cantidadButacasLibres: number = 0;
let butacasArreglo: boolean[] = new Array(dimArreglo);
cargarArreglo(butacasArreglo, dimArreglo);
mostrarArreglo(butacasArreglo, dimArreglo);
cantidadButacasLibres = calcularButacasLibres(butacasArreglo, dimArreglo);
console.log(`La cantidad de butacas libres son: ${cantidadButacasLibres}`);
//esta bien tu solucion!
