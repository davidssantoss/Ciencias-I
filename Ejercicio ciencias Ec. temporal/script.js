function burbujaOrden(){
  var num = document.getElementById('cant').value;
  var arregloA = new Array(num);
  for (var i = 1; i < num; i++) {
    var random = Math.floor((Math.random() * 100) + 1);
    arregloA.push(random);
  }
  document.getElementById('numCreados').value = arregloA;
  var c = 1;
  for (var j = 0; j < num - 1; j++) {
    c += c + 5;
    for (var k = j + 1; k < num; k++) {
      c += c + 5;
      if (arregloA[j] > arregloA[k]) {
        var t = arregloA[j];
        arregloA [j] = arregloA[k];
        arregloA [k] = t;
        c += c+7;
      }
    }
    c += c + 1;
  }
  c += c + 2;
  document.getElementById('numOrd').value = arregloA;
  document.getElementById('cantOE').value = c;
  document.getElementById('ecu').value = ((num * (num - 1) - (num - 1) - ((num - 2) * (num - 1)) / 2) * 12 + 6 * (num - 1) + 3);
}
