$(document).ready(function() {
    $( "#dob" ).datepicker();
    $("#addUser").click(function() {
        $("#addUserModal").modal();
    });
    /*Jobs Page toggle glyphicon*/
    $(".details").click(function(){

        var spanElem = $(this).children();
        $(spanElem).toggleClass("glyphicon-circle-arrow-down");
        $(spanElem).toggleClass("glyphicon-circle-arrow-up");
    });

    $("#addJob").click(function() {
        $("#addJobModal").modal();
    });
  /*  $('.modal').on('hidden.bs.modal', function (e) {
        $('form')[0].reset();
        $("form input").attr('class', '');
        $('form p').attr('class','');

    })
    $('.modal').on('show.bs.modal', function (e) {
        $('form input').attr('class','form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern');
        $('form p').attr('class','error ng-hide');
    })*/

});

