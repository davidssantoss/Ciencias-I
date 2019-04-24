function crearMatrizA() {
  var mf1 = parseInt(document.getElementById('cantFilM1').value);
  var mc1 = parseInt(document.getElementById('cantColM1').value);
  var ordMA = mf1 * mc1;
  const divtextoCreados = document.getElementById('txtCreados');
  const divmatrizGen1 = document.getElementById('MG1');
  for (var i = 0; i < mf1; i++) {
		for (var j = 0; j < mc1; j++) {
			var input = document.createElement("input");
			input.id = "texto" + i + j;
      input.classList.add('matriz2');
      divtextoCreados.insertBefore(input, divmatrizGen1);
		}
		var println = document.createElement("br");
		divtextoCreados.insertBefore(println, divmatrizGen1);
	}
  determinar2n(ordMA);
}
function crearMatrizB() {
  var mf2 = parseInt(document.getElementById('cantFilM2').value);
  var mc2 = parseInt(document.getElementById('cantColM2').value);
  var ordMB = mf2 * mc2;
  const divtextoCreados2 = document.getElementById('txtCreadosM2');
  const divmatrizGen2 = document.getElementById('MG2');
  for (var i = 0; i < mf2; i++) {
		for (var j = 0; j < mc2; j++) {
			var input = document.createElement("input");
			input.id = "texto" + i + j;
      input.classList.add('matriz2');
      divtextoCreados2.insertBefore(input, divmatrizGen2);
		}
		var println = document.createElement("br");
		divtextoCreados2.insertBefore(println, divmatrizGen2);
	}
  determinar2n(ordMB);
}
function determinar2n(num) {
  const dos = 2;
  var res = Math.log10(num)/Math.log10(dos);
  if (res % 1 == 0){
    console.log("El numero es de potencia 2 elevado a la n: ", res);
  }
  else {
    console.log("El numero no es de potencia 2", res);
  }
}
