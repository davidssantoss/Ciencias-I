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
  }
  for(var i = 0; i< n-1;i++){
    for(var j = i + 1;j < n;j++){
      for(var k = i + 1; k < n; k++){
        m[k][j] = (m[k][j] - ((m[k][i]*m[i][j])/m[i][i]));
        console.log(m[k][j]);
      }
    }
  }
  var traza = 1 ;
  for (i = 0;  i< n; i++) {
    traza = traza * m[i][i];
  }
  document.getElementById('ResDeterminante').value = parseInt(traza);

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
