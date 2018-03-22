$(document).ready(function()
{
    eventTime = Date.parse("12 August 2020")/1000;  //Date.parse("12 August 2020") in milisec 
    currentTime = jQuery.now()/1000 ; // devide by 1000 to remove milisecond

    secondRemaining = eventTime - currentTime;

    days = Math.floor(secondRemaining/(60*60*24));

    $("#days").text("Only " + days + " until the event");

})