const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')

const width = 1200
const height = 630

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

context.fillStyle = '#000'
context.fillRect(0, 0, width, height)

context.font = 'bold 70pt Menlo'
context.textAlign = 'center'
context.textBaseline = 'top'
context.fillStyle = '#3574d4'

const text = 'Hello, World!'

const textWidth = context.measureText(text).width
context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
context.fillStyle = '#fff'
context.fillText(text, 600, 170)

context.fillStyle = '#fff'
context.font = 'bold 30pt Menlo'
context.fillText('flaviocopes.com', 600, 530)

var radius =  height / 2;
context.translate(radius, radius);
radius = radius * 0.90
drawFace(context, radius);

loadImage('./logo.png').then(image => {
  context.drawImage(image, 340, 515, 70, 70)
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync('./test.png', buffer)
})


function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
 //   ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
  }