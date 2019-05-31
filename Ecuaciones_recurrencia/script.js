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
function ifRaizUndefined(raiz){
  if (raiz != 'undefined') {
    return true;
  }
}
function sistemadeEcu(N, b, raiz, grado) {
  obj = raiz.count_value();
  var cantRaicesIguales2 = Object.keys(obj);
  var filtrado = raiz.filter(ifRaizUndefined);
  console.log(filtrado);  
  var exponent = 0;
  var terN = new Array();
  for (let i = 0; i < grado; i++) {
    terN[i] = new Array(grado);    
  } 
  //una raiz de un polinomio de grado mayor a 1
  if (filtrado.length == 1 && grado > 1) {
    for (var i = 0; i < grado; i++) {      
      for (var j = 0; j < grado; j++) {                        
        terN[i][j] = Math.pow(N[i], exponent) * Math.pow(filtrado, N[i]);
        exponent +=1;
      }
      if (exponent == grado) {
        exponent = 0;        
      }      
    }
    var ctes = mAumentada(terN, grado, b);
    calcularEc(ctes, grado);
    return terN;  
  }
  var cantRaicesIguales = Object.values(obj);      
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
      var ctes = mAumentada(terN, grado, b);
      calcularEc(ctes, grado);    
    }
    return terN;  
  }
  //raices no multiplicidad
  if (cantRaicesIguales.every(uno) == true) {
    for (var i = 0; i < grado; i++) {
      for (var j = 0; j < grado; j++) {
        terN[i][j] = Math.pow(filtrado[j], N[i]),  b[i];                
      }
    }
    var ctes = mAumentada(terN, grado, b);
    calcularEc(ctes, grado);
    return terN;
  }
  var ctes = mAumentada(terN, grado, b);
  calcularEc(ctes, grado);
  //if una raiz y dos raices iguales        
}
function mAumentada(matriz, grado, vectorSol) {
  console.log(matriz);  
  var matrizAum = new Array();
  for(var k = 0; k < grado; k++){
    matrizAum[k] = new Array(grado + 1);
  }  
  for(var i = 0; i < grado; i++){
    for(var j = 0; j < grado + 1; j++){
        matrizAum[i][j] = matriz[i][j];         
        if (j == grado) {
          matrizAum[i][j] = vectorSol[i];
        }
    }
  }
  return matrizAum
}
function uno(valor) {
  return valor = 1;
}
//Eliminacion por Gaus Jordan 
function gauss_Jordan(a, n){
  var i, j, k = 0, c, flag = 0, m = 0;
  var pro = 0;
  for(i = 0; i < n; i++){
    if (a[i][i] == 0) {
      c = 1;
      while(a[i + c][i] == 0 && (i +c) < n){
        c++;
      }
      if ((i + c) == n) {
        flag = 1;
        break;
      }
      for(j = 1, k = 0; k <= n; k++){
        var temp = a[j][k];
        a[j][k] = a[j + c][k];
        a[j + c][k] = temp;
      }
    }
    for(j = 0; j < n; j++){
      if (i != j) {
        var p = a[j][i] / a[i][i];
        for(k = 0; k <=n; k++){
          a[j][k] = a[j][k] - (a[i][k]) * p;
        }
      }
    }
  }
  return flag;
}
var constantes = new Array();
function mostarResultado(a, n, flag){
  var raiz = calcularRaices();  
  var filtrado = raiz.filter(ifRaizUndefined);
  console.log("El resultado es: ");
  if (flag == 2) {
    console.log("Existe infinitas soluciones");    
  }
  else if (flag == 3){
    console.log("no existe solucion");    
  }
  
  if(filtrado.length == 1){
    for(var i = 0; i < n; i++){
      // console.log(a[i][n] / a[i][i] + " ");      
      constantes[i] = (a[i][n] / a[i][i] + " * " + filtrado+ "^ " + "n" + i);
      console.log(constantes);      
      document.getElementById('ecuacion').value = constantes;
    }
  }
  else if(filtrado.length > 1){
    for(var i = 0; i < n; i++){
      console.log(a[i][n] / a[i][i] + " ");      
      constantes[i] = (a[i][n] / a[i][i] + " * " + filtrado[i]+ "^ " + "n");
      console.log(constantes);      
      document.getElementById('ecuacion').value = constantes;
    }
  }        
}
function verificarMatriz(a, n, flag) {
  var i, j, sum;
  flag = 3;
  for(i = 0; i < n; i++){
    sum = 0;
    for(j = 0; j < n; j++){
      sum = suma + a[i][j];
    }
    if (sum == a[i][j]) {
      flag = 2;
    }
  }
  return flag;
}
function calcularEc(matriz, grado){
  var flag = 0;
  flag = gauss_Jordan(matriz, grado);
  if (flag == 1) {
    flag = verificarMatriz(matriz, grado, flag);
  }
  mostarResultado(matriz, grado, flag);
}
