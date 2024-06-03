const cssIcon = document.getElementById('cssIcon');
const sassIcon = document.getElementById('sassIcon');
const Iconosass = document.querySelector('.iconos__sass');


// Evento de mouseenter (hover) al icono de CSS
cssIcon.addEventListener('mouseenter', () => {
    Iconosass.style.opacity = '1';
});
cssIcon.addEventListener('mouseleave', () => {
    Iconosass.style.opacity = '0';
});

sassIcon.addEventListener('mouseenter', () => {
    Iconosass.style.opacity = '1';
});
sassIcon.addEventListener('mouseleave', () => {
    Iconosass.style.opacity = '0';
});