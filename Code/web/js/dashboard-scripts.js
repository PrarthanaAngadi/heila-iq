$(document).ready(function() {
    $( "#dob" ).datepicker();
    $( "#dob1" ).datepicker();
    $("#menuUser").show();
    $("#addUser").click(function() {
        $("#addUserModal").modal();
        $(".alert-success").hide();
        $(".alert-danger").hide();
    });

   $(".details").click(function(){
       console.log("hello");
        var spanElem = $(this);
        $(spanElem).toggleClass("glyphicon-circle-arrow-down");
        $(spanElem).toggleClass("glyphicon-circle-arrow-up");
    });

   $("#addJob").click(function() {
        $("#addJobModal").modal();
        $(".alert-success").hide();
        $(".alert-danger").hide();
    });
    var counter=1;
    $("#btn-create").hide();
    $("#sub-heading").click(function(){
        var sub = $(document.createElement('div'))
         .attr("class",'form-group')
    sub.after().html('<input type="text" placeholder="Sub-Heading" id="'+counter+'" class="form-control sub-heading" name="'+counter+'"/>');
    counter++;
    var desc = $(document.createElement('div'))
         .attr("class",'form-group')
    desc.after().html('<textarea placeholder="Description" class="form-control description" id="'+counter+'" name="'+counter+'"></textarea>');
    sub.appendTo("#blog-content");
    desc.appendTo("#blog-content");
    counter++;
    });
    $("#description").click(function(){
    var desc = $(document.createElement('div'))
         .attr("class", 'form-group');
    desc.after().html('<textarea placeholder="Description" class="form-control description" draggable="true" id="'+counter+'" ondragstart="drag(event,this)" name="'+counter+'"></textarea>');
    desc.appendTo("#blog-content");
    counter++;
    });
    $("#image-upload").click(function(){
    var file = $(document.createElement('div'))
         .attr("class", 'form-group');
    file.after().html('<input type="file" id="'+counter+'" class="btn btn-primary btn-file file-upload btn-block" draggable="true" ondragstart="drag(event,this)"  name="'+counter+'" data-allowed-file-extensions=["jpg", "png","gif"]/>');
    file.appendTo("#blog-content");
    counter++;
    });
    $("#done").click(function(){
        var file = $(document.createElement('div'))
            .attr("class", 'form-group');
        file.after().html('<button type="submit" class="btn btn-success btn-block">Create Blog</button>');
        file.appendTo("#blog-content");
    });
    $(".alert-success").hide();
    $(".alert-danger").hide();
});

    function allowDrop(ev) {
        ev.preventDefault();
    }

function drag(ev,element) {
    ev.dataTransfer.setData("element",element.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("element");
    debugger;
    document.getElementById(data).parentNode.removeChild(document.getElementById(data));
}
