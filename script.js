document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('wordForm');
  const input = document.getElementById('wordInput');
  const display = document.getElementById('savedWordDisplay');

  // Cargar palabra guardada si existe en localStorage
  const savedWord = localStorage.getItem('userWord');
  if (savedWord) {
    display.textContent = savedWord;
  }

  // Manejar el envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita recargar la página

    const word = input.value.trim();

    if (word) {
      // Guardar en el navegador
      localStorage.setItem('userWord', word);
      
      // Actualizar la interfaz
      display.textContent = word;
      
      // Limpiar el input
      input.value = '';
    }
  });
});