$(function ()
{
    $(".main-body").hide();
    $("#move-button2").hide();
});

$(document).ready(function ()
{
    $("#move-button").click(function ()
    {
        $(".main-body").slideToggle();
        $("#glyph").toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
    });
});