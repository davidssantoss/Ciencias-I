function generarGrafo(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  var cw = canvas.width = 500,
    cx = cw / 2;
  var ch = canvas.height = 500,
    cy = ch / 2;

  var dibujar = false;
  ctx.lineJoin = "round";
  canvas.addEventListener('click', function(evt) {
    dibujar = true;
    var m = oMousePos(canvas, evt);
    ctx.lineTo(m.x, m.y);
    ctx.stroke();
  }, false);
}
function oMousePos(canvas, evt) {
  var ClientRect = canvas.getBoundingClientRect();
  return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}
var count_click = 0;
function count_click_add() {
  count_click += 1;
  return count_click;
}

function crearMatrizA() {
  const tablaMatriz = document.getElementById('tablaMatriz');

  for (var i = 0; i < count_click+1; i++) {
    var tr = document.createElement("tr"); // Crea una nueva fila
    tr.classList.add('td');
		for (var j = 0; j < count_click+1; j++) {
      var td = document.createElement("td");
      td.classList.add('td');
      var label = document.createElement("label");
      label.classList.add('etq');
      if (i == 0 && j > 0) { // En la primera iteración se refiere al titulo de las columnas
        label.innerHTML = j; // Inserta dentro del casilla un label
      } else if (j == 0 && i > 0) { // En la primera iteración de la columna se refiere al titulo de la fila
        label.innerHTML = i; // Inserta dentro del casilla un label
      } else if (j == 0 && i == 0) { // Vacio en la posición 0,0 de la tabla
        label.innerHTML = "/";
      } else {
        var input = document.createElement("input");
        input.classList.add('matrizAdy');
        input.id = "texto" + (i-1) + (j-1);
        td.appendChild(input); // Inserta dentro del casilla un input
      }
      td.appendChild(label);
      tr.appendChild(td); // Inserta la columna dentro de la fila
		}
    tablaMatriz.appendChild(tr); // Inserta la fila en la tabla
	}
  setearValores();
}
function setearValores() {
  for (var i = 0; i < count_click; i++) {
    for (var j = 0; j < count_click; j++) {
      if (i == j) {
        document.getElementById('texto' + i + j).value = 0;
        document.getElementById('texto' + i + j).disabled = 'True';
      }else if (i > j) {
        document.getElementById('texto' + i + j).value = 'x';
        document.getElementById('texto' + i + j).disabled = 'True';
      }
      else{
        document.getElementById('texto' + i + j).value = 99;
      }
    }
  }
}
function getMatriz() {
  var matrizAdy = new Array(count_click);
  for (var i = 0; i < count_click; i++) {
    matrizAdy[i] = new Array(count_click);
  }
  for (var i = 0; i < count_click; i++) {
    for (var j = 0; j < count_click; j++) {
      var input = "texto" + i + j;
      if (i == j) {
        matrizAdy[i][j] = parseInt(document.getElementById(input).value);
      } else if (i < j) {
        matrizAdy[i][j] = parseInt(document.getElementById(input).value);
      }else{
        matrizAdy[i][j] = matrizAdy[j][i];
      }
    }
  }
  console.log(matrizAdy);
  caminoCorto(matrizAdy);
  return matrizAdy;
}
function caminoCorto(matriz) {
  var padres = new Array(count_click);
  var minimoValor = new Array(count_click);
  var marcador = new Array(count_click);
  // for (var i = 0; i < count_click; i++) {
  //   marcador[i] = 1;
  // }
  for (var i = 0; i < count_click; i++) {
    if (i == 0) {
      marcador[i] = 1;
    }else {
      marcador[i] = 0;
    }
    for (var j = 0; j < count_click; j++) {
      minimoValor[i] = matriz[i][0];
    }
  }
}
function buscarMin(arreglo) {
  var min = arreglo[1];
  for (var i = 0; i < arreglo.length; i++) {
    if (min > arreglo[i]) {
      min = arreglo[i];
    }
  }
  console.log(min);
  return min;
}
/*
@link
http://w3.unpocodetodo.info/lab/dibujar-a-mano-alzada.php
para mirar
enviar lo de musica al aardila807@gmail.com
*/
