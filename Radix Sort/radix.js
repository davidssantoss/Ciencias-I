function radixSort() {
  var num = document.getElementById('cant').value;
  var arregloA = new Array();
  var indice, divisor, temp, residuo, m2;
  //genera numeros aleatorios
  for (var i = 0; i < num; i++) {
    var random = Math.floor((Math.random() * 1000) + 1);
    arregloA.push(random);
  }
  document.getElementById('numRand').value = arregloA;
  var m  = new Array(10);
  for (var i = 0; i < 10; i++) {
    m[i] = new Array(10);
  }
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < num + 1; j++) {
      m[i][0] = 1;
      console.log(m[i][0]);
    }
  }
  divisor = 1;
  for (var i = 1; i < 6; i++) {//Cantidad de cifras de un numero
    for (var j = 0; j < num; j++) {
      temp = arregloA[j];
      temp = temp / divisor;
      //console.log("*divide cada pos del Array por " + divisor + ") " + temp);
      residuo = parseInt(temp % 10);
      //console.log("Obtiene el valor de cada cifra " + i + ") " + residuo);
      indice = m[residuo][0];
      //console.log(m[residuo][0]);
      m[residuo][indice] = arregloA[j];
      indice = indice + 1;
      m[residuo][0] = indice;
    }
    m2 = 0;
    for (var k = 0; k < 10; k++) {
      indice = m[k][0] - 1;
      for (var j = 1; j <= indice; j++) {
        arregloA[m2] = m[k][j];
        m2 = m2 + 1;
      }
    }
    divisor = divisor * 10;
    for (var j = 0; j < 10; j++) {
      m[j][0] = 1;
    }
  }
  document.getElementById('numOrden').value = arregloA;

}
