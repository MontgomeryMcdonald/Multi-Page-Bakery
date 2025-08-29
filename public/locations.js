$(document).ready(function(){
    var map = L.map('map').setView([33.44966, -112.07], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([33.44955, -112.05]).addTo(map);
    var othermarker = L.marker([33.44466, -112.08]).addTo(map);  
})