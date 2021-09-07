/*
    Miro Manestar
    Southern Adventist University
    Made in collaboration with the SAU School of Visual Arts and Student Missions
    miroimanestar@gmail.com
    March 26, 2021
*/

$(document).ready(function() {
    loadMap();
    loadSwiper();
    hideLoader();
});

window.onresize = loadMap;

function hideLoader() {
    setTimeout(function() {
        $('.spinner-grow').addClass('full-grow').delay(500).queue(function() { 
            $('.load-overlay').fadeOut('slow'); 
        });
    }, 2000);
}

let world_map;
function loadMap() {
    if (world_map != undefined) {
        world_map.remove();
        $('#world-map').replaceWith('<div id="world-map" class="map swiper-slide"></div>')
    }

    world_map = L.map('world-map', {
        zoomSnap: 0.25,
        zoomControl: false,
        scrollWheelZoom: false,
        maxBoundsViscosity: 0.50,
        worldCopyJump: true,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false
    }).setView([40, 0], 1.50);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/light-v10',
        maxZoom: 3,
        minZoom: 1,
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'sk.eyJ1IjoibWlyb21hbmVzdGFyIiwiYSI6ImNrbDFzYTAwejEwbnUyd3VpaHV1eWZzZmoifQ.yKU91MtkBHK1Cd_TfGkr_Q',
    }).addTo(world_map);
    
    /* Add to tileLayer to remove duplicate map
        noWrap: true,
        bounds: [
            [-90, -180],
            [90, 180]
        ]
    */

        
    world_map.fitWorld().zoomIn();
    world_map.setMaxBounds(world_map.getBounds());
    $('.leaflet-control-attribution.leaflet-control').remove();

    createMarkers();
}

function createMarkers() {
    let circle = L.circle([1.9403, 29.8739], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 1,
        radius: 100000
    }).addTo(world_map);
    circle.bindPopup(`<div class="map-popup"><div class="popup-name">IMPACT HOPE</div><div class="loc-name">Kigali, RWANDA, Africa</div></div>`)
}

function loadSwiper() {
    //Initialize swiper
    const showcaseSwiper = new Swiper('.swiper-container', {
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2
        },
        spaceBetween: 100,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true
        },
        mousewheel: {
            forceToAxis: true,
            thresholdDelta: 200
        }
    });
    
    let exploreSlides = [];
    $('.explore-container .swiper-wrapper [slide-title]').each( function() {
        exploreSlides.push($(this).attr('slide-title'))
    });

    const exploreSwiper = new Swiper('.explore-container', {
        direction: 'vertical',
        spaceBetween: 1,
        mousewheel: {
            forceToAxis: true,
            thresholdDelta: 200
        },
        keyboard: {
            enabled: true
        },
        pagination: {
            el: '.sidebar-explore',
            clickable: true,
            bulletClass: 'explore-nav',
            bulletActiveClass: 'explore-nav-current',
            renderBullet: (index, className) => {
                return `<a class="${ className }">${ exploreSlides[index] }</a>`;
            }
        }
    });
}
