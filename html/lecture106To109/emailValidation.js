function validateEmail(email)
{

}

$("#email").focusin(function()
{
    var email = $("#email").val();
    if(email === "")
    {
        $("#msg").text("Go on enter valid email address!");
    }
    else
    {
        validateEmail(email);
    }
}).blur(function()
{
    $("#msg").text("");
}).keyup(function()
{
    $("#msg").text("");
    validateEmail(email);
})