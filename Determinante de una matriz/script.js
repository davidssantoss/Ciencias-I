function getMatriz() {
  var n = parseInt(document.getElementById('cantNum').value);
  var m = new Array(n);
  for (var i = 0; i < n; i++) {
    m[i] = new Array(n);
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var input = "texto" + i + j;
      m[i][j] = parseInt(document.getElementById(input).value);
			//console.log(m[i][j]);
    }
  }//algoritmo para calcular el determinante
  var sign;
  var c = 1
  for(var i = 0; i< n-1;i++){
    c = c + 5
    if (m[i][i] == 0) {
      for (var h = i+1; h < n; h++) {
        if (m[h][i] != 0) {
          sign = sign * (-1);
          for (var ch = 0; ch < n ; ch++) {
            var temp = m[h][ch];
            m[h][ch] = m[i][ch];
            m[i][ch] = temp;
          }
          h = n - 1;
        }
      }
    }
  for(var j = i + 1; j < n; j++){
    c = c + 4
    for(var k = i + 1; k < n; k++){//2
      c = c +2
      m[k][j] = (m[k][j] - ((m[k][i]*m[i][j])/m[i][i]));//13
      c = c + 13
        //console.log(m[k][j]);
    }
    c = c + 1
  }
    c = c + 1
  }
  c = c + 3
  var traza = 1 ;
  for (i = 0;  i < n; i++) {
    console.log("valor de la traza: " + traza);

    if(m[i] == 2){
      document.getElementById('ResDeterminante').value = 0;
    }else if (traza !=0) {
      traza = traza * m[i][i];
      document.getElementById('ResDeterminante').value = traza;
    } 

    console.log(m[i][i]);
  }
  console.log("valor de la traza: " + traza);
  console.log("el valor de c es: " + c);
  var partA = (Math.pow(n, 3))-((n**2)*(n-1))-2*(n**2);
  var partB = ((n*(n-1))/2) + (n-1)*n + n;
  //console.log(partA + partB);

  document.getElementById('valorC').value = parseInt(c);
  document.getElementById('valorEcu').value = parseInt(c);


}
function generarMatriz() {
  var n = document.getElementById('cantNum').value;
  const divMG = document.getElementById('MG');
  const divSolucionDeter = document.getElementById('solucionDeterminante');
  for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			var input = document.createElement("input");
			input.id = "texto" + i + j;
      input.classList.add('matriz');
      divMG.insertBefore(input, divSolucionDeter);
		}
		var println = document.createElement("br");
		divMG.insertBefore(println,divSolucionDeter);
	}
  document.getElementById('btnGen').disabled = true;
}
