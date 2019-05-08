function punto(){
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
    var arr = new Array(2);
    var vertices = new Array();
    ctx.lineTo(m.x, m.y);
    arr[0] = m.x;
    arr[1] = m.y;
    console.log("valor de x: " + m.x + " valor de y: " + m.y);
    for (var i = 0; i < 5; i++) {
      vertices[i] = arr;
    }
    console.log(vertices);
    ctx.stroke();

  }, false);
}
function oMousePos(canvas, evt) {
  var ClientRect = canvas.getBoundingClientRect();
  console.log(ClientRect);
  return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}
/*
@link
http://w3.unpocodetodo.info/lab/dibujar-a-mano-alzada.php
para mirar
*/
