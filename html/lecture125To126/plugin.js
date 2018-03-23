(function($)
{
    $.fn.countdown = function(options,callback)
    {
        thisSel = this;
        var settings = {"from" : 60 };
        if(options)
        {
            $.extend(settings,options);
        }

        current = settings["from"];
        function countdownFun()
        {
            if(current == -1)
            {
                clearInterval(interval);
                callback.call(thisSel);
            }
            //check this why this is not available here.
            thisSel.text(current);
            current -= 1;
        }
        

        countdownFun();
        interval = setInterval(countdownFun,1000);
    }
})(jQuery)