function crearMatrizA() {
  var mf1 = parseInt(document.getElementById('cantFilM1').value);
  const divtextoCreados = document.getElementById('txtCreados');
  const divmatrizGen1 = document.getElementById('MG1');
  for (var i = 0; i < mf1; i++) {
		for (var j = 0; j < mf1; j++) {
			var input = document.createElement("input");
			input.id = "texto" + i + j;
      input.classList.add('matriz2');
      divtextoCreados.insertBefore(input, divmatrizGen1);
		}
		var println = document.createElement("br");
		divtextoCreados.insertBefore(println, divmatrizGen1);
	}
}
function crearMatrizB() {
  var mf2 = parseInt(document.getElementById('cantFilM2').value);
  const divtextoCreados2 = document.getElementById('txtCreadosM2');
  const divmatrizGen2 = document.getElementById('MG2');
  for (var i = 0; i < mf2; i++) {
		for (var j = 0; j < mf2; j++) {
			var input = document.createElement("input");
			input.id = "texto2" + i + j;
      input.classList.add('matriz2');
      divtextoCreados2.insertBefore(input, divmatrizGen2);
		}
		var println = document.createElement("br");
		divtextoCreados2.insertBefore(println, divmatrizGen2);
	}
}
function determinar2n(num) {
  const dos = 2;
  var res = Math.log10(num)/Math.log10(dos);
  if (res % 1 == 0){
    return true;
  }
  else {
    return false;
  }
}
function reglaMultiplicar() {
  var mf1 = parseInt(document.getElementById('cantFilM1').value);
  var mf2 = parseInt(document.getElementById('cantFilM2').value);
  if (mf1 != mf2) {
    return false;
  }else{
    return true;    
  }
}

function multiplicar() {
  var mf1 = parseInt(document.getElementById('cantFilM1').value);
  var mf2 = parseInt(document.getElementById('cantFilM2').value);
  if (reglaMultiplicar() == true) {
    if((determinar2n(mf1) && determinar2n(mf2)) == true){
      console.log("Multiplicar");      
    }
    else{
      console.log("Cómo hacerlo");      
    }
  }else{
    alert("¡¡ERROR!! \n Para multiplicar dos matrices, \n el numero de columnas de la primer matriz\ndebe ser igual al numero de las de la segunda matriz");
    console.log("PAILAS CHINAZO!");
  }  
}
function getMatrizA() {
  var n = parseInt(document.getElementById('cantFilM1').value);
  var mA = new Array(n);
  for (var i = 0; i < n; i++) {
    mA[i] = new Array(n);
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var input = "texto" + i + j;
      mA[i][j] = parseInt(document.getElementById(input).value);
    }
  }
  return mA;
}
function getMatrizB() {
  var n = parseInt(document.getElementById('cantFilM2').value);
  var mB = new Array(n);
  for (var i = 0; i < n; i++) {
    mB[i] = new Array(n);
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var input = "texto2" + i + j;
      mB[i][j] = parseInt(document.getElementById(input).value);			
    }    
  }
  return mB;
}
function hacerTodo() {
  multiplicar();
  getMatrizA();
  getMatrizB();
  subdividirMatrices(getMatrizA(), getMatrizB());
  
}
function subdividirMatrices(matrizA, matrizB) {
  var n = parseInt(document.getElementById('cantFilM1').value);
  var sizeC = n;
  var tam = sizeC / 2;
  var matrizC = new Array(n);
  for(var i = 0; i < n; i++){
    matrizC[i] = new Array(n);
  }
  if(n == 1){
    const divmatrizC = document.getElementById('matrizC');
    const divmatrizGen3 = document.getElementById('MG3');
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        matrizC[i][j] = matrizA[i][j] * matrizB[i][j];
        var input = document.createElement("input");
        input.id = "texto3";
        input.classList.add('matriz2');
        divmatrizC.insertBefore(input, divmatrizGen3);         
      }
      var println = document.createElement("br");
		  divmatrizC.insertBefore(println, divmatrizGen3);
    }
    document.getElementById('texto3').value = matrizC;

  }
  else{
    var seccion = parseInt(Math.pow(2, tam));
    //Arreglos de resultados de A y B
    var resA = new Array(tam);
    for(var i = 0; i < tam; i++){
      resA[i] = new Array(tam);
    }
    var resB = new Array(tam);
    for(var i = 0; i < tam; i++){
      resB[i] = new Array(tam);
    }
    //Submatrices de A, A11, A12, A21 y A22
    var ma11 = new Array(seccion);
    for(var i = 0; i < seccion; i++){
      ma11[i] = new Array(seccion);
    }
    var ma12 = new Array(seccion);
    for(var i = 0; i < seccion; i++){
      ma12[i] = new Array(seccion);
    }
    var ma21 = new Array(seccion);
    for(var i = 0; i < seccion; i++){
      ma21[i] = new Array(seccion);
    }
    var ma22 = new Array(seccion);
    for(var i = 0; i < seccion; i++){
      ma22[i] = new Array(seccion);
    }
    //submatrices de B, B11, B12, B21 y B22
    var mb11 = new Array(seccion);
    for(var i = 0; i < seccion; i++){
      mb11[i] = new Array(seccion);
    }
    var mb12 = new Array(seccion);
    for(var i = 0; i < seccion; i++){
      mb12[i] = new Array(seccion);
    }
    var mb21 = new Array(seccion);
    for(var i = 0; i < seccion; i++){
      mb21[i] = new Array(seccion);
    }
    var mb22 = new Array(seccion);
    for(var i = 0; i < seccion; i++){
      mb22[i] = new Array(seccion);
    }
    for (var i = 0; i < tam; i++){
      for (var j = 0; j < tam; j++) {      
        ma11[i][j] = matrizA[i][j];
        ma12[i][j] = matrizA[i][j + tam];
        ma21[i][j] = matrizA[i + tam][j];
        ma22[i][j] = matrizA[i + tam][j + tam];
        mb11[i][j] = matrizB[i][j];
        mb12[i][j] = matrizB[i][j + tam];
        mb21[i][j] = matrizB[i + tam][j];
        mb22[i][j] = matrizB[i + tam][j + tam];
        
      }
    }
    //p1 a p7
    var p1 = new Array(n); 
    for(var i = 0; i < n; i++){
      p1[i] = new Array(n);
    }
    var p2 = new Array(n); 
    for(var i = 0; i < n; i++){
      p2[i] = new Array(n);
    }
    var p3 = new Array(n); 
    for(var i = 0; i < n; i++){
      p3[i] = new Array(n);
    }
    var p4 = new Array(n); 
    for(var i = 0; i < n; i++){
      p4[i] = new Array(n);
    }
    var p5 = new Array(n); 
    for(var i = 0; i < n; i++){
      p5[i] = new Array(n);
    }
    var p6 = new Array(n); 
    for(var i = 0; i < n; i++){
      p6[i] = new Array(n);
    }
    var p7 = new Array(n); 
    for(var i = 0; i < n; i++){
      p7[i] = new Array(n);
    }
    //subdivisiones de la matriz C
    var mc11 = new Array(n); 
    for(var i = 0; i < n; i++){
      mc11[i] = new Array(n);
    }
    var mc12 = new Array(n); 
    for(var i = 0; i < n; i++){
      mc12[i] = new Array(n);
    }
    var mc21 = new Array(n); 
    for(var i = 0; i < n; i++){
      mc21[i] = new Array(n);
    }
    var mc22 = new Array(n); 
    for(var i = 0; i < n; i++){
      mc22[i] = new Array(n);
    }
    
    // M1
    p1 = multiplicarMatrices2(sumarMatrices(ma11, ma22), sumarMatrices(mb11, mb22));
    console.log("valor de p1: " + p1);
    // M2
    p2 = multiplicarMatrices2(sumarMatrices(ma21, ma22), mb11);
    console.log("valor de p2: " + p2);
    // M3    
    p3 = multiplicarMatrices(ma11, restarMatrices(mb12, mb22));
    console.log("valor de p3: " + p3);
    // M4
    p4 = multiplicarMatrices(ma22, restarMatrices(mb21, mb11));
    console.log("valor de p4: " + p4);
    // M5
    p5 = multiplicarMatrices2(sumarMatrices(ma11, ma12), mb22);
    console.log("valor de p5: " + p5);
    // M6
    p6 = multiplicarMatrices2(restarMatrices(ma21, ma11), sumarMatrices(mb11, mb12));
    console.log("valor de p6: " + p6);
    // M7
    p7 = multiplicarMatrices2(restarMatrices(ma12, ma22), sumarMatrices(mb21, mb22));
    console.log("valor de p7: " + p7);
    // calcular c definitivamente
    mc12 = sumarMatrices(p3, p5);
    console.log("valor de c12: " + mc12);
  }
}

function sumarMatrices(matrizX, matrizY) {
  var size = matrizX.length/2;  
  var aux = new Array(size);
  for (var i = 0; i < size; i++) {
    aux[i] = new Array(size);
  }
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      aux[i][j] = (matrizX[i][j] + matrizY[i][j]);
    }
  }
  return aux; 
}

function restarMatrices(matrizX, matrizY) {
  var size = matrizX.length/2;  
  var aux2 = new Array(size);
  for (var i = 0; i < size; i++) {
    aux2[i] = new Array(size);
  }
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      aux2[i][j] = (matrizX[i][j] - matrizY[i][j]);
    }
  }
  return aux2;
}
function multiplicarMatrices(matrizX, matrizY) {
  var size = matrizX.length/2;
  var aux2 = new Array(size);
  for (var i = 0; i < size; i++) {
    aux2[i] = new Array(size);
  }
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      aux2[i][j] = 0;
      for (var k = 0; k < size; k++) {
        aux2[i][j] = aux2[i][j] + (matrizX[i][k] * matrizY[k][j]);                                         
      }
    }
  }
  return aux2;  
}
function multiplicarMatrices2(matrizX, matrizY) {
  var size = matrizX.length;
  var aux2 = new Array(size);
  for (var i = 0; i < size; i++) {
    aux2[i] = new Array(size);
  }
  for (var i = 0; i < matrizX.length; i++) {
    for (var j = 0; j < matrizX.length; j++) {
      aux2[i][j] = 0;
      for (var k = 0; k < matrizX.length; k++) {
        aux2[i][j] = aux2[i][j] + (matrizX[i][k] * matrizY[k][j]);                                         
      }
    }
  }
  return aux2;  
}
