let usuarios=['Gonzalo','Pedro','Luis','Gonzalo',]
let apellido=['Fernandez','Gomez','Poca','Silva',]
let img=['./imagenes/user.png']
let desc=['Estudiante en la asiociacion','Profesor en la asociacion','Estudiante en la asociacion','Director de la asociacion']
$(function(){
    for(let i=0;i<usuarios.length;i++){
        var crearusuario=$('<div class="carta"> <img src="'+img+'"> <p class="nombre">'+ usuarios[i]+'<br><br>'+apellido[i]+'</p> <p class="desc">'+desc[i]+'</p> </div>')
        $('#personas').append(crearusuario);}
    }) 

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