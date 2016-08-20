
    /*$(document).ready(function () {
        $(".details").click(function(){

            var panelArray = $(".details *");

            console.log("Panel Array Length: " + panelArray.length);

            for(var i = 0; i < panelArray.length; i++){

                var spanElem = panelArray.get(i);
                console.log(spanElem);

                var className = spanElem.attr('class');

                console.log("ClassName: " + className);

                if(className.indexOf('glyphicon-circle-arrow-down') >= 0){
                    console.log("1");
                    spanElem.attr('class','drop glyphicon glyphicon-circle-arrow-up pull-right');
                }else {
                    console.log("2");
                    spanElem.attr('class','drop glyphicon glyphicon-circle-arrow-down pull-right');
                }
            }
        });
    })*/

    $(document).ready(function () {

        /*if($(".authorInfo").offsetHeight < $(".authorInfo").scrollHeight || $(".authorInfo").offsetWidth < $(".authorInfo").scrollWidth){
            $(".authorInfo").hide();
            console.log("check1");
        }else{
            console.log("check2");
            $(".authorInfo").show();
        }*/

        $(".newsLetter .btn").click(function(){

            var btnContent = $(this).children();
           /* alert($(btnContent).children().attr("class"));*/
            $(btnContent).children().toggleClass("glyphicon-circle-arrow-down");
            $(btnContent).children().toggleClass("glyphicon-circle-arrow-up");

                /*if($(btnContent).children().hasClass("glyphicon-circle-arrow-down")){
                    console.log("check");
                    $(".drop").removeClass("glyphicon-circle-arrow-up");
                    $(".drop").addClass("glyphicon-circle-arrow-down");
                }*/

        });

    });