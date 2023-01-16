$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });
})

$(document).ready(function(){
    $('.botao-menu button').click(function(){
        $('.menu').slideToggle();
    })
})