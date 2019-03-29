let nombre = document.getElementById(nombre)
let apellido = document.getElementById(apellido)
let identificacion = document.getElementById(identificacion)

function validate (f) {
  let confirmado = true
  let nonono = 'Rellena el campo:\n'
  if (f.elements[0].value === '' || f.elements[0].value === null) {
    nonono += '1. Identificación\n'
    document.formi.identificacion.focus()
    confirmado = false
  }

  if (f.elements[1].value === '' || f.elements[1].value === null) {
    nonono += '2. Nombre\n'
    document.formi.nombre.focus()
    confirmado = false
  }

  if (f.elements[2].value === '' || f.elements[2].value === null) {
    nonono += '3. Apellido\n'
    document.formi.apellido.focus()
    confirmado = false
  }

  if (confirmado === false) {
    alert(nonono)
    return confirmado
  }
}
