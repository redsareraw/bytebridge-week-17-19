$(document).ready(function() {
    $(".title").hover(function() {
        $(this).css("color", "blue");
    }, function() {
        $(this).css("color", "black");
    });

    let originalText;
    let originalBackground;
    let isChanged = false;

    $(".main").click(function() {
        let newText = "jQuery is a fast, JavaScript library that makes many tastks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compress it."
        if (!isChanged) {
            originalText = $(this).text();
            $(this).text(newText);
            $(".title").css("background-color", "orange");
            isChanged = true;
        } else {
            $(this).text(originalText);
            $(".title").css("background-color", "paleturquoise")
            isChanged = false;
        };
    });

    $(".languages").dblclick(function() {
        $(this).hide();
    });

    $(".names").keydown(function() {
        $(this).addClass("input")
    });
})