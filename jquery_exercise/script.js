$(function() {

    let $submit = $('#submit');
    let submitToggle = false;

    let $section = $("#listContent");
    let $listSection = $("#theList");

    $submit.on('click', function(e){


        if (submitToggle === false){
            submitToggle = true;
            $section.slideDown();
        } else {
            submitToggle = false;
            $section.slideUp();
        }

    })

    $form= $("form");

    $form.on('submit',function(e){
        console.log(e);

        e.preventDefault();

        $newSpan = $("<span>")
            .attr('class', "glyphicon glyphicon-star-empty");

        $newNumSpan = $("<span>")
            .addClass("number")
            .text($("#theList>div").length+1 + ". ");

        $newA = $("<a>", {
            href: $("#url").val(),
            target: "_blank",
            text: $("#site").val()
        });

        let url = $newA.attr('href');
        url = url.split("://")[1].split("/")[0];
        if (url.split(".").length > 2){
            url = url.split(".").slice(-2).join(".");
        }

        $newUrlSpan = $("<span>")
            .attr('data-domain', url)
            .text("(" + url + ")");
        
        $newUrlSmall = $("<small>")
            .append($newUrlSpan);


        $newDiv = $("<div>")
            .append($newNumSpan)
            .append($newSpan)
            .append($newA)
            .append($newUrlSmall)

        $listSection.append($newDiv);

        $form.trigger("reset");

        submitToggle = false;
        $section.slideUp();

    })

    
    $icons = $("#theList");
    $icons.on('click',".glyphicon",function(e){
        if ($(e.target).hasClass("glyphicon-star-empty")){
            $(e.target).removeClass("glyphicon-star-empty");
            $(e.target).addClass("glyphicon-star");

        } else {
            $(e.target).removeClass("glyphicon-star");
            $(e.target).addClass("glyphicon-star-empty");
        }
    })

    let $faves = $("#favorites");
    let favesToggle = false;


    $icons.on('click',"div span:last-child",function(e){
        let site = $(e.target).parent().parent().children().eq(3).children().eq(0).attr('data-domain');
        debugger;
        $("#theList span:last-child:not([data-domain='" + site + "'])").parent().parent().css('display','none');
        $faves.text("All");

        let $numbers = $(".number");
        $numbers.css('display', 'none');

        favesToggle=true;
    });


    $faves.on('click',function(e){
        if (favesToggle === false){
            favesToggle = true;
            let $hide = $("span.glyphicon-star-empty");
            $hide.parent().css('display', 'none');
            let $numbers = $(".number");
            $numbers.css('display', 'none');
            $faves.text("All");
        } else {
            favesToggle = false;
            let $numbers = $(".number");
            $numbers.css('display', '');
            $faves.text("Favorites");
            $("#theList").children().css('display','');

        }

    })


});