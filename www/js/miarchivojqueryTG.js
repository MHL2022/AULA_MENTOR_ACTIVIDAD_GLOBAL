
//función de la cola de efectos


$(function(){
	var boton = $("#click"),
	parrafo = $ ("#efectos");
	boton.on("click", function() {
    parrafo.hide(2000);
    parrafo.show(2000);
    parrafo.animate({"margin-left": "450px", "marging-top": "70px"}, 2000);
	parrafo.animate({"font-size": "5pt"}, 2500);
	parrafo.animate({"font-size": "27pt"}, 2500);

  }); 
});