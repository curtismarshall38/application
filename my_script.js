$ ("button#submit").click(function() {

	if ($("username").val() == "" || $("password").val() == "")
		$("div#ack").html("Please enter username and password");
	else
		$.post( $("login").attr("action"),
			$("#login :input").serializeArray(),
			function(data) {

				$("div#ack").html(data);
			});

	$("#login").submit(finction() {

		return false;
	})
});