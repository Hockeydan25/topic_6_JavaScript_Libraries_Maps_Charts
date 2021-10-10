//alert ("is this working")//is your pages linked

let canvas = document.querySelector('#canvas')//selects the jpeg
let context = canvas.getContext('2d') // 

let input = document.querySelector('#image-text') //our html text box
input.disable = true  

let image = new Image() //loading the image. be made ready from our file 
image.src = 'coffee.jpg'

image.addEventListener('load', function(){
    context.drawImage(image, 0, 0)//image loading
    input.disable = false
})

input.addEventListener('input', function(){
    let text = this.value  //the thing that made the event text
    
    context.fillStyle = 'white' //font color
    context.font = '40px Courier' //larger font and type style 
    context.drawImage(image, 0 ,0) //redraws the image to previous and add or draws rhe text again.
    context.fillText(text, 30, 100)// works well for my image set to this location

})