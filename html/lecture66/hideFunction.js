$("#hide").click(function()
{
    //$("#msg").hide(1000);

    //$("#msg").hide("slow","linear");

    //$("#msg").hide(1000,"linear");

    $("#msg").hide(1000,"linear",function()
    {
        alert("paragraph deleted");
    });
});