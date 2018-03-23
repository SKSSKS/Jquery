(function($)
{
    $.fn.countdown = function(options)
    {
        var settings = {"date" : null};
        if(options)
        {
            $.extend(settings,options)
        }

        this_sel = $(this);

        eventDate = Date.parse(settings["date"])/1000;
        function count()
        {
            currentDate = $.now()/1000;

            seconds = Math.floor( eventDate - currentDate);
            days = Math.floor(seconds/(60*60*24));
            seconds = seconds%(60*60*24);
            hours = Math.floor(seconds/(60*60));
            seconds = seconds%(60*60);
            mins = Math.floor(seconds/(60));
            secs =Math.floor(seconds%60);
            
            days = (String(days).length < 2 ) ? "0"+days : days;
            hours = (String(hours).length < 2 ) ? "0"+hours : hours;
            mins = (String(mins).length < 2 ) ? "0"+mins : mins;
            secs = (String(days).length < 2 ) ? "0"+secs : secs;

            
            $("#secs").text(secs);
            $("#mins").text(mins);
            $("#hours").text(hours);
            $("#days").text(days);
        }

        count();
        setInterval(count,1000);
    }
})(jQuery)