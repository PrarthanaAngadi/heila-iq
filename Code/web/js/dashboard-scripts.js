$(document).ready(function() {
    $( "#dob" ).datepicker();
    $( "#dob1" ).datepicker();
    $("#addUser").click(function() {
        $("#addUserModal").modal();
    });

    $(".details").click(function(){

        var spanElem = $(this).children();
        $(spanElem).toggleClass("glyphicon-circle-arrow-down");
        $(spanElem).toggleClass("glyphicon-circle-arrow-up");
    });

    $("#addJob").click(function() {
        $("#addJobModal").modal();
    });

});

