function createMap(lat, lng) {

    let map = L.map("map");

    //center of map and zoom
    map.setView([lat, lng], 12)

    var basemap = L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
        detectRetina: true,
        maxZoom: 18,
        minZoom: 11,
        //Do not remove this attribution
        attribution: '<img src="https://www.onemap.gov.sg/docs/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
    }).addTo(map);
    return map;
}


//setting the icons for each marker

const ecapeRoomIcon = L.icon({
    iconUrl: '../pictures/escape.png',
    iconSize: [40, 40],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
})

const bowlingAlleyIcon = L.icon({
    iconUrl: '../pictures/bowling.png',

    iconSize: [40, 40],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
})

const gamingCafeIcon = L.icon({
    iconUrl: '../pictures/joystick.png',

    iconSize: [40, 40],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
})

const movieTheaterIcon = L.icon({
    iconUrl: '../pictures/movie-theater.png',

    iconSize: [40, 40],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
})

const museumIcon = L.icon({
    iconUrl: '../pictures/museum.png',

    iconSize: [40, 40],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
})

const searchResultIcon = L.icon({
    iconUrl: '../pictures/search.png',

    iconSize: [40, 40],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
})

//hide clear button


document.querySelector("#clear-btn").style.display = "none";
