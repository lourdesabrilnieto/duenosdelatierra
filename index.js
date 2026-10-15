
let pagina = 1


function MostrarOcultar(){

    const ladoiz = document.querySelector(".ladoiz")
    const machi = document.querySelector(".machi")
    const textoInicio = document.querySelector(".textoInicioOculto")
    const encabezado = document.querySelector(".encabezado")
    const comunidades = document.querySelector(".comunidades")
    const viaje = document.querySelector(".viaje")


   switch (pagina) {
    case 1:
//si al principio, en la primera lectura de la pagina, se clickea sobre la img
encabezado.classList.add("encabezadoOculto")
comunidades.classList.add("comunidadesMostrar")
textoInicio.classList.add("textoInicio")
machi.classList.remove("machi-hover")
//desaparece el encabezado, aparece el 1er subtitulo y el texto del inicio de la pag
pagina = 2
//entonces ahora estamos en el segundo paso de lectura
    break
   
    case 2:
//si cuando se ve el texto de inicio, se clickea sobre la img
textoInicio.classList.remove("textoInicio")
ladoiz.style.visibility = "visible"
machi.classList.add("machiCostado")
comunidades.classList.remove("comunidadesMostrar")
viaje.classList.add("viajeMostrar")
machi.classList.remove("machi-hover")
//entonces se muestra el texto oculto de la izquierda, junto con el 2do subtitulo nuevo,
// el machi se corre, y el texto de inicio junto con el 1er subtitulo desaparecen
pagina = 3
//este es el tercer paso de lectura
    break

    case 3:
//si en el paso 3, donde se muestran los planos y el machi esta al costado, se clickea sobre la img, se vuelve al principio
ladoiz.style.visibility = "hidden" 
machi.classList.remove("machiCostado")
viaje.classList.remove("viajeMostrar")
encabezado.classList.remove("encabezadoOculto")
comunidades.classList.remove("comunidadesMostrar")
textoInicio.classList.remove("textoInicio")
machi.classList.add("machi-hover")
//no se aplica el hover del index.css ggggg 
pagina = 1
//ahora SI se vuelve a como estaba en el principio, sacando todo lo agregado anteriormente
//del 1 se va al 2, del 2 al 3 y del 3 vuelve al 1
    break
}
  
}

//PERO cada vez que se quiera volver de algunas de las paginas para atras, va a volver a la lectura 3, no al principio
let machiAtras = document.querySelector("#machiatrasimg")
machiAtras.addEventListener("click", function VolverLectura3(){

//poner otra vez toooodas las constantes al ser otra funcion

    const ladoiz = document.querySelector(".ladoiz")
    const machi = document.querySelector(".machi")
    const textoInicio = document.querySelector(".textoInicio")
    const encabezado = document.querySelector(".encabezado")
    const comunidades = document.querySelector(".comunidadesMostrar")
    const viaje = document.querySelector(".viaje")   

//Agregar todos los cambios como si nunca existieran el switch anterior

ladoiz.style.visibility = "visible"
machi.classList.add("machiCostado")
textoInicio.classList.add("textoInicioOculto") 
encabezado.classList.add("encabezadoOculto")
comunidades.classList.add("comunidades")
viaje.classList.add("viajeMostrar")
})



function MostrarColor() {
    let textocolor = document.querySelector(".ajustetexto")
    if (textocolor.style.visibility == "visible"){
        textocolor.style.visibility = "hidden"
    }
    else{
        textocolor.style.visibility = "visible"
    }
}
function NoMostrarColor() {
    let textocolor = document.querySelector(".ajustetexto")
    let iconocolor = document.querySelector(".iconoClick")
    if (textocolor.style.visibility == "hidden" && iconocolor.style.visibility == "visible"){
        textocolor.style.visibility = "visible"
    }
    else{
        textocolor.style.visibility = "hidden"
    }
}


    let clickAca = document.querySelector(".iconoClick")
    let textoClick = document.querySelector(".ajustetexto")
    clickAca.addEventListener("click", function Sacar(){
        clickAca.style.visibility = "hidden"
        textoClick.style.visibility = "hidden"
    })


    function ZoomMapa(){
        let Mapa = document.querySelector(".mapafoto")
        Mapa.classList.add("mapafoto-Zoom")

    }