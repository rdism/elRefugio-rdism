document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-selector');
    const htmlElement = document.documentElement;
  
    // Función para cambiar el tema
    const changeTheme = (theme) => {
      htmlElement.setAttribute('data-theme', theme);
      localStorage.setItem('selectedTheme', theme); // Guardar tema en localStorage
    };
  
    // Cambiar tema al seleccionar uno nuevo
    themeSelector.addEventListener('change', (event) => {
      changeTheme(event.target.value);
    });
  
    // Cargar tema guardado o usar el predeterminado
    const savedTheme = localStorage.getItem('selectedTheme') || 'cupcake';
    themeSelector.value = savedTheme; // Sincronizar selector
    changeTheme(savedTheme); // Aplicar tema guardado
  });
  