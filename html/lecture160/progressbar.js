$("#upload").click(function()
{
    var val = 0;
    var interval = setInterval(function()
    {
        val += 1;
        $("#pb").progressbar({value:val,});
        $("#perc").text(val+"%");
        if(val == 100)
        {
            clearInterval(interval);
        }
    },100)
})


















