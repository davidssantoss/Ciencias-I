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
  console.log(0*6);
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
function establecerFn() {
  var n = getN();
  var valorFn = getFn();
  var raiz = calcularRaices();
  var fn = new Array();
  var c = "c";
  for (var i = 0; i < raiz.length; i++) {
    if (raiz[0] == raiz[i]) {
      // fn= c1r^n +c2nr^n
      console.log("son raices con multiplicidad");
      fn[i] = c + "* " + (raiz[i] ** n[i]) + " + " + c + "* " + n[i] * (raiz[i] ** n[i]) + " = " + valorFn[i];
      console.log(fn);
    }else {
      // fn = c1r1^n + c2r2^n
    }
  }
}

var arr2 = new Array();
function getFn() {
  var n = getCondiciones();
  for (var i = 0; i < n.length; i++) {
    for (var j = 1; j < 2; j++) {
      arr2[i] = n[i][j];
    }
  }
  console.log(arr2);
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