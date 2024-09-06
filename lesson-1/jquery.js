$(document).ready(function() {

    example1();
    example2();
    example3();
    example4();
    example5();
});

const example1 = () => {
    $(".p1").hover(function() {
        $(this).css("font-family", "Times New Roman").css("color", "red");
    }, function() {
        $(this).css("font-family", "Georgia").css("color", "white");
    });
}

const example2 = () => {
    $("button").click(function() {
        let pets = $(".pets");
        let isHidden = pets.is(":hidden");

        if(isHidden) pets.show();
        else pets.hide();

        isHidden = !isHidden;
        let title = (isHidden ? "Show" : "Hide") + " all pets";
        $(this).html(title);
    });
}

const example3 = () => {
    $("#rainbows").dblclick(function() {
        alert("You double-clicked me!");
    });
}

const example4 = () => {
    $("input").focus(function() {
        $(this).css("background-color", "lightblue");
    });

    $("input").blur(function() {
        $(this).css("background-color", "white");
    });
}

const example5 = () => {
    $("input").keyup(function() {
        $(this).css("color", "red");
    });

    $("input").keydown(function(event) {
        switch(event.originalEvent.key) {
            case "-": case ":":
                event.preventDefault();
        }
    });
}