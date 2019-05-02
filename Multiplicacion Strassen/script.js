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
  var n = parseInt(document.getElementById('cantFilM1').value);
  multiplicar();
  getMatrizA();
  getMatrizB();
  subdividirMatrices(getMatrizA(), getMatrizB(), n);

}
function subdividirMatrices(matrizA, matrizB, tm) {
  var tam = parseInt(tm / 2);
  const divmatrizC = document.getElementById('matrizC');
  const divmatrizGen3 = document.getElementById('MG3');
  var matrizC = new Array(tm);
  for(var i = 0; i < tm; i++){
    matrizC[i] = new Array(tm);
  }
  if(tm == 1){
    for (var i = 0; i < tm; i++) {
      for (var j = 0; j < tm; j++) {
        matrizC[i][j] = matrizA[i][j] * matrizB[i][j];
      }
    }
    return matrizC;
  }
  //Submatrices de A, A11, A12, A21 y A22
  var ma11 = new Array(tam);
  for(var i = 0; i < tam; i++){
    ma11[i] = new Array(tam);
  }
  var ma12 = new Array(tam);
  for(var i = 0; i < tam; i++){
    ma12[i] = new Array(tam);
  }
  var ma21 = new Array(tam);
  for(var i = 0; i < tam; i++){
    ma21[i] = new Array(tam);
  }
  var ma22 = new Array(tam);
  for(var i = 0; i < tam; i++){
    ma22[i] = new Array(tam);
  }
  //submatrices de B, B11, B12, B21 y B22
  var mb11 = new Array(tam);
  for(var i = 0; i < tam; i++){
    mb11[i] = new Array(tam);
  }
  var mb12 = new Array(tam);
  for(var i = 0; i < tam; i++){
    mb12[i] = new Array(tam);
  }
  var mb21 = new Array(tam);
  for(var i = 0; i < tam; i++){
    mb21[i] = new Array(tam);
  }
  var mb22 = new Array(tam);
  for(var i = 0; i < tam; i++){
    mb22[i] = new Array(tam);
  }
  for (var i = 0; i < tam; i++){
    for (var j = 0; j < tam; j++) {
      ma11[i][j]  = matrizA[i][j];
      ma12[i][j] = matrizA[i][j + tam];
      ma21[i][j] = matrizA[i + tam][j];
      ma22[i][j] = matrizA[i + tam][j + tam];
      mb11[i][j] = matrizB[i][j];
      mb12[i][j] = matrizB[i][j + tam];
      mb21[i][j] = matrizB[i + tam][j];
      mb22[i][j] = matrizB[i + tam][j + tam];
    }
  }
  // debugger;
  var aResult = new Array(tam);
  for(var i = 0; i < tam; i++){
    aResult[i] = new Array(tam);
  }
  var bResult = new Array(tam);
  for(var i = 0; i < tam; i++){
    bResult[i] = new Array(tam);
  }
  //p1 a p7
  var p1 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p1[i] = new Array(tam);
  }
  var p2 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p2[i] = new Array(tam);
  }
  var p3 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p3[i] = new Array(tam);
  }
  var p4 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p4[i] = new Array(tam);
  }
  var p5 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p5[i] = new Array(tam);
  }
  var p6 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p6[i] = new Array(tam);
  }
  var p7 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p7[i] = new Array(tam);
  }
  //almacenadores de p1 hasta p7
  var p11 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p11[i] = new Array(tam);
  }
  var p12 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p12[i] = new Array(tam);
  }
  var p21 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p21[i] = new Array(tam);
  }
  var p31 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p31[i] = new Array(tam);
  }
  var p41 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p41[i] = new Array(tam);
  }
  var p51 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p51[i] = new Array(tam);
  }
  var p61 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p61[i] = new Array(tam);
  }
  var p62 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p62[i] = new Array(tam);
  }
  var p71 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p71[i] = new Array(tam);
  }
  var p72 = new Array(tam);
  for(var i = 0; i < tam; i++){
    p72[i] = new Array(tam);
  }
  //subdivisiones de la matriz C
  var mc11 = new Array(tam);
  for(var i = 0; i < tam; i++){
    mc11[i] = new Array(tam);
  }
  var mc111 = new Array(tam);
  for(var i = 0; i < tam; i++){
    mc111[i] = new Array(tam);
  }
  var mc112 = new Array(tam);
  for(var i = 0; i < tam; i++){
    mc112[i] = new Array(tam);
  }
  var mc12 = new Array(tam);
  for(var i = 0; i < tam; i++){
    mc12[i] = new Array(tam);
  }
  var mc21 = new Array(tam);
  for(var i = 0; i < tam; i++){
    mc21[i] = new Array(tam);
  }
  var mc22 = new Array(tam);
  for(var i = 0; i < tam; i++){
    mc22[i] = new Array(tam);
  }
  var mc221 = new Array(tam);
  for(var i = 0; i < tam; i++){
    mc221[i] = new Array(tam);
  }
  var mc222 = new Array(tam);
  for(var i = 0; i < tam; i++){
    mc222[i] = new Array(tam);
  }
  // debugger;
  //p1
  p11 = sumarMatrices(ma11, ma22, p11.length);
  p12 = sumarMatrices(mb11, mb22, p12.length);
  p1 = subdividirMatrices(p11, p12, tam);
  //p2
  p21 = sumarMatrices(ma21, ma22, p21.length);
  p2 = subdividirMatrices(p21, mb11, tam);
  //p3
  p31 = restarMatrices(mb12, mb22 , p31.length);
  p3 = subdividirMatrices(ma11, p31, tam);
  //p4
  p41 = restarMatrices(mb21, mb11 , p41.length);
  p4 = subdividirMatrices(ma22, p41, tam);
  //p5
  p51 = sumarMatrices(ma11, ma12 , p51.length);
  p5 = subdividirMatrices(p51, mb22, tam);
  //p6
  p61 = restarMatrices(ma21, ma11, p61.length);
  p62 = sumarMatrices(mb11, mb12, p62.length);
  p6 = subdividirMatrices(p61, p62, tam);
  //p7
  p71 = restarMatrices(ma12, ma22 , p71.length);
  p72 = sumarMatrices(mb21, mb22 , p72.length);
  p7 = subdividirMatrices(p71, p72, tam);
  //c11
  mc111 = sumarMatrices(p1, p7, p1.length);
  mc112 = restarMatrices(p4, p5, p4.length);
  mc11 = sumarMatrices(mc111, mc112, mc111.length);
  //c12
  mc12 = sumarMatrices(p3, p5, p3.length);
  //c21
  mc21 = sumarMatrices(p2, p4, p2.length);
  //c22
  mc221 = restarMatrices(p1, p2, p1.length);
  mc222 = sumarMatrices(p3, p6, p3.length);
  mc22 = sumarMatrices(mc221, mc222, mc221.length);
  console.log(mc11);
  console.log(mc12);
  console.log(mc21);
  console.log(mc22);
  for (var i = 0; i < tam; i++){
    for (var j = 0; j < tam; j++) {
      matrizC[i][j] = mc11[i][j];
      matrizC[i][j + tam] = mc12[i][j];
      matrizC[i + tam][j] = mc21[i][j];
      matrizC[i + tam][j + tam] = mc22[i][j];
      var input = document.createElement("input");
      input.id = "texto3";
      input.classList.add('matriz2');
      divmatrizC.insertBefore(input, divmatrizGen3);
      document.getElementById('texto3').value = matrizC;
    }
    var println = document.createElement("br");
    divmatrizC.insertBefore(println, divmatrizGen3);
  }
}

function sumarMatrices(matrizX, matrizY, tm) {
  var size = tm;
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

function restarMatrices(matrizX, matrizY, tm) {
  var size = tm;
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
