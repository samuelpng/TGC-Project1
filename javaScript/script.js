

window.addEventListener('DOMContentLoaded', async function () {
    let map = createMap(1.3521, 103.8198)
    let locations = await indEnt();
    let searchResultLayer = L.layerGroup();
    searchResultLayer.addTo(map);
    console.log(locations)

    //Clustering and Layering
    let escapeRoomGroup = L.markerClusterGroup();
    let bowlingAlleyGroup = L.markerClusterGroup();
    let gamingCafeGroup = L.markerClusterGroup();
    //let userLocationGroup = L.layerGroup();

    //zoom to user location
    let userLocation = L.control.locate({
        initialZoomLevel: 16,
        drawCircle: true,
    }).addTo(map)
    userLocation.start()


    for (let place of locations.results) {
        let lat = place.geocodes.main.latitude;
        let lng = place.geocodes.main.longitude;

        //inputting additional details from foursquare
        let placeId = place.fsq_id
        let locationDetails = await entDetails(placeId)
        //console.log(locationDetails)

        if (place.categories[0].name == 'Escape Room' || locationDetails.categories[0].name=="Escape Room") {
            let escapeRoomMarker = L.marker([lat, lng], { icon: ecapeRoomIcon })
            escapeRoomMarker.bindPopup(`<h4>${place.name}</h4><p>${place.categories[0].name}, ${place.location.formatted_address}</p>`)
            //locationDetails.hours.regular[0].open ? ", " + locationDetails.hours.regular[0].open : ""
            //result.location.address_extended ? ", " + result.location.address_extended: ""
            .addTo(escapeRoomGroup)
                        
        } else if (place.categories[0].name == 'Bowling Alley') {
            let bowlingAlleyMarker = L.marker([lat, lng], { icon: bowlingAlleyIcon })
            bowlingAlleyMarker.bindPopup(`<h4>${place.name}</h4><p>${place.categories[0].name}, ${place.location.formatted_address}</p>`)
            .addTo(bowlingAlleyGroup)
            
        } else if (place.categories[0].name == 'Gaming Cafe') {
            let gamingCafeMarker = L.marker([lat, lng], { icon: gamingCafeIcon })
            gamingCafeMarker.bindPopup(`<h4>${place.name}</h4><p>${place.categories[0].name}, ${place.location.formatted_address}</p>`)
            .addTo(gamingCafeGroup)
        }
    }

    let overlays ={
        'Escape Room': escapeRoomGroup,
        'Bowling Alley': bowlingAlleyGroup,
        'Gaming Cafe': gamingCafeGroup
    }

    L.control.layers(null, overlays).addTo(map);

    //search function
    // document.querySelector('#search-btn').
    //     addEventListener('click', async function searchFunc() {
    document.querySelector('#search-txt').
        addEventListener('input', async function() {
            //clear existing markers from search result layer
            searchResultLayer.clearLayers();

            //clear existing search results
            document.querySelector("#results").innerHTML = "";

            let query = document.querySelector('#search-txt').value;
            //let center = map.getBounds().getCenter();
            let response = await search(query)
            console.log(response.data.results)

            for (let eachResult of response.data.results) {
                console.log(eachResult)

                //create markers and put on map
                let coordinate = [eachResult.LATITUDE, eachResult.LONGITUDE];
                let marker = L.marker(coordinate).addTo(searchResultLayer);
                marker.bindPopup(`<div><p><b>${eachResult.SEARCHVAL}<b></p></div>`)

                //create the search result entry and display under searchbar
                let resultElement = document.createElement('div');
                resultElement.className="search-result";
                resultElement.innerHTML = eachResult.SEARCHVAL;
                
                // document.querySelector("#search-txt").addEventListener('input', function(){
                //     let resultElement = document.createElement('div');
                //     resultElement.className="search-result";
                //     resultElement.innerHTML = eachResult.SEARCHVAL;
                // })
                
                resultElement.addEventListener('click',function(){
                    map.flyTo(coordinate, 15)
                    marker.openPopup();
                    document.querySelector("#results").innerHTML = "";
                    document.querySelector('')
                })

                document.querySelector("#results").appendChild(resultElement);
            } 
        })

})
