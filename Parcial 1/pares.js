$(document).ready(function(){
    var total_intentos=0;
    var par1="";
    var par=false;
    var par2="";
    var total_pares=0;

    $('img').click(function(e){
        var estado= $(this).attr('data-estado')
        var nombre_imagen= $(this).attr('data-id')

        if(estado=="0"){
            if(par1!= ""&& par2!= ""){
                console.log("Las cartas son diferentes")
                if(par1.attr('data-id')!=par2.attr('data-id')){
                    console.log("Tapa cartas diferentes")
                    par1.attr('src','imagenes/tap.jpg')
                    par2.attr('src','imagenes/tap.jpg')
                }else{
                    console.log("Las cartas son pares")
                    par1.attr('data-estado','1')
                    par2.attr('data-estado','1')
                    par=false
                }
                par1=""
                par2=""
            }
        }
        if(estado=="0"){
            console.log("Estado de la carta: " + estado)
            if(par1==""){
                par1=$(this);
                par1.attr('src','imagenes/' + nombre_imagen)
                console.log("Se asigno carta #1");
            }else{
                par2=$(this);
                par2.attr('src','imagenes/' + nombre_imagen)
                console.log("Se asigno carta #2");
            }
        }
        if(par1 !="" && par2!=""){
             if(par1.attr('data-id')==par2.attr('data-id')){
                par=true
                total_pares++
                $("#total_pares").html(total_pares)
                par1="";
                par2="";
             }else{
                total_intentos++
             }
        }

            if(total_intentos >= 5){
                alert("Excediste el numero de intentos permitidos")
                alert("has perdido el juego _(, vuelve a intentar de nuevo")
                $('img').each(function (){
                    $(this).attr('src', 'imagenes/tap.jpg')
                    $(this).attr('data-estado', '0')
                });
                total_pares=0
                total_intentos=0
                $("#total:pares").html(total_pares)
                par=false
                par1=""
                par2=""
                return;
            }

        if(total_pares==8){
            alert("felicidades, has ganado el juegpo")
            $('img').each(function() {
                $(this).attr('src','imagenes/tap.jpg')
                $(this).attr('data-estado', '0')
                
            });
            total_pares=0
            total_intentos=0
            $("#total:pares").html(total_pares)
            par=false
            par1=""
            par2=""
            return;
        }
    });
});