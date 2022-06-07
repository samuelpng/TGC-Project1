const BASE_API_URL = "https://api.foursquare.com/v3/";

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
            'categories': '10015,10022,10018,10021',
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
indEnt()

