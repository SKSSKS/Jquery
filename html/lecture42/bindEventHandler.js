// The best way to do thi is
$("a").bind("mouseenter mouseleave",function()
{
    $(this).toggleClass("bold");
});

//ANOTHER WAYS OF DOING THE SAME THING

//   CHECK THIS OUT
/* $("a").bind("mouseenter , mouseleave",function()
{
    $(this).toggleClass("bold");
}); */



/* $("a").mouseenter(function()
{
    $(this).addClass("bold");
}).mouseleave(function()
{
    $(this).removeClass("bold");
}) */

//    OR

/* $("a").bind("mouseenter",function()
{
    $(this).addClass("bold")
}).bind("mouseleave",function()
{
    $(this).removeClass("bold")
}); */