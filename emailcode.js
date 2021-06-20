$('#sendmail').click(function() {
	
	var name = $("#name").val();
	var email = $("#email").val();
	var text = $("#message").val();
	if (name == "") {

		
		swal({
			title: "Error!",
			text: "Name is a mandatory field",
			icon: "warning",
		  });
		// $('#mailmodal').modal('show');
		// $('#Allmessages').text(
		// 		"Name is a mandatory field");
		return false;
	} else if (email == "" ) {

		
		swal({
			title: "Error!",
			text: "Email is a mandatory field",
			icon: "warning",
		  });
		// $('#mailmodal').modal('show');
		// $('#Allmessages').text(
		// 		"email is a mandatory field");
		return false;
	} 
	// else if (isEmail(email) == false) {

	// 	swal({
	// 		title: "Error!",
	// 		text: "Please enter valid email id",
	// 		icon: "warning",
	// 	  });

	// 	// $('#mailmodal').modal('show');
	// 	// $('#Allmessages').text("Please enter correct email / Phone address");
	// 	return false;

		
	// }
	 else if (text == "") {
		 
		swal({
			title: "Error!",
			text: "Message is a mandatory field",
			icon: "warning",
		  });
		// $('#mailmodal').modal('show');
		// $('#Allmessages').text(
		// 		"message is a mandatory field");
		return false;
	}
	var dataString = 'name=' + name + '&email=' + email + '&text=' + text;
	console.log("dataString: "+dataString)
	$("#name").val("");
	$("#email").val("");
	$("#message").val("");
	$.ajax({
		type : "POST",
		url : "email.php",
		data : dataString,
		success : function(data) {
			console.log(data);
			// var front = data.split(">")[1];
			// var end = front.split("<")[0];
			// $('#mailmodal').modal('show');
			// $('#Allmessages').text(end);
			if(data.includes('success')){
				swal({
					title: "Success",
					text: 'Mail was successfully sent!',
					icon: "success",
				});
			}
			else if(data.includes('failed')){

				swal({
					title: "Error!",
					text: 'Problem in Sending Mail. Try again later.',
					icon: "warning",
				});
			}
			
			// setTimeout(function() {
			// 	location.reload();
			// }, 2000);
		}
	});
	return false;
});
