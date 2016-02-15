$(document).ready(function(){
	
	$("form").submit(function(){ 

		if($("#password").val() != "12345"){
			alert('password is incorrect');
				return false;
	
	} else if($("#username").val() == ""){
			alert('username cannot be blank');
				return false;
	
	} else {
			alert("done");
	
	}
	
	});


	$('body').on('keypress', function(e) {
	
		if (e.keyCode <= 57){
			$("#header").html("NUMBER");
		
		} else {
				$("#header").html("LETTER");
		
		}
	
	});

});


// if (e.keyCode (64<x)&&(x<91))