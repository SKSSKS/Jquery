$(document).ready(function()
{
    $(".duplicate").on(
    {
        click : function()
        {
            $(this).after('<input class="duplicate" type="button" name="" id="" value="Click"/>');
        }
    });
});



//this will not work
/* $(document).ready(function()
{
    $(".duplicate").click(function()
    {
        //this will not work
        //$(this).after('<input class="duplicate" type="button" name="" id="" value="Click"/>')
    });
}); */