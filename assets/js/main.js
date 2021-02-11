$(document).ready(function() {
    hideLoader();
});

function hideLoader() {
    setTimeout(function() {
        $('.spinner-grow').addClass('full-grow').delay(500).queue(function() { $('.load-overlay').fadeOut('slow'); });
    }, 2000);
}

function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("world-map"), {
    zoom: 4,
    center: uluru,
    });
}