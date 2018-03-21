/* $("#usrText").keyup(function()
{
    var value = $(this).val();
    $("#usrFeedback").text(value);
}) */

//      OR
$("#usrText").keyup(function()
{
    var value = $(this).val();
    $("#usrFeedback").html(value);
})