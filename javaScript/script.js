window.addEventListener('DOMContentLoaded', async function(){
        let map = createMap(1.3521, 103.8198)
        let locations = await indEnt();
        let markerCluster = L.markerClusterGroup();
            console.log(locations)
        for (let place of locations.results){
            let lat = place.geocodes.main.latitude;
            let lng = place.geocodes.main.longitude;
            console.log(lat,lng)
            
            
            let marker = L.marker([lat,lng])
            marker.addTo(markerCluster).bindPopup(`<h4>${place.name}</h4><p>${place.categories[0].name}, ${place.location.formatted_address}</p>`)
            
            
            
            markerCluster.addTo(map)
            
        }
        
    })
