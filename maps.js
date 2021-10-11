let metroAreCenterCoordinates = [44.96, -93.2] //visist differnet parts od the world 
let zoomLevel= 9 //zoom levels 1 =The Whole World, 20 = city blocks.

let map = L.map('college-map').setView(metroAreCenterCoordinates, zoomLevel) //map method needs the div  . no hashTag.
//tiles are also needed to create map background.
//L is our leaflet tile layer. A series of images. Note to contributors inportant no 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let mctcCoordinates = [44.9724, -93.2844]
let mctcMarker = L.marker(mctcCoordinates)
    .bindPopup('Minneaplois College<br><a href="https://minneapolis.edu">Website</a>')
    .addTo(map)

let stPaulCollegeCoordinates = [44.9483, -93.1099]
let stPaulCollegeMarker = L.marker(stPaulCollegeCoordinates)
    .bindPopup('St Paul College<br><a href="https://saintpaul.edu">Website</a>')
    .addTo(map)

// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates).addTo(map)

// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates).addTo(map)