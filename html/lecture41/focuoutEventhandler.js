$("#name").focusin(function()
{
    $("#info1").html("Type your name");
}).focusout(function()
{
    $("#info1").html("");
})

$("#age").focusin(function()
{
    $("#info2").html("Type your age");
}).focusout(function()
{
    $("#info2").html("");
})