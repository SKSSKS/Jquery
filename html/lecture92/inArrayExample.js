$(document).ready(function()
{
    var names = ["suraj","kumar","singh"];

    

    $("#check").click(function()
    {
        var name = $("#name").val();

        if(jQuery.inArray("kumar",names) != '-1')
        {
            alert(name +" is in the array");
        }
    })
    

})