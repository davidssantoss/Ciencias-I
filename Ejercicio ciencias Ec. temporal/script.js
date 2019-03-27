function burbujaOrden(){
  var num = document.getElementById('cant').value;
  var arregloA = new Array(num);
  for (var i = 1; i < num; i++) {
    var random = Math.floor((Math.random() * 100) + 1);
    arregloA.push(random);
  }
  document.getElementById('numCreadosPR').value = arregloA;
  var c = 1;
  for (var j = 0; j < num - 1; j++) {
    c = c + 5;

    for (var k = j + 1; k < num; k++) {
      c = c + 5;

      if (arregloA[j] < arregloA[k]) {
        var t = arregloA[j];
        arregloA [j] = arregloA[k];
        arregloA [k] = t;
        c = c+7;
      }
    }
    c = c + 1;
  }
  c = c + 2;
  document.getElementById('numOrdPR').value = arregloA;
  document.getElementById('cantOEPR').value = c;
  document.getElementById('ecuPR').value =  ( (17*(num**2)) + ((7*num) - 12) )/4;
}

function hacerTodo() {
  ascendente();
  descendente();
  burbujaOrden();
}

function ascendente() { // Mejor caso obligado
  var num = document.getElementById('cant').value;
  let arregloA = new Array();
  for (var i = 0; i < num ; i++) {
    arregloA.push(i);
  }
  document.getElementById('numCreadosME').value = arregloA;
  var c = 1;
  for (var j = 0; j < num - 1; j++) {
    c = c + 5;

    for (var k = j + 1; k < num; k++) {
      c = c + 5;

      if (arregloA[j] > arregloA[k]) {
        var t = arregloA[j];
        arregloA [j] = arregloA[k];
        arregloA [k] = t;
        c = c+7;
      }
    }
    c = c + 1;
  }
  c = c + 2;
  document.getElementById('cantOEME').value = c;
  document.getElementById('ecuME').value = ((5*(num**2)) + ((7*num) - 6))/2;
}


function descendente() { // Peor caso obligado
  var num = document.getElementById('cant').value;
  let arregloA = new Array();
  for (var i = num; i > 0 ; i--) {
    arregloA.push(i);
  }
  document.getElementById('numCreadosPE').value = arregloA;
  var c = 1;
  for (var j = 0; j < num - 1; j++) {
    c = c + 5;

    for (var k = j + 1; k < num; k++) {
      c = c + 5;

      if (arregloA[j] > arregloA[k]) {
        var t = arregloA[j];
        arregloA [j] = arregloA[k];
        arregloA [k] = t;
        c = c+7;
      }
    }
    c = c + 1;
  }
  c = c + 2;
  document.getElementById('numOrd').value = arregloA;
  document.getElementById('cantOE').value = c;
  document.getElementById('ecu').value = (6*(num**2))-3;

}
