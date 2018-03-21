/* $(document).ready(function()
{
    $("#file").change(function()
    {
        $("#submit").removeAttr("disabled",);
    });
}) */

//OR
/* $(document).ready(function()
{
    $("input[type='file']").change(function()
    {
        $("#submit").removeAttr("disabled");
    }).next().attr("disabled","disabled");
}) */

//OR
$(document).ready(function()
{
    $("#file").change(function()
    {
        $(this).next().removeAttr("disabled");
    }).next().attr("disabled","disabled");
});