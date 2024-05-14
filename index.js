$(function(){
    $('#boton').click(function(){
        var resultado = $('#buscarPersona').val().toLowerCase();
        
        $('.carta').each(function(){
            var nombre = $(this).find('.nombre').text().toLowerCase();
            if(nombre.includes(resultado)){
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
})