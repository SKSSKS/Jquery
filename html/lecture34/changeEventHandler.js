$("#list").change(function()
{
    var listVal = $(this).val();
    $("#listfeedback").html(listVal);
});