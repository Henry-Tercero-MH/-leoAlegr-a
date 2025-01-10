// Función para obtener el libro de la Biblia (por ejemplo, Proverbios)
async function getBookInfo(bookName) {
  try {
    // Hacemos la solicitud a la API para obtener información sobre el libro
    const response = await fetch(
      `https://bible-api.deno.dev/api/book/${bookName}`
    );

    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error("Error al obtener la información del libro");
    }

    // Convertimos la respuesta a JSON
    const data = await response.json();

    // Mostramos la información del libro
    console.log(`Información del libro: ${data.name}`);
    console.log(`Abreviatura: ${data.abrev}`);
    console.log(`Capítulos: ${data.chapters}`);
    console.log(`Testamento: ${data.testament}`);
  } catch (error) {
    console.error("Error al obtener el libro:", error);
  }
}

// Función para obtener el versículo del día
async function getDailyVerse() {
  try {
    // Hacemos la solicitud a la API para obtener Proverbios 1:1 en la versión NVI
    const response = await fetch(
      "https://bible-api.deno.dev/api/read/nvi/proverbios/1/1"
    );

    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error("Error al obtener el versículo");
    }

    // Convertimos la respuesta a JSON
    const data = await response.json();

    // Verificamos si la respuesta contiene el versículo
    if (data && data.length > 0) {
      // Mostrar el versículo en el HTML
      const verseText = data[0].verse;
      const verseNumber = data[0].number;

      // Actualizamos el contenido del versículo en la página
      document.getElementById(
        "question"
      ).innerText = `Versículo del Día: Proverbios ${verseNumber}:1 - ${verseText}`;

      // También obtenemos información sobre el libro Proverbios
      getBookInfo("proverbios");
    } else {
      throw new Error("No se pudo obtener el versículo del día");
    }
  } catch (error) {
    // Si hay un error, mostramos un mensaje en la consola
    console.error("Error al obtener el versículo:", error);
    document.getElementById("question").innerText =
      "Error al obtener el versículo del día.";
  }
}

// Llamamos a la función cuando la página carga
window.onload = function () {
  getDailyVerse();
};
