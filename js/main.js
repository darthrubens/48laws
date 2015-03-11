$(document).ready( function(){

	$(document).on('keydown', function(e) {
		switch (e.keyCode) {
			case 37:
				//left
				$('.nav-law.prev-law').click();
			break;
				case 39:
				//right
				$('.nav-law.next-law').click();
			break;
		}
	});

});