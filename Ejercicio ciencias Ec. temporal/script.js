function burbujaOrden(){ //Caso Proedio
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
  seleccion();
  insercion();
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
  //seleccion insercion radix
}
function seleccion(){
  var num = document.getElementById('cant').value;
  var arregloA = new Array(num);
  var t,i,j,x,N=num;
  for(var j = 0; j < N; j++) {
    arregloA[j]=N-j;
  }
  document.getElementById('numCreadosSel').value = arregloA;
  var c=1;
    for(var i = 0; i < N / 2.0; i++) { // N/2 ???
      c = c + 6;
      x = i;
      for(j = i + 1;j < N - i; j++) { // N-i ????
        c = c + 5;
        if(arregloA[x] > arregloA[j]) {
          x = j;
          c = c + 1;
        }
      }
    c = c + 1;
    c = c + 1;
    if(i!=x) {
      c = c + 7;
      t = arregloA[i];
      arregloA[i] = arregloA[x];
      arregloA[x] = t;
    }
  }
  c = c + 2; /*
  console.log(c);
  console.log( (num * (num-2)/8) - (num*(num-2)/4) + 2 + num / 2 );
  document.getElementById('numOrd').value = arregloA;*/
  document.getElementById('cantOESel').value = c;
  document.getElementById('ecuSel').value = c;
}

function insercion() {
  var num = document.getElementById('cant').value;
  let arregloA = new Array();
  var c = 1
  arregloA[0] = -32767;
  i = 2;
  for (var k = num; k > 0 ; k--) {
    arregloA.push(k);
  }
  console.log(arregloA);
  while (i <= num) {
    j = i - 1;
    temp = arregloA[i];
    while (temp < arregloA[j]) {
      arregloA[j+1] = arregloA[j];
      j = j - 1;
    }
    arregloA[j+1] = temp;
    i = i + 1;
    c = c + 5;
  }
  console.log(arregloA);
  //document.getElementById('ecuSel').value = 8*((num / 2)*(num + 1) - num) + 12 * (num - 1) + 4;
  console.log(8*((num / 2)*(num + 1) - num) + 12 * (num - 1) + 4);
}
