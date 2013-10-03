$(document).ready(function() {
   
   $('body').keydown(function(event) {
	switch (event.which) {
        case 37: // left arrow key
           $('#cachorro').animate({ 'margin-left': '-=25px' }, 15);
           break;
        case 39: // right arrow key
           $('#cachorro').animate({ 'margin-left': '+=25px' }, 15);
           break;
		}
	});
	
	
	function mostraCachorro() {
		var number = 1+Math.floor(Math.random()*480);
		var posicao;
		$('<div id="osso" style="margin-left:'+number+'px"></div>')
		.prependTo('#principal');
		$( "#osso" ).animate({
		"margin-top": "+=295px" },
		1000,
		function() {
			$("#osso").remove();
			posicao = ($("#cachorro").css("margin-left"));
			posicao = posicao.replace("px","");
			
			//console.log("Posição cachorro: "+posicao);
			//console.log("Posição osso: "+number);
			
			pontos = parseInt($("span").text());
			
			if (!(posicao > number + 25 || posicao < number - 25)) {
				$("span").html(pontos + 1);
			}
			
		});
	}
	
	setInterval(mostraCachorro, 2000);
   
});



