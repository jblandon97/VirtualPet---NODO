
let satisfecho = 100
let aseado = 100
let tranquilo = 100
let alegre = 100
let sociable = 100


function Start(){
  let temporizador = setInterval(Loop, 1000)
}

function Comer(){
  satisfecho = 100
  document.getElementById('satisfecho').innerHTML = satisfecho + '%'
  document.getElementById('satisfecho').style.width = satisfecho + 'px'
}


function Bañar(){
  aseado = 100
  document.getElementById('aseado').innerHTML = aseado + '%'
  document.getElementById('aseado').style.width = aseado + 'px'
}


function Dormir(){
  tranquilo = 100
  document.getElementById('tranquilo').innerHTML = tranquilo + '%'
  document.getElementById('tranquilo').style.width = tranquilo + 'px'
}


function Jugar(){
  alegre = 100
  document.getElementById('alegre').innerHTML = alegre + '%'
  document.getElementById('alegre').style.width = alegre + 'px'
}


function Conversar(){
  sociable = 100
  document.getElementById('sociable').innerHTML = sociable + '%'
  document.getElementById('sociable').style.width = sociable + 'px'
}

const Loop =(time = 2) =>{

  let total = satisfecho + aseado + tranquilo + alegre + sociable


  if(satisfecho <= 0 || aseado <= 0 || tranquilo <= 0 || alegre <= 0 || sociable <= 0){
     document.getElementById("pet").src="img/preto.jpg"
     document.getElementById('msg').innerHTML = 'Ha muerto !! Recarga la pagina'
  }
  else if(total > 400) document.getElementById("pet").src="img/nivel1.jpg"
  else if(total > 300) document.getElementById("pet").src="img/nivel2.jpg"
  else if(total > 200) document.getElementById("pet").src="img/nivel3.jpg"
  else if(total > 100) document.getElementById("pet").src="img/nivel4.jpg"
  else if(total > 50)  document.getElementById("pet").src="img/nivel5.jpg"
  else if(total > 10)  document.getElementById("pet").src="img/nivel6.jpg"
  

  time = parseInt(time)

  satisfecho -= time
  aseado -= time
  tranquilo -= time
  alegre -= time
  sociable -= time

  document.getElementById('satisfecho').style.width = satisfecho + 'px'
  document.getElementById('aseado').style.width = aseado + 'px'
  document.getElementById('tranquilo').style.width = tranquilo + 'px'
  document.getElementById('alegre').style.width = alegre + 'px'
  document.getElementById('sociable').style.width = sociable + 'px'


  document.getElementById('satisfecho').innerHTML = satisfecho + '%'
  document.getElementById('aseado').innerHTML = aseado + '%'
  document.getElementById('tranquilo').innerHTML = tranquilo + '%'
  document.getElementById('alegre').innerHTML = alegre + '%'
  document.getElementById('sociable').innerHTML = sociable + '%'
}

Start()
