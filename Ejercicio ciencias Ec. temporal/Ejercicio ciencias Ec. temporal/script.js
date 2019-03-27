function burbujaOrden(){
  var num = document.getElementById('cant').value;
  var arregloA = new Array(num);
  for (var i = 1; i < num; i++) {
    var random = Math.floor((Math.random() * 100) + 1);
    arregloA.push(random);
  }
  document.getElementById('numCreados').value = arregloA;
  for (var j = 0; j < num - 1; j++) {
    var c = c + 5;
    for (var k = j + 1; k < num; k++) {
      c = c + 5;
      if (arregloA[j] > arregloA[k]) {
        var t = arregloA[j];
        arregloA [j] = arregloA[k];
        arregloA [k] = t;
      }
    }
    c = c + 1;
  }
  document.getElementById('numOrd').value = arregloA;
}
