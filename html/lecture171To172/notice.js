function hide()
{
    $("#slider").hide();
}
function slideNotice(text)
{
    $("#slider").html("<h3>"+ text +"</h3>").slideDown(2000).slideUp(2000);
}