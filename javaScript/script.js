window.addEventListener('DOMContentLoaded', async function () {
    let map = createMap(1.3521, 103.8198)
    let locations = await indEnt();
    let searchResultLayer = L.layerGroup();
    searchResultLayer.addTo(map);
    
    //Clustering and Layering
    let escapeRoomGroup = L.markerClusterGroup();
    let bowlingAlleyGroup = L.markerClusterGroup();
    let gamingCafeGroup = L.markerClusterGroup();
    let movieTheaterGroup = L.markerClusterGroup();
    let museumGroup = L.markerClusterGroup();
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
        // let placeId = place.fsq_id
        // let locationDetails = await entDetails(placeId)
        //console.log(locationDetails)

        //locationDetails.hours.regular[0].open ? ", " + locationDetails.hours.regular[0].open : ""
            //result.location.address_extended ? ", " + result.location.address_extended: "
        // function addMarkerToLayer(lat,lng,iconName,groupName){
        //     let escapeRoomMarker = L.marker([lat, lng], { icon: iconName })
        //     escapeRoomMarker.bindPopup(`<h4>${place.name}</h4><p>${place.categories[0].name}, ${place.location.formatted_address}</p>`)
        //     .addTo(groupName)
        // }

        if (place.categories[0].name == 'Escape Room') {
            let escapeRoomMarker = L.marker([lat, lng], { icon: ecapeRoomIcon })
            escapeRoomMarker.bindPopup(`<div class="card" style="width: 18rem;">
            <!--<img src="..." class="card-img-top" alt="...">-->
            <div class="card-body">
              <h3 class="card-title">${place.name}</h3>
              <h5 class="card-text">${place.categories[0].name}
              ${place.location.formatted_address}</h5>
            </div>
          </div>`)
            //locationDetails.hours.regular[0].open ? ", " + locationDetails.hours.regular[0].open : ""
            //result.location.address_extended ? ", " + result.location.address_extended: ""
            .addTo(escapeRoomGroup)
            // addMarkerToLayer()
                        
        } else if (place.categories[0].name == 'Bowling Alley') {
            let bowlingAlleyMarker = L.marker([lat, lng], { icon: bowlingAlleyIcon })
            bowlingAlleyMarker.bindPopup(`<div class="card" style="width: 18rem;">
            <!--<img src="..." class="card-img-top" alt="...">-->
            <div class="card-body">
              <h3 class="card-title">${place.name}</h3>
              <h5 class="card-text">${place.categories[0].name}
              ${place.location.formatted_address}</h5>
            </div>
          </div>`)
            .addTo(bowlingAlleyGroup)
            
        } else if (place.categories[0].name == 'Gaming Cafe') {
            let gamingCafeMarker = L.marker([lat, lng], { icon: gamingCafeIcon })
            gamingCafeMarker.bindPopup(`<div class="card" style="width: 18rem;">
            <!--<img src="..." class="card-img-top" alt="...">-->
            <div class="card-body">
              <h3 class="card-title">${place.name}</h3>
              <h5 class="card-text">${place.categories[0].name}
              ${place.location.formatted_address}</h5>
            </div>
          </div>`)
            .addTo(gamingCafeGroup)

        }else if (place.categories[0].name == 'Movie Theater') {
            let gamingCafeMarker = L.marker([lat, lng], { icon: movieTheaterIcon })
            gamingCafeMarker.bindPopup(`<div class="card" style="width: 18rem;">
            <!--<img src="..." class="card-img-top" alt="...">-->
            <div class="card-body">
              <h3 class="card-title">${place.name}</h3>
              <h5 class="card-text">${place.categories[0].name}
              ${place.location.formatted_address}</h5>
            </div>
          </div>`)
            .addTo(movieTheaterGroup)

        }else if (place.categories[0].name == 'Museum') {
            let gamingCafeMarker = L.marker([lat, lng], { icon: museumIcon })
            gamingCafeMarker.bindPopup(`<div class="card" style="width: 18rem;">
            <!--<img src="..." class="card-img-top" alt="...">-->
            <div class="card-body">
              <h3 class="card-title">${place.name}</h3>
              <h5 class="card-text">${place.categories[0].name}
              ${place.location.formatted_address}</h5>
            </div>
          </div>`)
            .addTo(museumGroup)
        }
    }

    

    //function to on and off entertainment layers
    function layerCheckbox(checkboxName,checkboxId,checkboxLayer, iconId){
        document.querySelector(`input[name=${checkboxName}]`).addEventListener('change', function() {
            if (document.querySelector(`#${checkboxId}`).checked) {
            map.addLayer(checkboxLayer);
            document.querySelector(`#${iconId}`).style.opacity = 1.0;
            } else if (!document.querySelector(`#${checkboxId}`).checked) {
            map.removeLayer(checkboxLayer);
            document.querySelector(`#${iconId}`).style.opacity = 0.5;
                }
            })
        }
    
    //add layers to layerCheckbox function
    layerCheckbox('escapeRoomCheckbox','escapeRoomCheckbox',escapeRoomGroup,'escapeRoomIcon'); 
    layerCheckbox('bowlingAlleyCheckbox','bowlingAlleyCheckbox',bowlingAlleyGroup,'bowlingAlleyIcon');
    layerCheckbox('gamingCafeCheckbox','gamingCafeCheckbox',gamingCafeGroup,'gamingCafeIcon');
    layerCheckbox('movieTheaterCheckbox','movieTheaterCheckbox',movieTheaterGroup,'movieTheaterIcon');
    layerCheckbox('museumCheckbox','museumCheckbox',museumGroup,'museumIcon');
    
    //layers to be added to map upon page being loaded
    escapeRoomGroup.addTo(map);
    bowlingAlleyGroup.addTo(map);
    gamingCafeGroup.addTo(map);
    movieTheaterGroup.addTo(map);
    museumGroup.addTo(map);
    
        let landingSearch = document.querySelector("#landing-search");
        let landingBtn = document.querySelector("#landing-btn");
        document.querySelector("#landing-page").style.zIndex = "400000";
    
          landingBtn.addEventListener('click', async function(){
            let response = await search(landingSearch.value)
            document.querySelector("#clear-btn").style.display = "inline"
            document.querySelector('#search-txt').value = landingSearch.value
            document.querySelector("#landing-page").style.zIndex = "-1";
            for (let eachResult of response.data.results) {
                
                //create markers and put on map
                let coordinate = [eachResult.LATITUDE, eachResult.LONGITUDE];
    
                let cardElement = document.createElement('div')
                            cardElement.className="landing-result";
                            cardElement.innerHTML=
                            `<div class="card" style="width: 15rem;">
                            <!--<img src="..." class="card-img-top" alt="...">-->
                            <div class="card-body">
                              <h5 class="card-title">${eachResult.SEARCHVAL}</h5>
                              <p class="card-text">${eachResult.ADDRESS}</p>
                            <!--  <a href="#" id="go-btn" class="btn btn-warning">Go</a>-->
                            </div>
                          </div>`
                            document.querySelector("#card-results").appendChild(cardElement);  
                            let marker = L.marker(coordinate, { icon: searchResultIcon }).addTo(searchResultLayer);
                                marker.bindPopup(`<div><p><b>${eachResult.SEARCHVAL}<b></p></div>`)
                                cardElement.addEventListener('mouseover',function(){
                                    searchResultLayer.clearLayers();
                                    let marker = L.marker(coordinate, { icon: searchResultIcon }).addTo(searchResultLayer);
                                    marker.bindPopup(`<div><p><b>${eachResult.SEARCHVAL}<b></p></div>`)
                                    marker.openPopup()
                                    map.flyTo(coordinate,15); 
                                })
                                
                                cardElement.addEventListener('click',function(){
                                    map.flyTo(coordinate,16); 
                                    //searchResultLayer.clearLayers();
                                    document.querySelector("#card-results").innerHTML = "";
                                    // let marker = L.marker(coordinate, { icon: searchResultIcon }).addTo(searchResultLayer);
                                    // marker.bindPopup(`<div><p><b>${eachResult.SEARCHVAL}<b></p></div>`)
                                    marker.openPopup()
                                })
             }
            
            })


    //clear search when clear button is pressed                
    document.querySelector('#clear-btn').addEventListener('click',function(){
        console.log("clear btn clicked")
        document.querySelector("#results").innerHTML = "";
        document.querySelector("#card-results").innerHTML = "";
        // document.querySelector("#landing-search").value="";
        searchQuery.value="";
        searchResultLayer.clearLayers();
    })


    let searchQuery = document.querySelector('#search-txt')

        

    searchQuery.
        addEventListener('input', async function() {
            
            //show clear button
            document.querySelector("#clear-btn").style.display = "inline";

            //hide clear button when searchbox empty
            if (searchQuery.innerHTML.value === ""){
            document.querySelector("#clear-btn").style.display = "none";
            }

            //clear existing markers from search result layer
            searchResultLayer.clearLayers();

            //clear existing search results
            document.querySelector("#results").innerHTML = "";

            //clear existing search cards
            document.querySelector("#card-results").innerHTML = "";
            
            let response = await search(searchQuery.value)
            //console.log(response.data.results)

            //clear/reset search query whenever enter is pressed
            searchQuery.addEventListener('keypress',function(enter){
                if (enter.key === "Enter"){
                 document.querySelector("#card-results").innerHTML="";
                    }
                })

               

            for (let eachResult of response.data.results) {
                //console.log(eachResult)

                //create markers and put on map
                let coordinate = [eachResult.LATITUDE, eachResult.LONGITUDE];
                //let marker = L.marker(coordinate).addTo(searchResultLayer);
                //marker.bindPopup(`<div><p><b>${eachResult.SEARCHVAL}<b></p></div>`)

                //create the search result entry and display under searchbar
                let resultElement = document.createElement('div');
                resultElement.className="search-result";
                resultElement.innerHTML = eachResult.SEARCHVAL;
                

                //create card of search results when user presses enter
                searchQuery.addEventListener('keypress',function(enter){
                    if (enter.key === "Enter"){
                        let cardElement = document.createElement('div')
                        cardElement.className="search-card";
                        cardElement.innerHTML=
                        `<div class="card" style="width: 15rem;">
                        <!--<img src="..." class="card-img-top" alt="...">-->
                        <div class="card-body">
                          <h5 class="card-title">${eachResult.SEARCHVAL}</h5>
                          <p class="card-text">${eachResult.ADDRESS}</p>
                        <!--  <a href="#" id="go-btn" class="btn btn-warning">Go</a>-->
                        </div>
                      </div>`
                        document.querySelector("#results").innerHTML = "";
                        document.querySelector("#card-results").appendChild(cardElement);  
                        // let marker = L.marker(coordinate, { icon: searchResultIcon }).addTo(searchResultLayer);
                        //     marker.bindPopup(`<div><p><b>${eachResult.SEARCHVAL}<b></p></div>`)
                        
                        //map.flyTo(coordinate,15);

                        cardElement.addEventListener('mouseover',function(){
                            searchResultLayer.clearLayers();
                            let marker = L.marker(coordinate, { icon: searchResultIcon }).addTo(searchResultLayer);
                            marker.bindPopup(`<div><p><b>${eachResult.SEARCHVAL}<b></p></div>`)
                            marker.openPopup()
                            map.flyTo(coordinate,15); 
                        })
                        
                        cardElement.addEventListener('click',function(){
                            map.flyTo(coordinate,16); 
                            //searchResultLayer.clearLayers();
                            document.querySelector("#card-results").innerHTML = "";
                            let marker = L.marker(coordinate, { icon: searchResultIcon }).addTo(searchResultLayer);
                            marker.bindPopup(`<div><p><b>${eachResult.SEARCHVAL}<b></p></div>`)
                            marker.openPopup()
                        })


                        // document.querySelector('#go-btn').addEventListener('click',function(){
                        //     map.flyTo(coordinate,16);
                        // })
                    }
                    
                })

                //zoom to location and marker pop up when click on search result
                resultElement.addEventListener('click',function(){
                    map.flyTo(coordinate, 15)
                    let marker = L.marker(coordinate, { icon: searchResultIcon }).addTo(searchResultLayer);
                    marker.bindPopup(`<div><p><b>${eachResult.SEARCHVAL}<b></p></div>`)
                    marker.openPopup();
                    document.querySelector("#results").innerHTML = "";
                })


                document.querySelector("#results").appendChild(resultElement);
            } 
        })

})


