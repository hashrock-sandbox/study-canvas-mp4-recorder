import CanvasRecorder from "./canvasrecorder.js"

const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
ctx.fillStyle = "white"
ctx.fillRect(0, 0, canvas.width, canvas.height)

ctx.fillStyle = "black"
let old = null
ctx.lineWidth = 10
canvas.addEventListener("pointerdown", (e) =>{
    old = {
        x: e.offsetX,
        y: e.offsetY
    }
    ctx.moveTo(e.offsetX, e.offsetY)
})
canvas.addEventListener("pointermove", (e) =>{
    if(old){
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
    }
})
canvas.addEventListener("pointerup", (e) =>{
    old = null
})

CanvasRecorder(canvas)