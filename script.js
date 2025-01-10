let score = 0;
let correctAnswer = "";

// Función para obtener un versículo aleatorio
function getVerse() {
  fetch("https://bible-api.com/random")
    .then((response) => response.json())
    .then((data) => {
      const verse = data.text;
      correctAnswer = data.reference; // El versículo de referencia correcto

      // Mostrar el versículo en la página
      document.getElementById(
        "question"
      ).textContent = `¿De qué versículo es esta cita? "${verse}"`;

      // Crear opciones de respuesta
      const options = ["Juan 3:16", "Salmo 23:1", correctAnswer];
      shuffle(options); // Función para mezclar las opciones

      // Asignar las opciones a los botones
      document.getElementById("option1").textContent = options[0];
      document.getElementById("option2").textContent = options[1];
      document.getElementById("option3").textContent = options[2];

      // Asignar las funciones de clic a los botones
      document.getElementById("option1").onclick = () =>
        checkAnswer(options[0]);
      document.getElementById("option2").onclick = () =>
        checkAnswer(options[1]);
      document.getElementById("option3").onclick = () =>
        checkAnswer(options[2]);
    })
    .catch((error) => console.error("Error al obtener el versículo:", error));
}

// Función para mezclar las opciones de respuesta
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Intercambiar los elementos
  }
}

// Función para verificar la respuesta
function checkAnswer(selectedAnswer) {
  if (selectedAnswer === correctAnswer) {
    score++;
    alert("¡Correcto!");
  } else {
    alert("¡Incorrecto! Intenta de nuevo.");
  }

  // Mostrar el puntaje
  document.getElementById("scoreValue").textContent = score;

  // Cargar una nueva pregunta después de un breve retraso
  setTimeout(getVerse, 1500);
}

// Iniciar el juego
getVerse();
