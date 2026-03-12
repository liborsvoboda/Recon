Metro.adblockSetup({
    localhost: false
});

var metroAdblockSetup = {
    checkInterval: 5000,
    fireOnce: 3,
    onBite: function () {
        console.warn("Adblock present");
    }
}

$(function() {
    "use strict";

    var form = $(".need-validation");
    form.on("submit", function(event) {
        event.preventDefault();
        event.stopPropagation();
    }, false);

    $.each($("pre"), function(){
        var pre = $(this);
        pre.prepend($("<button>").addClass("button square copy-button rounded").attr("title", "Copy").html("<span class='mif-copy'></span>"));
    });

    hljs.initHighlightingOnLoad();

    new Clipboard('.copy-button', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });

    Metro.utils.cleanPreCode("pre code, textarea");


    $(window).on("adblockalert", function(){
         setTimeout(function(){
             Metro.createToast(
                 "<span class='text-leader'>The Project is blocked.</span>" +
                 "Please disable ad blocker for full Using functionality."+
                 "This is start off Web Version of EASY-SYSTEM-Builder",
                 null, null, "alert",
                 {
                     showTop: true,
                     distance: 60,
                     timeout: 10000
                 }
             );
         }, 2000);
     })

    $("html").addClass("scrollbar-type-1 sb-cyan");
});

