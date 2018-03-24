$("#names, #places").sortable(
    {
        containment:"document",
        tolerance:"pointer",
        connectWith :"#places, #names",
        update: function()
        {
            content = $(this).text();
            $("#msg").text(content);
        }
    });