$(":text,input[type='email']").focusin(function()
{
    $(this).removeClass("clearBackground") 
    $(this).addClass("highlight");//or we can use css("background-color","red")
}).blur(function()
{
    $(this).addClass("clearBackground")
})

$(":button").click(function()
{
/*     $(this).attr("value","please wait");
    $(this).attr("disabled",true); */
    //or we can write above code as
    $(this).attr("value","please wait").attr("disabled",true);
})