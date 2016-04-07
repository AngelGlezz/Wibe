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
});