$(document).ready(function()
{
    $('#drag').draggable({containment: "parent"});

    $('#drag').draggable({containment: [0,0,200,200]});
})