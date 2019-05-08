function generarGrafo(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  var cw = canvas.width = 700,
    cx = cw / 2;
  var ch = canvas.height = 500,
    cy = ch / 2;

  var dibujar = false;
  ctx.lineJoin = "round";
  canvas.addEventListener('click', function(evt) {
    dibujar = true;
    var m = oMousePos(canvas, evt);
    ctx.lineTo(m.x, m.y);
    ctx.stroke();
  }, false);
}
function oMousePos(canvas, evt) {
  var ClientRect = canvas.getBoundingClientRect();
  return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}
var count_click = 0;
function count_click_add() {

  count_click += 1;
  console.log(count_click);
  return count_click;
}
function crearMatrizA() {
  const divtextoCreados = document.getElementById('txtCreados');
  const divmatrizGen1 = document.getElementById('MG1');
  for (var i = 0; i < count_click + 1; i++) {
		for (var j = 0; j < count_click + 1; j++) {
      //input text de la matriz
			var input = document.createElement("input");
			input.id = "texto" + i + j;
      input.classList.add('matrizAdy');
      divtextoCreados.insertBefore(input, divmatrizGen1);

		}
		var println = document.createElement("br");
		divtextoCreados.insertBefore(println, divmatrizGen1);
	}
}
/*
@link
http://w3.unpocodetodo.info/lab/dibujar-a-mano-alzada.php
para mirar
enviar lo de musica al aardila807@gmail.com
*/
