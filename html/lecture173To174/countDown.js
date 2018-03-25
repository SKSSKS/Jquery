function counter(time,url)
{
    var interval = setInterval(function()
    {
        $("#counter").text(time);
        if(time == 0)
        {
            clearInterval(interval);
            window.location = url;
        }

        time = time - 1;

    },1000)
}

$(document).ready(function()
{
    counter(5,"http://www.google.co.uk");
})