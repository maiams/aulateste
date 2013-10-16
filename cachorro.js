$(document).ready(function() {

    var posicao = 0;
   $('body').keydown(function(event) {
       switch (event.which) {
            case 37: // left arrow key
                if (posicao >= 1) {
                    $('#cachorro').animate({ 'margin-left': '-=25px' }, 15);
                    posicao = posicao - 25;
                }
                break;
            case 39: // right arrow key
                if (posicao <= 450) {
                    $('#cachorro').animate({ 'margin-left': '+=25px' }, 15);
                    posicao = posicao + 25;
                }
                break;
		}
	});
	
	velocidade = 1500;
	function mostraCachorro() {
		var number = 1+Math.floor(Math.random()*480);
		var posicao;
		$('<div id="osso" style="margin-left:'+number+'px"></div>')
		.prependTo('#principal');
		$( "#osso" ).animate({
		"margin-top": "+=295px" },
		velocidade,
		function() {
			$("#osso").remove();
			posicao = ($("#cachorro").css("margin-left"));
			posicao = posicao.replace("px","");
			
			pontos = parseInt($("span").text());
			
			if (!(posicao > number + 25 || posicao < number - 25)) {
				$("span").html(pontos + 1)
                $('<div id="maisPonto" style="margin: 250px 0 0 '+posicao+'px">+ 1</div>').appendTo('#principal');
                $('#maisPonto').animate({'margin-top': '0'}, 1000,
                function() {
                    $('#maisPonto').remove();
                });
            }

		});

        var possibilidade = Math.floor(Math.random()*100);
        if (possibilidade > 70) {
            var ossoMau = 1+Math.floor(Math.random()*480);
            $('<div id="ossoMau" style="margin-left:'+ossoMau+'px"></div>')
                .prependTo('#principal');
            $( "#ossoMau" ).animate({
                    "margin-top": "+=295px" },
                velocidade,
                function() {
                    $("#ossoMau").remove();
                    posicao = ($("#cachorro").css("margin-left"));
                    posicao = posicao.replace("px","");

                    pontos = parseInt($("span").text());

                    if (!(posicao > ossoMau + 25 || posicao < ossoMau - 25)) {
                        $("span").html(pontos - 1)
                        $('<div id="menosPonto" style="margin: 250px 0 0 '+posicao+'px">- 1</div>').appendTo('#principal');
                        $('#menosPonto').animate({'margin-top': '0'}, 1000,
                            function() {
                                $('#menosPonto').remove();
                            });
                    }

                });
        }
        if (parseInt($("span").text()) > 10) {
            velocidade = 1300;
        }
        if (parseInt($("span").text()) > 15) {
            velocidade = 1000;
        }
        if (parseInt($("span").text()) > 20) {
            velocidade = 1000;
        }
        if (parseInt($("span").text()) > 25) {
            velocidade = 800;
        }
	}
	
	setInterval(mostraCachorro, 2000);
   
});



