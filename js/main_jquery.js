$(document).ready(function() {
    
	$('body').on("click", ".class_name", function(e) {
        e.preventDefault();
		var a1=$('body').find('#yname').val();
		var b1=$('body').find('#mail').val();
		var c1=$('body').find('#ph_no').val();
      console.log(a1);
	  console.log(b1);
      console.log(c1);
    });
	
});