function numRand() {
  var n = parseInt(document.getElementById('cantNum').value);
  var arregloA = new Array();
  for (var i = 0; i < n; i++) {
    var random = Math.floor((Math.random() * 900) + 1);
    arregloA[i] = random;
  }
  document.getElementById('numGen').value = arregloA;
  document.getElementById('numOrd').value = ordenar(arregloA);
}
function ordenar(arreglo) {
  if (arreglo.length <= 1) {
    return arreglo;
  }
  var longitud = arreglo.length;
  var mitad = parseInt(arreglo.length / 2);
  var izq = new Array(mitad);
  var der = new Array(longitud - mitad);
  for (var i = 0; i < izq.length; i++) {
    izq[i] = arreglo[i];
  }
  for (var i = 0; i < der.length; i++) {
    der[i] = arreglo[i + izq.length];
  }
  izq = ordenar(izq);
  der = ordenar(der);
  return unir(izq, der);
}
function unir(izquierda, derecha) {
  var result = new Array(izquierda.length + derecha.length);
  var indIzq = 0;
  var indDer = 0;
  var indRes = 0;
  while (indIzq < izquierda.length || indDer < derecha.length) {
    if (indIzq < izquierda.length && indDer < derecha.length) {
      if (izquierda[indIzq] <= derecha[indDer]) {
        result[indRes++] = izquierda[indIzq++];
      }
      else {
        result[indRes++] = derecha[indDer++];
      }
    }
    else if (indIzq < izquierda.length) {
      result[indRes++] = izquierda[indIzq++];
    }
    else if (indDer < derecha.length) {
      result[indRes++] = derecha[indDer++];
    }
  }
  return result;
}
