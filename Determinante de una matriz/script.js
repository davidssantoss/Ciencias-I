function deterMatriz() {
  //var m[][];
  for(var i = 0; i< n-1;i++){
    for(var j = i + 1;j < n;j++){
      for(var k = i + 1; k < n; k++){
        //m[k][j] = (m[k][j] - ((m[k][i]*m[i][j])/m[i][i]));
      }
    }
  }
}

function getMatriz() {
  var n = document.getElementById('cantNum').value;
  var m = Array(n);
  for (var i = 0; i < n; i++) {
    m[i] = new Array[n];
  }
  for (var i = 0; i < 4; i++) {

  }
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
