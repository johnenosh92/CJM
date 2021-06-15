$('#sendmail').click(function() {
	var name = $("#name").val();
	var email = $("#email").val();
	var text = $("#message").val();
	if (name == "") {
		$('#mailmodal').modal('show');
		$('#Allmessages').text(
				"Name is a mandatory field");
		return false;
	} else if (email == "") {
		$('#mailmodal').modal('show');
		$('#Allmessages').text(
				"email is a mandatory field");
		return false;
	} 
	// else if (isEmail(email) == false&&phonenumber(email)==false) {



	// 	$('#mailmodal').modal('show');
	// 	$('#Allmessages').text("Please enter correct email / Phone address");
	// 	return false;

		
	// }
	 else if (text == "") {
		$('#mailmodal').modal('show');
		$('#Allmessages').text(
				"message is a mandatory field");
		return false;
	}
	var dataString = 'name=' + name + '&email=' + email
			+ '&text=' + text;
	$("#name").val("");
	$("#email").val("");
	$("#message").val("");
	$.ajax({
		type : "POST",
		url : "email.php",
		data : dataString,
		success : function(data) {
			var front = data.split(">")[1];
			var end = front.split("<")[0];
			$('#mailmodal').modal('show');
			$('#Allmessages').text(end);
			setTimeout(function() {
				location.reload();
			}, 2000);
		}
	});
	return false;
});
