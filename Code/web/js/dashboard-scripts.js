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
    var counter=1;
    $("#btn-create").hide();
    $("#sub-heading").click(function(){
        var sub = $(document.createElement('div'))
         .attr("class",'form-group')
    sub.after().html('<input type="text" placeholder="Sub-Heading" draggable="true" ondragstart="drag(event,this)" id="'+counter+'" class="form-control sub-heading" name="'+counter+'"/>');
    counter++;
    var desc = $(document.createElement('div'))
         .attr("class",'form-group')
    desc.after().html('<textarea placeholder="Description" class="form-control description" id="'+counter+'" draggable="true" ondragstart="drag(event,this)" name="'+counter+'"></textarea>');
    sub.appendTo("#blog-content");
    desc.appendTo("#blog-content");
    $("#btn-create").show();
    counter++;
    });
    $("#description").click(function(){
    var desc = $(document.createElement('div'))
         .attr("class", 'form-group');
    desc.after().html('<textarea placeholder="Description" class="form-control description" draggable="true" id="'+counter+'" ondragstart="drag(event,this)" name="'+counter+'"></textarea>');
    desc.appendTo("#blog-content");
    $("#btn-create").show();
    counter++;
    });
    $("#image-upload").click(function(){
    var file = $(document.createElement('div'))
         .attr("class", 'form-group');
    file.after().html('<input type="file" id="'+counter+'" class="btn btn-primary btn-file file-upload" draggable="true" ondragstart="drag(event,this)"  name="'+counter+'" data-allowed-file-extensions=["jpg", "png","gif"]/>');
    file.appendTo("#blog-content");
    $("#btn-create").show();
    counter++;
    });

});

