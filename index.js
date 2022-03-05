var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function addRects(){
    const cleaner = canvas.getContext('2d');
    cleaner.clearRect(0,0,canvas.width,canvas.height)
    
    let number = document.querySelector('input').value

    let x = 50
    let y = 60
    let w = window.innerWidth/8
    let h = window.innerHeight/10

    for(let j = 0;j<number;j++){
        new Rectangle(x,y,w,h)
        x += w + 20
        if(x > (w+20)*7){
            x = 50
            y += h + 20
        }
    }
}

class Rectangle{
    constructor(xcor,ycor,width,height){
       this.x = xcor
       this.y = ycor
       this.w = width
       this.h = height

       this.c = canvas.getContext('2d')
       this.c.fillStyle = "#FFFFFF"
       this.c.fillRect(this.x,this.y,this.w,this.h)

       this.c.fillStyle = 'black'
       this.c.font = 'bold 10pt Verdana'
       this.c.textAlign="center"
       this.text = `[${(this.x + this.w/2).toFixed(2)}, ${(this.y +this.h/2).toFixed(2)}]`
       this.c.fillText(this.text,this.x + this.w/2,this.y + this.h/2)

    }
}