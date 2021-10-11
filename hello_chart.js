let canvas = document.querySelector('#soda_chart' )//ink to the htnl page canvas id.
let context = canvas.getContext('2d')//telling we are using a two demsion 
//my chart started at 0 right away before we set the option property.
let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['DrPepper', 'Pepsi','Sprite', 'Either', 'Neither'],//don't forget the common.
        datasets: [{
            label: 'number of votes',
            data: [18,14, 10 ,7,10],
            backgroundColor:['brown', 'blue', 'greenyellow','green', 'red'] //greenyellow works too, sligh different shade.
        }]
    },//deep file dive here tracking the arrarys and objects nesting. don't forget the : .
    options: {
        scales: {
            yAxes:[{
                beginAtZero: true
            }]
        }
    }
})
