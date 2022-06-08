const BASE_API_URL = "https://api.foursquare.com/v3/";
const ONEMAP_API_URL = 'https://developers.onemap.sg/'
const API_KEY = "fsq3ZLL+c1Vg6ZJA6vK3P9nfJRqhGcXBSgnpIHruQiv9Wkc=";

const headers ={
    Accept : 'application/json',
    Authorization: API_KEY
}


async function indEnt() {

    let url = BASE_API_URL +'places/search';
    let response = await axios.get(url,{
        'params':{
            'll': '1.3521,103.8198',
            'categories': '10015,10006,10018',
            'limit':50,
            'radius': 10000
        },
        'headers':{
            'Accept' : 'application/json',
            'Authorization': API_KEY
        }
    })
    console.log(response.data)
    return response.data
}




async function Search(searchQuery){
    let response = await axios.get(ONEMAP_API_URL + `commonapi/search?searchVal=${searchQuery}&returnGeom=Y&getAddrDetails=Y&pageNum=1`)
    console.log(response)
    return response

}




