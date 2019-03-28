var mymap = L.map('mapid').setView([52.36, 4.90], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibGxveWQtY2hhbWJyaWVyIiwiYSI6ImNqcmh4NHd0ajJyZ3I0M24wZjJnOWVwZzgifQ.SaVzj9bmSvp4Zg7FhwC_Mg'
    }).addTo(mymap);

var marker = L.marker([52.39, 4.90]).addTo(mymap);
marker.bindPopup("<b><a href = 'https://treehousetribe.nl' target='_new'>Treehouse Tribe</a></b><br><p>You can find me here on business days :) </p>").openPopup();