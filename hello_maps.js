let metroAreCenterCoordinates = [44.96, -93.2] //visist differnet parts od the world 
let zoomLevel= 9 //zoom levels 1 =The Whole World, 20 = city blocks.

let map = L.map('college-map').setView(metroAreCenterCoordinates, zoomLevel) //map method needs the div  . no hashTag.
//tiles are also needed to create map background.
//L is our leaflet tile layer. A series of images. Note to contributors inportant no 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] }, 
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] }, 
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] }, 
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] }, 
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]
campuses.forEach(function(collegeCampus){ // sets campuses to loop through collegecampuse. 
    //to do draw a marker for each college marker. use L.marker
    let markerText = `<b>${collegeCampus.name}<b><br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map) 
    
})

// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minneaplois College<br><a href="https://minneapolis.edu">Website</a>')
//     .addTo(map)

// let stPaulCollegeCoordinates = [44.9483, -93.1099]
// let stPaulCollegeMarker = L.marker(stPaulCollegeCoordinates)
//     .bindPopup('St Paul College<br><a href="https://saintpaul.edu">Website</a>')
//     .addTo(map)
// let metroAreaCircle = L.circle(metroAreCenterCoordinates, { //object and properties
//     color: 'green',
//     radius: 30000,
//     fillOpacity: 0.1 // fills with transparentcy with this setting 1 is solid.

// })
//     .bindPopup('Twin Cites')
//     .addTo(map)

// let normandaleCoordinates = [44.8297, -93.3312]
// let normandaleMarker = L.marker(normandaleCoordinates).addTo(map)
// .bindPopup('Normandale College<br><a href="https://normandale.edu">Website</a>')
//     .addTo(map)
    