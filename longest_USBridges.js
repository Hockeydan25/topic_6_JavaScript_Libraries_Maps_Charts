let longestUsbridgesCoordinates = [44.96, -93.2] //visist differnet parts od the world 
let zoomLevel= 9 //zoom levels 1 =The Whole World, 20 = city blocks.

let map = L.map('longest_Usbridges').setView(longestUsbridgesCoordinates, zoomLevel) //map method needs the div  . no hashTag.
//tiles are also needed to create map background.
//L is our leaflet tile layer. A series of images. Note to contributors inportant no 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.roadtraffic-technology.com/features/feature-the-ten-longest-suspension-bridges-in-the-us/">OpenStreetMap</a> contributors'
}).addTo(map);

