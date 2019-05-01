function numRand() {
  var n = parseInt(document.getElementById('cantNum').value);
  var arregloA = new Array();
  for (var i = 1; i < n; i++) {
    var random = Math.floor((Math.random() * 900) + 1);
    arregloA[0] = 0;
    arregloA[i] = random;
  }
  document.getElementById('numGen').value = arregloA;
  fusion(arregloA, n-1);
  document.getElementById('numOrd').value = arregloA;
}
function fusion (a, n){
  if (n == 1){
    return;
  }
  if (n == 2) {
    if (a[1] > a[2]) {
      t = a[1];
      a[1] = a[2];
      a[2] = t;
      return;
    }
  }
  else {
    var u=new Array();
    var v=new Array();
    var j,k,dividir;
    var mu = Number(n/2) + 1;
    var mv = parseInt(n/2) + 1;
    dividir = parseInt(n / 2);
    for (k  = 1; k <= dividir; k++) {
      u[k] = a[k];
    }
    for (j = 1, k  = dividir + 1; k <= n; k++, j++) {
      v[j] = a[k];
    }
    fusion (u, dividir);
    fusion (v, n - dividir);
    mezclar(u, dividir, v, n - dividir,a);
  }
}
function mezclar ( u, mu, v, mv, a) {
  var i = 1;
  var j = 1;
  var k ;
  u[mu + 1] = 32767;
  v[mv + 1] = 32767;
  for (k  = 1; k <= mu + mv; k++) {
    if (u[i] < v[j]) {
      a[k] = u[i];
      i++;
    }
    else {
      a[k] = v[j];
      j++;
    }
  }
}
