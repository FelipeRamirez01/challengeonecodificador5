// Función para encriptar el texto
function encriptarTexto(texto, desplazamiento) {
  let textoEncriptado = '';

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];

    if (letra.match(/[a-z]/i)) {
      let codigoAscii = texto.charCodeAt(i);
      let base = letra.match(/[A-Z]/) ? 65 : 97; // Base ASCII para letras mayúsculas o minúsculas
      let letraEncriptada = String.fromCharCode(((codigoAscii - base + desplazamiento) % 26) + base);
      textoEncriptado += letraEncriptada;
    } else {
      textoEncriptado += letra;
    }
  }

  return textoEncriptado;
}

// Ejemplo de uso
let textoOriginal = 'Hola, este es el encriptador!';
let desplazamiento = 3;
let textoEncriptado = encriptarTexto(textoOriginal, desplazamiento);

console.log('Texto original:', textoOriginal);
console.log('Texto encriptado:', textoEncriptado);
