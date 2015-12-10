"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VotacionAsep = (function () {
	function VotacionAsep() {
		_classCallCheck(this, VotacionAsep);

		this.activarHover();
		$('.fa-star').on("click", this.activarEstrellas);
	}

	//var votacion=new VotacionAsep();

	_createClass(VotacionAsep, [{
		key: "activarEstrellas",
		value: function activarEstrellas() {
			console.log($(this).attr("id"));
			var id = $(this).attr("id");
			$(".fa-star").removeClass("starActivadaForever");
			//console.log($(this).attr("id"));
			if (id == "votacion-1") {
				$("#votacion-1").addClass("starActivadaForever");
			} else if (id == "votacion-2") {
				$("#votacion-1").addClass("starActivadaForever");
				$("#votacion-2").addClass("starActivadaForever");
			} else if (id == "votacion-3") {
				$("#votacion-1").addClass("starActivadaForever");
				$("#votacion-2").addClass("starActivadaForever");
				$("#votacion-3").addClass("starActivadaForever");
			} else if (id == "votacion-4") {
				$("#votacion-1").addClass("starActivadaForever");
				$("#votacion-2").addClass("starActivadaForever");
				$("#votacion-3").addClass("starActivadaForever");
				$("#votacion-4").addClass("starActivadaForever");
			} else if (id == "votacion-5") {
				$("#votacion-1").addClass("starActivadaForever");
				$("#votacion-2").addClass("starActivadaForever");
				$("#votacion-3").addClass("starActivadaForever");
				$("#votacion-4").addClass("starActivadaForever");
				$("#votacion-5").addClass("starActivadaForever");
			}
		}
	}, {
		key: "activarHover",
		value: function activarHover() {

			$('.fa-star').hover(function () {
				//console.log($(this).attr("id"));
				var id = $(this).attr("id");
				$(".fa-star").removeClass("starActivada");
				console.log($(this).attr("id"));
				if (id == "votacion-1") {
					$("#votacion-1").addClass("starActivada");
				} else if (id == "votacion-2") {
					$("#votacion-1").addClass("starActivada");
					$("#votacion-2").addClass("starActivada");
				} else if (id == "votacion-3") {
					$("#votacion-1").addClass("starActivada");
					$("#votacion-2").addClass("starActivada");
					$("#votacion-3").addClass("starActivada");
				} else if (id == "votacion-4") {
					$("#votacion-1").addClass("starActivada");
					$("#votacion-2").addClass("starActivada");
					$("#votacion-3").addClass("starActivada");
					$("#votacion-4").addClass("starActivada");
				} else if (id == "votacion-5") {
					$("#votacion-1").addClass("starActivada");
					$("#votacion-2").addClass("starActivada");
					$("#votacion-3").addClass("starActivada");
					$("#votacion-4").addClass("starActivada");
					$("#votacion-5").addClass("starActivada");
				}
				//if($(this).attr("id"))
			}, function () {
				$(".fa-star").removeClass("starActivada");
			});
			/*
   	$('.estrellitas').hover(
   	  function() 
   	  {
   	    $('.fa-star').hover(
   		  function() {
   		    $(this).addClass("starActivada")
   		  });
   	  },
   	  function() {
   	    $(".fa-star").removeClass("starActivada");
   	  }
   	);*/
		}
	}]);

	return VotacionAsep;
})();