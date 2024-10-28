// inicializar el contador localmente
let counter = 0

// obtener los elementos
const $counter = document.querySelector('#counter')
const $increment = document.querySelector('#increment')

// mostrar el valor inicial del contador
$counter.textContent = counter

// funcion para actualizar el contador

function updateCounter(value) {
  counter = value
  $counter.textContent = counter
}

// crear un nuevo BroadcastChannel
const channel = new BroadcastChannel('counter_channel')

// emitir los cambios del contador
$increment.addEventListener('click', () => {
  updateCounter(counter + 1)
  // enviar el nuevo valor del contador a todos los clientes
  channel.postMessage(counter)
})

// escuchar los mensajes de otros clientes
channel.onmessage = (event) => {
  updateCounter(event.data)
}