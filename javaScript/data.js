const ONEMAP_BASE_API_URL = 'https://developers.onemap.sg/'




async function indEnt(){
    let response =await axios.get('../foursquare.geojson');
    return response.data;
}



async function search(searchQuery){
    let response = await axios.get(ONEMAP_BASE_API_URL + `commonapi/search?searchVal=${searchQuery}&returnGeom=Y&getAddrDetails=Y&pageNum=1`)
    console.log(response)
    return response
}






