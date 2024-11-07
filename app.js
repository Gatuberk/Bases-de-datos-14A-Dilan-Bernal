// Inicializar el mapa
const map = L.map('map').setView([4.632196, -74.080762], 17.5);  // Universidad, por ejemplo

// Agregar la capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker;

map.on('click', function(e) {
    const { lat, lng } = e.latlng;

    // Si ya hay un marcador, actualizar su posición
    if (marker) {
        marker.setLatLng(e.latlng);
    } else {
        marker = L.marker([lat, lng]).addTo(map);
    }

    // Llamada a la función de geocodificación inversa
    console.log(lat, lng)

});
