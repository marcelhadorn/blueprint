$(document).ready(function(){
	$('.carousel').carousel({
		interval: 7000,
		pause: "hover"
	});

	$('#popcvc').popover({
		trigger: 'hover'
	});

	$('.thumb .glyphicon').on('load', function(){
        $(this).css('top', '50% !important');
	})

	//var counter = 0;
	//function start() {
	//	if(counter < 42) {
    //        counter++;
    //        console.log(counter);
	//		$('.carousel .carousel-inner').animate({left:"-=200"}, 8000, 'linear', start);
	//	};
	//}
	//start();
	//
	//$( ".carousel" ).mouseenter(function() {
	//  var myDiv = $( "div" );
	//  myDiv.clearQueue();
	//  myDiv.stop();
	//});
	//$( ".carousel" ).mouseleave(function() {
	//  start();
	//});

	$(".navbar li a[href^='#'], a.btn-buy[href^='#']").on('click', function(e) {
   		e.preventDefault();
   		var scrollto = ($(this.hash).offset().top - 50);
   		$('html, body').animate({ scrollTop: scrollto }, 400);

   		// edit: Opera requires the "html" elm. animated
	});


	$('#submit a.btn').attr('disabled', 'disabled').addClass('pull-right');
	$('#submit a.btn .default').text('Bestellung aufgeben');

	$('.btn-process').click(function(){
		var thisbtn = $(this);

		if (thisbtn.hasClass('end')) {
			thisbtn.removeClass('end', 'start');
		} else {
			thisbtn.addClass('start');

			setTimeout(function(){
				thisbtn.addClass('end');
				thisbtn.removeClass('start');
			}, 3000);
		}
	});

	$('#submit .btn-process').click(function(){
		$(this).addClass('start');
		setTimeout(function(){
			$('#details').css({'opacity': '0', 'z-index': '10'});
			$('#confirmation').css({'opacity': '1', 'z-index': '20'});
		}, 3000);
	});

	$('#new').click(function(){
		window.location.reload();
	});

	function upTotal() {
		var pgross = $('span#pgross').text(),
			pklein = $('span#pklein').text(),
			ptotal = parseInt(pgross) + parseInt(pklein);
		$('span#total').html('CHF ' + ptotal + '.-')
	}

	$('#gPlus').on('click', function(){
		var $button = $(this);
		var choice = $("#gr")
  		var oldValue = choice.val();

	 	var newVal = parseFloat(oldValue) + 1;

		choice.val(newVal);

		var value = choice.val();
		$('span#gross').html(value);
		$('span#pgross').html(98 * value);

		upTotal();
	});

	$('#gMinus').on('click', function(){
		var $button = $(this);
		var choice = $("#gr")
  		var oldValue = choice.val();

  		if (oldValue > 0) {
      		var newVal = parseFloat(oldValue) - 1;
    	} else {
      		newVal = 0;
    	}

		choice.val(newVal);

		var value = choice.val();
		$('span#gross').html(value);
		$('span#pgross').html(98 * value)

		upTotal();
	});

	$('#kPlus').on('click', function(){
		var $button = $(this);
		var choice = $("#kl")
  		var oldValue = choice.val();

	 	var newVal = parseFloat(oldValue) + 1;

		choice.val(newVal);

		var value = choice.val();
		$('span#klein').html(value);
		$('span#pklein').html(68 * value)

		upTotal();
	});

	$('#kMinus').on('click', function(){
		var $button = $(this);
		var choice = $("#kl")
  		var oldValue = choice.val();

  		if (oldValue > 0) {
      		var newVal = parseFloat(oldValue) - 1;
    	} else {
      		newVal = 0;
    	}

		choice.val(newVal);

		var value = choice.val();
		$('span#klein').html(value);
		$('span#pklein').html(68 * value)

		upTotal();
	});

	$('#gr').on('keyup', function(){
		var value = $(this).val();

		$('span#gross').html(value);
		$('span#pgross').html(98 * value)

		upTotal();
	});

	$('#kl').on('keyup', function(){
		var value = $(this).val();

		$('span#klein').html(value);
		$('span#pklein').html(98 * value)

		upTotal();
	});

	$('body').on('click', function(){
		if($('#kl').val() > 0 || $('#gr').val() > 0){
			$('#submitone').removeAttr('disabled');
			$('#submitone').click(function(){
				$('#opentwo').attr('data-toggle','collapse');
				setTimeout(function(){
    				$("#inputName").focus();
				}, 0);
			});
		} else {
			$('#submitone').attr('disabled');
		}
	});

	$('#collapseTwo input').on('keyup', function(){
		if($('input#inputName').val() && $('input#Address').val() && $('input#Number').val() && $('input#Zip').val() && $('input#Place').val() && $('input#Email').val()) {
			$('#submittwo').click(function(){
				$('#openthree').attr('data-toggle','collapse');
			});
		}
	});

	$('#submittwo').click(function(){
		$('#addresschoice').show();
		$('#name').html($('input#inputName').val());
		$('#address').html(""+$('input#Address').val() +" "+ $('input#Number').val()+"");
		$('#address2').html($('input#Address2').val());
		$('#place').html(""+$('input#Zip').val() +" / "+ $('input#Place').val()+"");
		$('#inputNameKK').val($('input#inputName').val());
		$(this).html('Änderungen übernehmen');
		setTimeout(function(){
    		$("#inputNameKK").focus();
		}, 0);
	});

	$('#submitthree').click(function(){
		$('#payment').show();
		$('#kkname').html($('input#inputNameKK').val());
		$('#kknumber').html($('input#KKnr').val().substr(-4));
		$('#submit .btn').removeAttr('disabled');
		$('#steps, #check').removeClass();
		$('#steps').addClass('col-md-7');
		$('#check').addClass('col-md-5');
		$(this).html('Änderungen übernehmen');
	});

	$('.accordiontoggle').click(function(){
		$('#steps, #check').removeClass();
		$('#steps').addClass('col-md-8');
		$('#check').addClass('col-md-4');
	});
});
