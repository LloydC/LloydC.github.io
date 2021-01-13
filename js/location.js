const mymap = L.map('mapid', {center: [52.36, 4.90], zoom: 12 });

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGxveWQtY2hhbWJyaWVyIiwiYSI6ImNranZucDNocjBhYmoyb2w3azRhM2doZjMifQ.hou2WuO-vj5QnOGcx6Qd1Q'
}).addTo(mymap);