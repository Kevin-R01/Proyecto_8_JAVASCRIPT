const sonido = new Audio ('./AUDIO/cancion.mp3')
const titulo = document.getElementById('titulo')
const boton = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')

function obtenerTiempoFaltante  (fechaLimite)  {
    let ahora = new Date()
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0'+ Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);



    return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
}




const tiempoDestino = "nov 21 2023 15:40:00 GMT-0500"
function detener(){
    sonido.pause()
    return console.log("Esta funcionando")
    
}

function empezar(){
    if (obtenerTiempoFaltante(tiempoDestino).tiempoFaltante <=0){
        sonido.play()
    }
    return console.log("Esta funcionando")
}

function cuentaRegresiva (tiempoFaltante,mensaje, empezar) {
    titulo.innerHTML = `Falta para navidad`
    let dias = document.getElementById('dias')
    let horas = document.getElementById('horas')
    let minutos = document.getElementById('minutos')
    let segundos = document.getElementById('segundos')
    const tiempoActual = setInterval(() =>{
        let t = obtenerTiempoFaltante(tiempoFaltante)
        dias.innerHTML = `${t.diasFaltantes}`
        horas.innerHTML = `${t.horasFaltantes}`
        minutos.innerHTML = `${t.minutosFaltantes}`
        segundos.innerHTML = `${t.segundosFaltantes}`
        console.log(t.diasFaltantes)

        

        if(t.tiempoFaltante < 1){
            const img = document.getElementById("imgOnOff")
            img.src = "../IMG/papaNoelGif.gif"
            clearInterval(tiempoActual)

            dias.innerHTML = `00`
            horas.innerHTML = `00`
            minutos.innerHTML = `00`
            segundos.innerHTML = `00`
            titulo.innerHTML = `Llego navidad`
            boton.classList.add("M")
            boton2.classList.add("M")
        }
        
    },1000)
}
cuentaRegresiva(tiempoDestino,"¡Feliz Navidad!")