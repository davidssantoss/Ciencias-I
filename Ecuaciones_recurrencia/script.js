function crearInputs() {
  crearCoeficientes();
  crearCondicionesIniciales();
}
function mostrar() {
  getCondiciones();
  getCoeficientes();
  convertirEcuacion();
  calcularRaices();
  establecerFn();
}
function crearCoeficientes() {
  var n = parseInt(document.getElementById('cantInp').value);
  const divPrimero = document.getElementById('txtCreados');
  const divSegundo = document.getElementById('coef');
  for (var i = 0; i <= n; i++) {
    var input = document.createElement("input");
    input.id = "coeficiente" + i ;
    input.classList.add('txt');
    divPrimero.insertBefore(input, divSegundo);
  }
}
function crearCondicionesIniciales() {
  var n = parseInt(document.getElementById('cantInp').value);
  const divPrimero = document.getElementById('textos');
  const divSegundo = document.getElementById('condiciones');
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < 2; j++) {
      var input = document.createElement("input");
      input.id = "condicion" + i + j;
      input.classList.add('txt');
      divPrimero.insertBefore(input, divSegundo);
    }
    var println = document.createElement("br");
		divPrimero.insertBefore(println, divSegundo);
  }
}
function getCoeficientes() {
  var n = parseInt(document.getElementById('cantInp').value);
  var coefArr = new Array();
  for (var i = 0; i <= n; i++) {
    var input = "coeficiente" + i;
    coefArr[i] = parseInt(document.getElementById(input).value);
  }
  return coefArr;
}
function getCondiciones() {
  var n = parseInt(document.getElementById('cantInp').value);
  var mCond = new Array();
  for (var i = 0; i < n; i++) {
    mCond[i] = new Array(2);
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < 2; j++) {
      var input = "condicion" + i + j;
      mCond[i][j] = parseInt(document.getElementById(input).value);
    }
  }
  return mCond;
}

var ecuacion = new Array();

function convertirEcuacion() {
  var x = getCoeficientes();
  var exponente = x.length;
  for (var i = 0; i < x.length ; i++) {
    if (i != x.length - 1) {
      exponente -= 1;
      ecuacion[i] = x[i] + "x^" + exponente + "+";
    }else {
      ecuacion[i] = x[i];
    }
  }
  return ecuacion;
}

function calcularRaices() {
  var ec = ecuacion.join('');
  var raiz = new Array();
  var num, den;
  var y = nerdamer('roots(' + ec + ')');
  for (var i = 0; i < y.symbol.elements.length; i++) {
    if (y.symbol.elements[i].value == "i") {
      alert("son raices imaginarias");
    }else if (y.symbol.elements[i].value == "#") {
      console.log("son raices reales");
      num = y.symbol.elements[i].multiplier.num;
      den = y.symbol.elements[i].multiplier.den;
      raiz[i] = parseFloat((num / den).toFixed(3));
    }else{
      console.log("no son raices reales");
    }
  }
  return raiz
}

var fn = new Array();
function establecerFn() {
  var n = getN();
  var valorFn = getFn();
  var raiz = calcularRaices();
  var grado = parseInt(document.getElementById('cantInp').value);
  // link https://introcs.cs.princeton.edu/java/95linear/GaussJordanElimination.java.html
  sistemadeEcu(valorFn, n, raiz, grado);
}

var arr2 = new Array();
function getFn() {
  var n = getCondiciones();
  for (var i = 0; i < n.length; i++) {
    for (var j = 1; j < 2; j++) {
      arr2[i] = n[i][j];
    }
  }
  return arr2;
}


var arr = new Array();
function getN() {
  var n = getCondiciones();
  for (var i = 0; i < n.length; i++) {
    for (var j = 0; j < 1; j++) {
      arr[i] = n[i][j];
    }
  }
  return arr;
}

Array.prototype.count_value = function(){

  var count = {};
  for(var i = 0; i < this.length; i++){
  if(!(this[i] in count))count[this[i]] = 0;
  count[this[i]]++;
  }
  return count;
}

function sistemadeEcu(N, b, raiz, grado) {
  obj = raiz.count_value();
  console.log(obj);
  
  var exponent = 0;
  var terN = new Array();
  for (let i = 0; i < grado; i++) {
    terN[i] = new Array(grado);    
  } 
  //una raiz de un polinomio de grado mayor a 1
  if (raiz.length == 1 && grado > 1) {
    for (var i = 0; i < grado; i++) {      
      for (var j = 0; j < grado; j++) {                        
        terN[i][j] = Math.pow(N[i], exponent) * Math.pow(raiz, N[i]);
        exponent +=1;
      }
      if (exponent == grado) {
        exponent = 0;        
      }      
    }    
    return terN;  
  }
  var cantRaicesIguales = Object.values(obj);
  var raicesDiferentes = Object.keys(obj);
  // Raices son 2 iguales
  if (cantRaicesIguales == 2 | cantRaicesIguales >= 3) {
    for (var i = 0; i < grado; i++) {
      for (var j = 0; j < grado; j++) {
        terN[i][j] = Math.pow(N[i], exponent) * Math.pow(raiz[i], N[i]);
        exponent +=1;          
      }
      if (exponent == grado) {
        exponent = 0;        
      }       
    }
    return terN;  
  }
  //raices no multiplicidad
  if (cantRaicesIguales.every(uno) == true) {
    for (var i = 0; i < grado; i++) {
      for (var j = 0; j < grado; j++) {
        terN[i][j] = Math.pow(raiz[j], N[i]);
      }
    }
    var bAr = getN();    
    console.log(gaussJordan(terN, bAr) );
    return terN;
  }
  //if una raiz y dos raices iguales
}
function uno(valor) {
  return valor = 1;
}
const nn = 0;
const a  = new Array();
const EPSILON = 1e-8;
function gaussJordan(matrizEcu, arregloB) {
  const bLen = arregloB.length;
  var matrizAumentada = new Array(bLen);
  for (var i = 0; i < matrizEcu.length; i++) {
    matrizAumentada[i] = new Array(bLen + bLen + 1);
  }
  for (var i = 0; i < bLen; i++) {
    for (var j = 0; j < bLen; j++) {
      matrizAumentada[i][j] = matrizEcu[i][j];
    }
  }
  for (var i = 0; i < bLen; i++) {
    matrizAumentada[i][bLen + i] = 1.0;    
  }
  for(var i = 0; i < bLen; i++){
    matrizAumentada[i][bLen + bLen];
  }
  resolver();
  console.log("check(matrizEcu, arregloB)");  
}
function resolver() {
  for (var p = 0; p < nn; p++) {
    var max = p;
    for (var i = p + 1; i < N; i++) {
      if (Math.abs(a[i][p]) > Math.abs(a[max][p]) ) {
        max = i;
      }
    }
    cambiarFilas(p, max);
    if (Math.abs(a[p][p] <= EPSILON)) {
      continue;      
    }
    pivot(p, p);
  }
}
function cambiarFilas(fila1, fila2) {
  var temp = new Array(a[row1]);
  a[fila1] = a[fila2];
  a[fila2] = temp;
}
function pivot(p, q) {
  for (var i = 0; i < nn; i++) {
    var alpha = a[i][q] / a[p][q];
    for (var j = 0; j < nn + nn; j++) {
      if (i != p && j != q) {
        a[i][j] -= alpha * a[p][j];
      }      
    }    
  }
  for (var i = 0; i < nn; i++) {
    if (i != p) {
      a[i][q] = 0.0;
    }
  }
  for (var j = 0; j < nn + nn; j++) {
    if (j != q) {
      a[p][j] /= a[p][q];
    }
  }
  a[p][q] = 1.0;
}
//faltaria el metodo mostrar() del link bg #fff


// @link gauss: http://platea.pntic.mec.es/jcarias/mat/algebra/sistemas/01gausshtml.htm
// @link gauss: https://www.geeksforgeeks.org/program-for-gauss-jordan-elimination-method/
