# TGC-Project1

credits

https://github.com/domoritz/leaflet-locatecontrol

map.locate({setView: true, maxZoom: 16});

let response = { status: 400 };
    try {
        response = await axios.get(`https://developers.onemap.sg/commonapi/search?searchVal=${searchData}&returnGeom=Y&getAddrDetails=Y&pageNum=1`);
    } catch (e) {
        // printing error exception
        console.error(e);
    }
    return response;
}
