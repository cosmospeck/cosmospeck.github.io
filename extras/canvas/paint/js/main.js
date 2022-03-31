$(document).ready(function() {  
                // var canvas = document.getElementById("s_canvas");
                // var ctx = canvas.getContext("2d");


    			//$('input#tcolor').simpleColorPicker();
    			$('div#colorpicker').simpleColorPicker();
    			$("div#colorpicker input#tcolor").val("#000000");
				
				$('div#bgcolorpicker').simpleColorPicker();
				$("div#colorpicker input#canvas_color").val("#ffffff");

    			$("div#colorpicker").change(function() {
    				transtextcolor = $('input#tcolor').val();
   				});

   				$('div#colorpicker_color-picker li').click(function(){

   					var selColor = $(this).attr('title');
					$("div#colorpicker input").val(selColor);
					$('div#selcolor').css('background-color', selColor);
					//$('div#colorpicker input').css('background-color', "rgba(0, 255, 0, 0.34) !important");
				});
				
				$("div#bgcolorpicker").change(function() {
    				transbgcolor = $('input#canvas_color').val();
   				});

   				$('div#bgcolorpicker_color-picker li').click(function(){

   					var selColor = $(this).attr('title');
					$("div#bgcolorpicker input").val(selColor);
					$('div#bgcolor').css('background-color', selColor);
					$('#s_canvas').css('background-color', selColor);
					//$('div#colorpicker input').css('background-color', "rgba(0, 255, 0, 0.34) !important");
				});

				$("input#stroke_width").val(1);
				$("input#range_val").val(1);

				//RANGE INPUT

		        var rng = $("input#stroke_width");

				var listener = function() {
				  window.requestAnimationFrame(function() {
				    $("input#range_val").val(rng[0].value);
				  });
				};

				rng[0].addEventListener("mousedown", function() {
				  listener();
				  rng[0].addEventListener("mousemove", listener);
				});
				rng[0].addEventListener("mouseup", function() {
				  rng[0].removeEventListener("mousemove", listener);
				});

				$("input#range_val").on('keyup change click', function () {
				        var value = this.value;
				        if(value < 1 || value > 100) {
				        	value=1;
				        	$("input#range_val").val(1);
				        }
				        $("input#stroke_width").val(value);
				});
				//RANGE INPUT END
				
});
