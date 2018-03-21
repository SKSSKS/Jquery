$("#signUpForm").submit(function()
{
    var usrEmail = $("#email").val();
    $("#signupFeedback").html("Thanks, \""+ usrEmail + "\" has been signed up").css("color","red");
});