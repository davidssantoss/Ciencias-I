function generarRandom() {
  var n = document.getElementById('cantNum').value;
  var arregloA = new Array();
  for (var i = 0; i < n; i++) {
    var random = Math.floor((Math.random() * 999) + 1);
    arregloA.push(random);
  }
  document.getElementById('numGen').value = arregloA;
  return arregloA
}
