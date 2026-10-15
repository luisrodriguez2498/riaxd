document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar todos los botones que tengan la clase .btn-copy
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Obtenemos el ID del elemento objetivo desde el atributo data-target
      const targetId = button.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      const phoneNumber = targetElement.innerText.trim();

      navigator.clipboard.writeText(phoneNumber)
        .then(() => {
          // Guardamos el estado original del botón
          const originalContent = button.innerHTML;

          // Animación visual a estado copiado
          button.classList.remove('btn-outline-primary');
          button.classList.add('btn-success');
          button.innerHTML = '<i class="bi bi-check-lg me-1"></i> Copied!';
          button.disabled = true;

          // Restaurar botón después de 2 segundos
          setTimeout(() => {
            button.classList.remove('btn-success');
            button.classList.add('btn-outline-primary');
            button.innerHTML = originalContent;
            button.disabled = false;
          }, 2000);
        })
        .catch((err) => {
          console.error('Error al copiar el número: ', err);
        });
    });
  });
});