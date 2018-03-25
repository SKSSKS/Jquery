var min_value = 0;
var max_val = 100;
var stepVal = 5
$("#slider").slider(
{
    min:min_value, //to set min value
    max:max_val,
    //range:true,
    //values:[20,100],
    orientation:"vertical",

    slide:function(event,ui)
    {
        $("#slider_value").html("&pound;"+ui.value);//[0] + " to &pound;"+ui.values[1]);
    },
    
    stop:function(event,ui)
    {
        alert(ui.value);
    }

});