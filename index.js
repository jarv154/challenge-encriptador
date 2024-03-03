// Esta función realiza el proceso de encriptación
function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("TituloMensaje");
  let Respuesta = document.getElementById("Instruccion");
  let Imagen = document.getElementById("ImagenCuadro");

  // Mapa de reemplazo para encriptar
  const mapaReemplazo = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  // Funciónes de reemplazo
  function reemplazarLetras(match) {
    return mapaReemplazo[match] || match;
  }

  let contieneMinusculas = /[a-z]/.test(texto);

  if (contieneMinusculas && texto.length !== 0) {
    let textoEncriptado = texto.replace(/[aeiou]/g, reemplazarLetras);
    document.getElementById("texto").value = textoEncriptado;
    document.getElementById("TituloMensaje").textContent =
      "Texto encriptado exitosamente";
    document.getElementById("Instruccion").textContent = "";
    document.getElementById("ImagenCuadro").src = "./img/Encriptado.png";
  } else {
    document.getElementById("ImagenCuadro").src = "./img/Incorrecto.png";
    alert(
      "Necesitas poner un código válido o que contenga al menos una letra minúscula"
    );
  }
}

// Esta función realiza el proceso de desencriptación
function desencriptar() {
  let textoEncriptado = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("TituloMensaje");
  let Respuesta = document.getElementById("Instruccion");
  let Imagen = document.getElementById("ImagenCuadro");

  // Mapa de reemplazo para desencriptar
  const mapaReemplazoDesencriptar = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  // Función de reemplazo para desencriptar
  function reemplazarLetrasDesencriptar(match) {
    return mapaReemplazoDesencriptar[match] || match;
  }
  // Desencriptar el texto
  let textoDesencriptado = textoEncriptado.replace(
    /(ai|enter|imes|ober|ufat)/g,
    reemplazarLetrasDesencriptar
  );
  document.getElementById("texto").value = textoDesencriptado;
  document.getElementById("TituloMensaje").textContent =
    "Texto desencriptado exitosamente";
  document.getElementById("Instruccion").textContent = "";
  document.getElementById("ImagenCuadro").src = "./img/Encriptado.png";
}
function copiar() {
  let cuadroTexto = document.getElementById("texto");
  let Button = document.getElementById("BotonCopiar");

  cuadroTexto.select();
  cuadroTexto.setSelectionRange(0, 99999);

  try {
    navigator.clipboard
      .writeText(cuadroTexto.value)
      .then(function () {
        alert("Texto copiado: " + cuadroTexto.value);
        Button.textContent = "Copiado";
      })
      .catch(function (err) {
        console.error("No se pudo copiar el texto: ", err);
      });
  } catch (err) {
    console.error("Error al acceder al Clipboard API: ", err);
  }
}
