$(document).ready(function() {

	$("#title").fadeIn(3000);
	$("#header").fadeIn(2000);

	$("#musicplayerbtn").click(function() {
		if ($('.player').is(':visible')) {
			$("#title").fadeIn(1500);
			$(".player").fadeOut(3000);
			 $("#musicplayerbtn").text("Music Player");
		} else {
			$("#title").fadeOut(1500);
			$(".player").fadeIn(3000);
			 $("#musicplayerbtn").text("Back to Home");
		}
		mobilenav();
	});

	$('#play').click(function() {
		$('#play').toggleClass('fa-play fa-pause');
	});

	$('.amplitude-next').click(function() {
		$('#play').removeClass('fa-play').addClass('fa-pause');
		if ($('#songname').text() == 'Layla') {
			$('#play').removeClass('fa-pause').addClass('fa-play');
		}
	});

	$('.amplitude-prev').click(function() {
		$('#play').removeClass('fa-play').addClass('fa-pause');
	});


});

function mobilenav() {
	var x = document.getElementById("Topnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
