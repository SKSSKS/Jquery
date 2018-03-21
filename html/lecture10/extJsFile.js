$(window).load(function()
{
    var c = confirm("Are you sure you wanna leave ? ");
    if(c)
    {
       return true;
    }
    else
    {
        return false;
    }
})