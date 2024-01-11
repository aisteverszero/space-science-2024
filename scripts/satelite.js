
// Get ISS location

const API = "https://api.wheretheiss.at/v1/satellites/25544"

async function getISSLocation(){
    const resp = await fetch(API)
    const result = await resp.json()
    return result
}


function updateMap(result){
    // Variables
    const latitude = result.latitude
    const longitude = result.longitude

    // update map and marker
    map.setView([latitude, longitude])
    issMarker.setLatLng([latitude,longitude])

    // update cordinates
    document.querySelector(".platuma span").innerText = latitude.toFixed(2) + "°"
    document.querySelector(".ilguma span").innerText = longitude.toFixed(2) + "°"

GetISSLocation()

// Load map

var map = L.map('issMap').setView([0, 0], 3);
var icon = L.icon({
    iconUrl: '../assets/iss200.png',
    iconSize: [50, 32]
})

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const issMarker = L.marker([55.93, 23.31], {icon: icon}).addTo(map).setOpacity(0)

// Update satelite position
setInterval(function(){
    GetISSLocation().then(updateMap)

    setTimeout(() => {
        issMarker.setTimeout1
    }
    )

}, 2000)

// first load
GetISSLocation().then(updateMap)}