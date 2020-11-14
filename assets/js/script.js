$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente...");
        });
    $("p:first-child").dblclick(function(){
        $(this).css("color", "red");
        });
    $(".card-title").click(function() {
        $(".card-text").toggle( "slow", function() {
        });
    });

    $('a').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var move = this.hash;

            $('html, body').animate({
                scrollTop: $(move).offset().top
            }, 800, function(){
                window.location.hash = move;
            });
        }       
    })
})   