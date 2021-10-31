let longestUSBidgesCoordinates = [0, 0] //variable for starting point of map coordinates
let zoomLevel= 1 //zoom levels 1 =The Whole World to  20 = city blocks. 
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
// big list of almost 1000 bridges added from 
let bridges =[
    {
    "name": "Akashi Kaikyō Bridge",
    "span": 1991,
    "span_text": "1,991m",
    "city": "Kobe",
    "location": [
    34.617028,
    135.021917
    ]
    },
    {
    "name": "Yangsigang Yangtze River Bridge",
    "span": 1700,
    "span_text": "1,700m",
    "city": "Wuhan",
    "location": [
    30.50667,
    114.25667
    ]
    },
    {
    "name": "Nansha Bridge(East span)",
    "span": 1688,
    "span_text": "1,688m",
    "city": "Dongguan",
    "location": [
    22.88475,
    113.565667
    ]
    },
    {
    "name": "Xihoumen Bridge",
    "span": 1650,
    "span_text": "1,650m",
    "city": "Zhoushan",
    "location": [
    30.061778,
    121.916
    ]
    },
    {
    "name": "Great Belt Bridge",
    "span": 1624,
    "span_text": "1,624m",
    "city": "Korsør",
    "location": [
    55.34194,
    11.035917
    ]
    },
    {
    "name": "Osman Gazi Bridge",
    "span": 1550,
    "span_text": "1,550m",
    "city": "Dilovası",
    "location": [
    40.75417,
    29.51528
    ]
    },
    {
    "name": "Yi Sun-sin Bridge",
    "span": 1545,
    "span_text": "1,545m",
    "city": "Gwangyang",
    "location": [
    34.905944,
    127.705028
    ]
    },
    {
    "name": "Runyang Bridge",
    "span": 1490,
    "span_text": "1,490m",
    "city": "Yangzhou",
    "location": [
    32.206833,
    119.363861
    ]
    },
    {
    "name": "Second Dongtinghu Bridge [zh]",
    "span": 1480,
    "span_text": "1,480m",
    "city": "Yueyang",
    "location": [
    29.42472,
    113.12222
    ]
    },
    {
    "name": "Nanjing Fourth Yangtze Bridge",
    "span": 1418,
    "span_text": "1,418m",
    "city": "Nanjing",
    "location": [
    32.17775,
    118.940139
    ]
    },
    {
    "name": "Humber Bridge",
    "span": 1410,
    "span_text": "1,410m",
    "city": "Hessle",
    "location": [
    53.707972,
    -0.450083
    ]
    },
    {
    "name": "Yavuz Sultan Selim Bridge",
    "span": 1408,
    "span_text": "1,408m",
    "city": "İstanbul",
    "location": [
    41.20861,
    29.11806
    ]
    },
    {
    "name": "Jiangyin Bridge",
    "span": 1385,
    "span_text": "1,385m",
    "city": "Jiangyin",
    "location": [
    31.945306,
    120.26944
    ]
    },
    {
    "name": "Tsing Ma Bridge",
    "span": 1377,
    "span_text": "1,377m",
    "city": "Tsing Yi",
    "location": [
    22.351333,
    114.073778
    ]
    },
    {
    "name": "Hardanger Bridge",
    "span": 1310,
    "span_text": "1,310m",
    "city": "Ulvik",
    "location": [
    60.478583,
    6.829778
    ]
    },
    {
    "name": "Verrazzano-Narrows Bridge",
    "span": 1298,
    "span_text": "1,298m",
    "city": "New York City",
    "location": [
    40.60639,
    -74.045333
    ]
    },
    {
    "name": "Golden Gate Bridge",
    "span": 1280,
    "span_text": "1,280m",
    "city": "San Francisco",
    "location": [
    37.819306,
    -122.478861
    ]
    },
    {
    "name": "Yangluo Bridge",
    "span": 1280,
    "span_text": "1,280m",
    "city": "Wuhan",
    "location": [
    30.636917,
    114.554944
    ]
    },
    {
    "name": "Höga Kusten Bridge",
    "span": 1210,
    "span_text": "1,210m",
    "city": "Utansjö",
    "location": [
    62.79806,
    17.9375
    ]
    },
    {
    "name": "Nansha Bridge(West span)",
    "span": 1200,
    "span_text": "1,200m",
    "city": "Dongguan",
    "location": [
    22.883278,
    113.518889
    ]
    },
    {
    "name": "Longjiang River Bridge",
    "span": 1196,
    "span_text": "1,196m",
    "city": "Wuhexiang",
    "location": [
    24.838806,
    98.672194
    ]
    },
    {
    "name": "Aizhai Bridge",
    "span": 1176,
    "span_text": "1,176m",
    "city": "Jishou",
    "location": [
    28.331694,
    109.598111
    ]
    },
    {
    "name": "Mackinac Bridge",
    "span": 1158,
    "span_text": "1,158m",
    "city": "Mackinaw City",
    "location": [
    45.81556,
    -84.727944
    ]
    },
    {
    "name": "Ulsan Bridge [ko]",
    "span": 1150,
    "span_text": "1,150m",
    "city": "Ulsan",
    "location": [
    35.51139,
    129.39111
    ]
    },
    {
    "name": "Hålogaland Bridge",
    "span": 1145,
    "span_text": "1,145m",
    "city": "Rombaken",
    "location": [
    68.45889,
    17.48222
    ]
    },
    {
    "name": "Qingshui River Bridge",
    "span": 1130,
    "span_text": "1,130m",
    "city": "Kaiyang County",
    "location": [
    27.030417,
    107.189333
    ]
    },
    {
    "name": "Huangpu Bridge",
    "span": 1108,
    "span_text": "1,108m",
    "city": "Guangzhou",
    "location": [
    23.071417,
    113.476083
    ]
    },
    {
    "name": "Minami Bisan-Seto Bridge",
    "span": 1100,
    "span_text": "1,100m",
    "city": "Sakaide",
    "location": [
    34.36389,
    133.825194
    ]
    },
    {
    "name": "Xingkang Bridge兴康大桥",
    "span": 1100,
    "span_text": "1,100m",
    "city": "Luding County",
    "location": [
    29.965389,
    102.214889
    ]
    },
    {
    "name": "Wufengshan Yangtze River Bridge\n五峰山长江大桥",
    "span": 1092,
    "span_text": "1,092m",
    "city": "Zhenjiang",
    "location": [
    32.2267389,
    119.6765
    ]
    },
    {
    "name": "Fatih Sultan Mehmet Bridge",
    "span": 1090,
    "span_text": "1,090m",
    "city": "İstanbul",
    "location": [
    41.09111,
    29.06111
    ]
    },
    {
    "name": "Baling River Bridge",
    "span": 1088,
    "span_text": "1,088m",
    "city": "Guanling Buyei and Miao Autonomous County",
    "location": [
    25.96111,
    105.62944
    ]
    },
    {
    "name": "Taizhou Bridge",
    "span": 1080,
    "span_text": "1,080m",
    "city": "Taizhou",
    "location": [
    32.246611,
    119.876694
    ]
    },
    {
    "name": "Ma'anshan Bridge",
    "span": 1080,
    "span_text": "1,080m",
    "city": "Ma'anshan",
    "location": [
    31.610111,
    118.392056
    ]
    },
    {
    "name": "Bosphorus Bridge",
    "span": 1074,
    "span_text": "1,074m",
    "city": "İstanbul",
    "location": [
    41.045,
    29.03389
    ]
    },
    {
    "name": "George Washington Bridge",
    "span": 1067,
    "span_text": "1,067m",
    "city": "New York City",
    "location": [
    40.851722,
    -73.952722
    ]
    },
    {
    "name": "Fuma Yangtze River Bridge驸马长江大桥",
    "span": 1050,
    "span_text": "1,050m",
    "city": "Wanzhou",
    "location": [
    30.834667,
    108.469278
    ]
    },
    {
    "name": "Qipanzhou Yangtse River Bridge棋盘洲长江大桥",
    "span": 1038,
    "span_text": "1,038m",
    "city": "Huangshi",
    "location": [
    30.1525778,
    115.2672972
    ]
    },
    {
    "name": "Third Kurushima-Kaikyō Bridge",
    "span": 1030,
    "span_text": "1,030m",
    "city": "Imabari",
    "location": [
    34.11525,
    132.984333
    ]
    },
    {
    "name": "Second Kurushima-Kaikyō Bridge",
    "span": 1020,
    "span_text": "1,020m",
    "city": "Umashima Island",
    "location": [
    34.12111,
    133.000194
    ]
    },
    {
    "name": "25 de Abril Bridge",
    "span": 1013,
    "span_text": "1,013m",
    "city": "Lisbon",
    "location": [
    38.689861,
    -9.177167
    ]
    },
    {
    "name": "Forth Road Bridge",
    "span": 1006,
    "span_text": "1,006m",
    "city": "South Queensferry",
    "location": [
    56.0015,
    -3.404194
    ]
    },
    {
    "name": "Yidu Yangtse River Bridge [zh]宜都长江公路大桥",
    "span": 1000,
    "span_text": "1,000m",
    "city": "Yidu",
    "location": [
    30.40917,
    111.51667
    ]
    },
    {
    "name": "Kita Bisan-Seto Bridge",
    "span": 990,
    "span_text": "990m",
    "city": "Sakaide",
    "location": [
    34.378444,
    133.820333
    ]
    },
    {
    "name": "Severn Bridge",
    "span": 988,
    "span_text": "988m",
    "city": "Bristol",
    "location": [
    51.610056,
    -2.640667
    ]
    },
    {
    "name": "Yichang Bridge",
    "span": 960,
    "span_text": "960m",
    "city": "Yichang",
    "location": [
    30.569583,
    111.391528
    ]
    },
    {
    "name": "Shimotsui-Seto Bridge",
    "span": 940,
    "span_text": "940m",
    "city": "Kojima",
    "location": [
    34.431222,
    133.806444
    ]
    },
    {
    "name": "Xiushan Bridge",
    "span": 926,
    "span_text": "926m",
    "city": "Daishan",
    "location": [
    30.21111,
    122.185361
    ]
    },
    {
    "name": "Xiling Bridge",
    "span": 900,
    "span_text": "900m",
    "city": "Sandouping",
    "location": [
    30.828472,
    111.04667
    ]
    },
    {
    "name": "Si Du River Bridge",
    "span": 900,
    "span_text": "900m",
    "city": "Yesanguan",
    "location": [
    30.621139,
    110.395306
    ]
    },
    {
    "name": "Second Namhae Bridge제2남해대교",
    "span": 890,
    "span_text": "890m",
    "city": "Namhaedo",
    "location": [
    34.942889,
    127.866278
    ]
    },
    {
    "name": "Humen Pearl River Bridge",
    "span": 888,
    "span_text": "888m",
    "city": "Dongguan",
    "location": [
    22.797083,
    113.615889
    ]
    },
    {
    "name": "Cuntan Yangtze River Bridge [zh]寸滩长江大桥",
    "span": 880,
    "span_text": "880m",
    "city": "Chongqing",
    "location": [
    29.620611,
    106.606056
    ]
    },
    {
    "name": "Ōnaruto Bridge",
    "span": 876,
    "span_text": "876m",
    "city": "Naruto",
    "location": [
    34.23875,
    134.650306
    ]
    },
    {
    "name": "Lishui River Bridge",
    "span": 856,
    "span_text": "856m",
    "city": "Zhangjiajie",
    "location": [
    29.09861,
    110.24667
    ]
    },
    {
    "name": "Second Tacoma Narrows Bridge(westbound)",
    "span": 853,
    "span_text": "853m",
    "city": "Tacoma",
    "location": [
    47.268222,
    -122.550194
    ]
    },
    {
    "name": "Third Tacoma Narrows Bridge(eastbound)",
    "span": 853,
    "span_text": "853m",
    "city": "Tacoma",
    "location": [
    47.267889,
    -122.550778
    ]
    },
    {
    "name": "Askøy Bridge",
    "span": 850,
    "span_text": "850m",
    "city": "Bergen",
    "location": [
    60.395444,
    5.215222
    ]
    },
    {
    "name": "Yingwuzhou Bridge",
    "span": 850,
    "span_text": "850m",
    "city": "Wuhan",
    "location": [
    30.534056,
    114.276889
    ]
    },
    {
    "name": "Jeokgeum Bridge [ko]",
    "span": 850,
    "span_text": "850m",
    "city": "Ucheon",
    "location": [
    34.63139,
    127.50278
    ]
    },
    {
    "name": "Zhixi Yangtze River Bridge [zh] 至喜长江大桥（庙嘴长江大桥）",
    "span": 838,
    "span_text": "838m",
    "city": "Yichang",
    "location": [
    30.715611,
    111.262556
    ]
    },
    {
    "name": "Nanxi Bridge",
    "span": 820,
    "span_text": "820m",
    "city": "Nanxi District",
    "location": [
    28.783694,
    104.945694
    ]
    },
    {
    "name": "Taihong Yangtze River Bridge [zh]太洪长江大桥",
    "span": 808,
    "span_text": "808m",
    "city": "Chongqing",
    "location": [
    29.6632889,
    106.89333
    ]
    },
    {
    "name": "Qincaobei Bridge",
    "span": 788,
    "span_text": "788m",
    "city": "Lidu",
    "location": [
    29.714306,
    107.281306
    ]
    },
    {
    "name": "Innoshima Bridge",
    "span": 770,
    "span_text": "770m",
    "city": "Innoshima",
    "location": [
    34.357139,
    133.180417
    ]
    },
    {
    "name": "Jinshajiang Hutiaoxia Bridge\n金沙江大桥（香丽高速）",
    "span": 766,
    "span_text": "766m",
    "city": "Hutiaoxiazhen",
    "location": [
    27.17417,
    100.08389
    ]
    },
    {
    "name": "Akinada Bridge",
    "span": 750,
    "span_text": "750m",
    "city": "Kure",
    "location": [
    34.206222,
    132.679389
    ]
    },
    {
    "name": "Semey Bridge",
    "span": 750,
    "span_text": "750m",
    "city": "Semey",
    "location": [
    50.40972,
    80.22444
    ]
    },
    {
    "name": "Yuecheng Xijiang Bridge悦城西江大桥",
    "span": 738,
    "span_text": "738m",
    "city": "Yunfu",
    "location": [
    23.09361,
    112.21056
    ]
    },
    {
    "name": "Jinshajiang Jindong Bridge金东大桥",
    "span": 730,
    "span_text": "730m",
    "city": "Huidong County",
    "location": [
    26.50925,
    103.040194
    ]
    },
    {
    "name": "New Carquinez Bridge",
    "span": 728,
    "span_text": "728m",
    "city": "Vallejo",
    "location": [
    38.061028,
    -122.226528
    ]
    },
    {
    "name": "Hakuchō Bridge",
    "span": 720,
    "span_text": "720m",
    "city": "Muroran",
    "location": [
    42.352889,
    140.950333
    ]
    },
    {
    "name": "Angostura Bridge",
    "span": 712,
    "span_text": "712m",
    "city": "Ciudad Bolívar",
    "location": [
    8.144417,
    -63.598111
    ]
    },
    {
    "name": "Kanmon Bridge",
    "span": 712,
    "span_text": "712m",
    "city": "Kitakyushu",
    "location": [
    33.961722,
    130.958694
    ]
    },
    {
    "name": "San Francisco–Oakland Bay Bridge(east half of west span)",
    "span": 704,
    "span_text": "704m",
    "city": "San Francisco",
    "location": [
    37.803389,
    -122.371917
    ]
    },
    {
    "name": "San Francisco–Oakland Bay Bridge(west half of west span)",
    "span": 704,
    "span_text": "704m",
    "city": "San Francisco",
    "location": [
    37.793167,
    -122.38306
    ]
    },
    {
    "name": "Bronx–Whitestone Bridge",
    "span": 701,
    "span_text": "701m",
    "city": "New York City",
    "location": [
    40.801861,
    -73.829778
    ]
    },
    {
    "name": "Maputo–Katembe bridge",
    "span": 680,
    "span_text": "680m",
    "city": "Maputo",
    "location": [
    -25.973167,
    32.557417
    ]
    },
    {
    "name": "Stord Bridge",
    "span": 677,
    "span_text": "677m",
    "city": "Stord",
    "location": [
    59.74806,
    5.402944
    ]
    },
    {
    "name": "Pierre Laporte Bridge",
    "span": 668,
    "span_text": "668m",
    "city": "Quebec City",
    "location": [
    46.745222,
    -71.290472
    ]
    },
    {
    "name": "Sunxihe Bridge笋溪河大桥",
    "span": 660,
    "span_text": "660m",
    "city": "Bailinzhen",
    "location": [
    28.712417,
    106.462333
    ]
    },
    {
    "name": "Delaware Memorial Bridge(northbound)",
    "span": 656,
    "span_text": "656m",
    "city": "New Castle",
    "location": [
    39.688972,
    -75.51806
    ]
    },
    {
    "name": "Delaware Memorial Bridge(southbound)",
    "span": 656,
    "span_text": "656m",
    "city": "New Castle",
    "location": [
    39.688389,
    -75.518389
    ]
    },
    {
    "name": "Jinshajiang Hulukou Bridge",
    "span": 656,
    "span_text": "656m",
    "city": "Hulukouzhen",
    "location": [
    26.971222,
    102.891722
    ]
    },
    {
    "name": "Second Saecheonnyeon Bridge [ko]천사대교",
    "span": 650,
    "span_text": "650m",
    "city": "Mokpo",
    "location": [
    34.860361,
    126.2055
    ]
    },
    {
    "name": "Haicang Bridge",
    "span": 648,
    "span_text": "648m",
    "city": "Xiamen",
    "location": [
    24.497278,
    118.068667
    ]
    },
    {
    "name": "Beipan River Hukun Expressway Bridge",
    "span": 636,
    "span_text": "636m",
    "city": "Qinglong County",
    "location": [
    25.899472,
    105.32361
    ]
    },
    {
    "name": "Taoyuan Jinsha River Bridge大永高速涛源金沙江大桥",
    "span": 636,
    "span_text": "636m",
    "city": "Yongsheng County",
    "location": [
    26.18389,
    100.59083
    ]
    },
    {
    "name": "Puli Bridge",
    "span": 628,
    "span_text": "628m",
    "city": "Pulixiang",
    "location": [
    26.322389,
    104.58778
    ]
    },
    {
    "name": "Gjemnessund Bridge",
    "span": 623,
    "span_text": "623m",
    "city": "Gjemnes",
    "location": [
    62.97139,
    7.77972
    ]
    },
    {
    "name": "Yuzui Yangtze Bridge",
    "span": 616,
    "span_text": "616m",
    "city": "Yuzuizhen",
    "location": [
    29.611306,
    106.772556
    ]
    },
    {
    "name": "Walt Whitman Bridge",
    "span": 610,
    "span_text": "610m",
    "city": "Philadelphia",
    "location": [
    39.905194,
    -75.129472
    ]
    },
    {
    "name": "Tancarville Bridge",
    "span": 608,
    "span_text": "608m",
    "city": "Tancarville",
    "location": [
    49.472667,
    0.464667
    ]
    },
    {
    "name": "New Little Belt Bridge",
    "span": 600,
    "span_text": "600m",
    "city": "Middelfart",
    "location": [
    55.518639,
    9.749139
    ]
    },
    {
    "name": "First Kurushima-Kaikyō Bridge",
    "span": 600,
    "span_text": "600m",
    "city": "Umashima Island",
    "location": [
    34.125806,
    133.012528
    ]
    },
    {
    "name": "E'gongyan Rail Transit Bridge",
    "span": 600,
    "span_text": "600m",
    "city": "Chongqing",
    "location": [
    29.522194,
    106.528222
    ]
    },
    {
    "name": "E'gongyan Bridge",
    "span": 600,
    "span_text": "600m",
    "city": "Chongqing",
    "location": [
    29.523306,
    106.52825
    ]
    }
    ]
bridges.forEach(function(bridgeNames){ // sets arrary bridged to loop through longestUSBridges. 
    //loop use for the map portion of t
    //to do draw a marker for each bridge marker. use L.marker - L.marker icon of coordiantes displays on the map 
    // Clara noted: same logic - updating property names to match the names used in the bigger bridges array
    let markerText = `<b>${bridgeNames.name}<br> span(Meters) ${bridgeNames.span}<br>${bridgeNames.city} <b>`
    //L.marker myIcon.Location going to use my marker icon
    L.marker(bridgeNames.location, {icon: myIcon}) //ICON marks coordiantes on th map 
       .bindPopup(markerText).addTo(map) 
       //pops text on the marker so you can read what it is marking. 
    
}) 
let bridgeNames = []  // write code to fill in the data. allows for more or less bridge names.
let bridgeSpans = []  // write code to fill in the data. allows for more or less bridge span measurements.
bridges.forEach( function(bridge) { //used in the chart loops through bridge names to be place on the chart.
    bridgeNames.push(bridge.name) 
    bridgeSpans.push(bridge.span)
})
let canvas = document.querySelector('#span_chart' )//link to the html page canvas id.
let context = canvas.getContext('2d')//telling we are using a two demetional view. 
//my chart started at 0 right away before we set the option property varable longestUSBidgesCoordinates.
let chart = new Chart(context, {   //new object with arrays and more objects
    type: 'bar',    //type or style of the chart.
    data: {
        labels: bridgeNames,//don't forget the common.
        datasets: [{
            label: 'Bridge spans in Meters', //display information about bridges meassured in. 
            data: bridgeSpans,
            backgroundColor:['brown', 'red', 'greenyellow','green', 'blue'] //color for chart.
        }]
    },            //deep file dive here tracking the arrarys and objects nesting. don't forget the : .
    options: {
        scales: {
            yAxes:[{
                beginAtZero: true  //sets chart to 0 pint on the bar side chart for meters legnths of bridges.
            }]
        }
    }
})
