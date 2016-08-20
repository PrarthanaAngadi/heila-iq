$(document).ready(function() {
    $( "#dob" ).datepicker();
    $( "#dob1" ).datepicker();
    $("#addUser").click(function() {
        $("#addUserModal").modal();
        $(".alert-success").hide();
        $(".alert-danger").hide();
    });

    $(".details").click(function(){

        var spanElem = $(this).children();
        $(spanElem).toggleClass("glyphicon-circle-arrow-down");
        $(spanElem).toggleClass("glyphicon-circle-arrow-up");
    });

    $("#addJob").click(function() {
        $("#addJobModal").modal();
        $(".alert-success").hide();
        $(".alert-danger").hide();
    });

    $(".alert-success").hide();
    $(".alert-danger").hide();
});

