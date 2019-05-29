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
  //relacion entre condiciones iniciales y raices
  // link https://introcs.cs.princeton.edu/java/95linear/GaussJordanElimination.java.html
  console.log(raiz);
  multipl(valorFn, n, raiz, grado);
  // console.log(obj);
  // for (var i = 0; i < n.length; i++) {
  //   if (raiz[0] == raiz[i]) {
  //     // fn= c1r^n +c2nr^n
  //     console.log("son raices con multiplicidad");
  //     fn[i] = [(raiz[i] ** n[i]), n[i] * (raiz[i] ** n[i]), valorFn[i]];
  //   }else {
  //     // fn = c1r1^n + c2r2^n
  //   }
  // }
  // console.log(fn);
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

function multipl(N, b, raiz, grado) {
  obj = raiz.count_value();
  var exponent = 0;
  var terN = new Array();
  for (let i = 0; i < grado; i++) {
    terN[i] = new Array(grado);    
  } 
  if (raiz.length == 1 && grado > 1) {
    for (var i = 0; i < grado; i++) {      
      for (let j = 0; j < grado; j++) {
        // debugger;                
        terN[i][j] = Math.pow(N[i], exponent) * Math.pow(raiz, N[i]);
        exponent +=1;
      }
      if (exponent == grado) {
        exponent = 0;        
      }      
    }
    return terN;  
  }
  //Un if si las raices son 2 iguales Hacerla con multiplicidad
  //otro if si las raices son diferentes
  //otro if si las raices tienen una raiz diferente y otras 2 raices iguales
  console.log(terN);
}

function gaussJordan(matrizEcu, arregloB) {
  const bLen = arregloB.length;
  var matrizAumentada = new Array();
  for (var i = 0; i < matrizEcu.length; i++) {
    matrizAumentada[i] = 1;
  }
}
// @link gauss: http://platea.pntic.mec.es/jcarias/mat/algebra/sistemas/01gausshtml.htm
