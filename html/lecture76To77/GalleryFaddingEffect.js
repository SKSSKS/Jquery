$(document).ready(function()
{
    $(".fadeto").mouseover(function()
    {
        //$(this).fadeTo("slow");
        //$(this).fadeTo(2000,0.4);
        /* $(this).fadeTo(2000,1,function()
        {
            $(".fadeto").not(this).fadeTo(10,0.4);
        }) */

        $(this).fadeTo(50,1);
        $(".fadeto").not(this).fadeTo(10,0.4);

    })
})