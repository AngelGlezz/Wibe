$(document).ready(function(){
	$( "#indepth_text" ).click(function() {
  		$( "#tour" ).slideToggle( "slow" );
  		if ($('i').hasClass('fa-caret-up'))
  		{
			$('i').removeClass('fa-caret-up');
			$('i').addClass('fa-caret-down');
		}
		else {
			$('i').addClass('fa-caret-up');
			$('i').removeClass('fa-caret-down');
		}
	});
	barsDisapear();
});

function barsDisapear(){
	$("#nav-bar-stats").remove();
	$("#mobile-horizontal-menu").remove();
	$("#top-bar-wrapper").remove();
	$("#mobilemenu").remove();
}