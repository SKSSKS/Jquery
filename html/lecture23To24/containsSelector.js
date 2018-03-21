$(document).ready(function()
{
    $("#searchName").keyup(function()
    {
        var keyVal = $(this).val();


        //tp remove highlight class
        $("#names li").removeClass("highlight");

        if( jQuery.trim(keyVal) != "")
        {
            $("#names li:contains('" + keyVal + "')").addClass("highlight");
        }
    });
});