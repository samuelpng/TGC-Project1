const FOURSQUARE_BASE_API_URL = "https://api.foursquare.com/v3/";
const ONEMAP_BASE_API_URL = 'https://developers.onemap.sg/'
const API_KEY = "fsq3ZLL+c1Vg6ZJA6vK3P9nfJRqhGcXBSgnpIHruQiv9Wkc=";

const headers ={
    Accept : 'application/json',
    Authorization: API_KEY
}


async function indEnt() {

    let url = FOURSQUARE_BASE_API_URL +'places/search';
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
    //console.log(response.data)
    return response.data
}


async function entDetails(fsq_id) {

    let url = FOURSQUARE_BASE_API_URL + `places/${fsq_id}`;
    let response = await axios.get(url,{
        'params':{
            'fields': 'description,hours,photos,categories'
        },
        'headers':{
            'Accept' : 'application/json',
            'Authorization': API_KEY
        }
    })
    //console.log(response.data)
    return response.data
}
//entDetails('545234c7498e75338f24ed79')


async function search(searchQuery){
    let response = await axios.get(ONEMAP_BASE_API_URL + `commonapi/search?searchVal=${searchQuery}&returnGeom=Y&getAddrDetails=Y&pageNum=1`)
    console.log(response)
    return response
}





