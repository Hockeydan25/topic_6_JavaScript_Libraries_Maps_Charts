let longestUSBidgesCoordinates = [37.0902, -95.7129] //variable for starting point of map coordinates
let zoomLevel= 4 //zoom levels 1 =The Whole World to  20 = city blocks. 
// variable name and here the icon propery values are set for the myIcon object element.
let myIcon = L.icon({
    iconUrl: 'bridge.png', //where the file is goint to get it from.
    iconSize: [33, 33], //sixe of the icon.
    
});

//vaiable map calls to html page id, uses style and form set view calls the coordinates and zoomlevel created
let map = L.map('longest-USBridges-map').setView(longestUSBidgesCoordinates, zoomLevel) 
/*map method needs the div  . no hashTag.tiles are also needed to create map background.
L is our leaflet tile layer. A series of images. Note: contributors important to have listed
open source is doing the work here we just pic parts we need.*/ 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//array is storing the data for the bridges
bridges =  [
    {"name": "Verrazano-Narrows Bridge", "cityState": "New York, NY", "Span": "1298.4", "Location": [40.6066, -74.0447]},
    {"name": "Golden Gate Bridge", "cityState": "San Fransico, CA", "Span": "1280.2", "Location": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge", "cityState": "Mackinaw and St. Ignace, MI", "Span": "1158.0", "Location": [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "cityState": "New York, NY New Jersey, NJ", "Span": "1067.0", "Location": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "cityState": "Tacoma and Kipsap, WA", "Span": "853,44", "Location": [47.2690, -122.5517]} 
     
]
bridges.forEach(function(bridgeNames){ // sets arrary bridged to loop through longestUSBridges. 
    //to do draw a marker for each bridge marker. use L.marker
    L.marker(bridgeNames.Location, {icon: myIcon}).addTo(map);//creates ICON for marker, displayed on the map.
    //L.marker().addTo(map)
    //L.marker(bridgeMarker.Location) //Marker icon of coordiantes displays on the map 
    let markerText = `<b>${bridgeNames.name}<br> span(Meters) ${bridgeNames.Span}<br>${bridgeNames.cityState} <b>`
    //L.marker(myIcon.Location)
    L.marker(bridgeNames.Location, {icon: myIcon}) //marks coordiantes 
       .bindPopup(markerText).addTo(map) //pops text on the marker so you can read what it is marking. 
    
})
let canvas = document.querySelector('#span_chart' )//link to the html page canvas id.
let context = canvas.getContext('2d')//telling we are using a two demsion 
//my chart started at 0 right away before we set the option property.
let chart = new Chart(context, {   //new object with arrays and more objects
    type: 'bar',    //type or style of the chart.
    data: {
        labels: ['Verrazano-Narrows Bridge', 'Golden Gate Bridge','Mackinac Bridge', 'George Washington Bridge', 'Tacoma Narrows Bridge'],//don't forget the common.
        datasets: [{
            label: 'Bridge spans in Meters',
            data: [1298.4,1280.2,1158.0 ,1067.0,853.44],
            backgroundColor:['brown', 'red', 'greenyellow','green', 'blue'] //greenyellow works too, sligh different shade.
        }]
    },//deep file dive here tracking the arrarys and objects nesting. don't forget the : .
    options: {
        scales: {
            yAxes:[{
                beginAtZero: true  //sets chart to 0 pint on the bar side chart for meters legnths of bridges.
            }]
        }
    }
})
