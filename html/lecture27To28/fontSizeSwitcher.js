function changeSize(element, size)
{
    var current = parseInt(element.css("font-size"));
    
    if(size == "smaller")
    {
       var newSize = current - 2;
    }
    else if(size == "bigger")
    {
        var newSize = current + 2;
    }
    element.css("font-size", newSize +"px");// size = 2px
}

$("#smaller").click(function()
{
    changeSize($("p"),"smaller");
});

$("#bigger").click(function()
{
    changeSize($("p"),"bigger");
});