function quickSort() {
  var n = parseInt(document.getElementById('cantNum').value);
  var arregloA = new Array();
  for (var i = 0; i < n; i++) {
    var random = Math.floor((Math.random() * 900) + 1);
    arregloA[i] = random;
  }
  document.getElementById('numGen').value = arregloA;
  ordenar(arregloA, 0, (n - 1));
  document.getElementById('numOrd').value = arregloA;
}
function ordenar(arreglo, i, j) {
  var x = 0;
  var tempi, tempj;
  tempi = i;
  tempj = j;
  x = arreglo[parseInt((i + j) / 2)];
  do {
    while (x > arreglo[i]) {
      i += 1;
    }
    while (x < arreglo[j]) {
      j -= 1;
    }
    if (i < j) {
      cambio(arreglo, i, j);
      i += 1;
      j -= 1;
    }
  } while (i < j);
  if (i == j) {
    if (x < arreglo[i]) {
      j -= 1;
    }
    else {
      i += 1;
    }
  }
  if (j - 1 == tempi) {
    if (arreglo[tempi] > arreglo[j]) {
      cambio(arreglo, tempi, j);
    }
  }
  else if (j > tempi) {
    ordenar(arreglo, tempi, j);
  }
  if (i + 1 == tempj) {
    if (arreglo[i] > arreglo[tempj]) {
      cambio(arreglo, i, tempj);
    }
  }
  else if (i < tempj) {
    ordenar(arreglo, i, tempj);
  }
}

function cambio(arr, i, j) {
  var temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
