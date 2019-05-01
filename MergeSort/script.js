function numRand() {
  var n = parseInt(document.getElementById('cantNum').value);
  var arregloA = new Array();
  for (var i = 1; i < n; i++) {
    var random = Math.floor((Math.random() * 900) + 1);
    arregloA[0] = 0;
    arregloA[i] = random;
  }
  document.getElementById('numGen').value = arregloA;
}
