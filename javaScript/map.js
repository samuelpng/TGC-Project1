function createMap(lat,lng){

    let map =L.map("map");

    //center of map and zoom
    map.setView([lat,lng], 12)

    var basemap = L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 18,
            minZoom: 11,
            //Do not remove this attribution
            attribution: '<img src="https://www.onemap.gov.sg/docs/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
          }).addTo(map);
    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    // maxZoom: 18,
    // id: 'mapbox/streets-v11',  // style of the tiles
    // tileSize: 512,
    // zoomOffset: -1,
    // accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
// }).addTo(map);
    return map;
}

// async function escapeRoomGroup(){
// let escapeRoomGroup = L.layerGroup();
// let locations = await indEnt();
// for (let result of locations.results){
//     let lat = result.geocodes.main.latitude;
//     let lng = result.geocodes.main.longitude;
//     if (result.categories[0].name == 'Escape Room'){
    const ecapeRoomIcon = L.icon({
        iconUrl: '../pictures/escape.png', 
        iconSize: [40,40],
        iconAnchor: [22,94],
        popupAnchor: [-3,-76]
    })
// .addTo(escapeRoomGroup)
//     return escapeRoomGroup
//     }
//     }
// }

// async function bowlingAlley(){
//     let bowlingAlleyGroup = L.layerGroup();
//     let locations = await indEnt();
//     for (let result of locations.results){
//         if (result.categories[0].name == 'Bowling Alley'){
    const bowlingAlleyIcon = L.icon({
        iconUrl: '../pictures/bowling.png',
    
        iconSize: [40,40],
        iconAnchor: [22,94],
        popupAnchor: [-3,-76]
    })
//     }).addTo(bowlingAlleyGroup)
//         return bowlingAlleyGroup 
//     }
//     }
// }

// async function gamingCafe(){
//     let gamingCafeGroup = L.layerGroup();
//     let locations = await indEnt();
//     for (let result of locations.results){
//         if (result.categories[0].name == 'Bowling Alley'){
        const gamingCafeIcon = L.icon({
            iconUrl: '../pictures/joystick.png',
        
            iconSize: [40,40],
            iconAnchor: [22,94],
            popupAnchor: [-3,-76]
        })


        const searchResultIcon = L.icon({
            iconUrl: '../pictures/search.png',
        
            iconSize: [40,40],
            iconAnchor: [22,94],
            popupAnchor: [-3,-76]
        })