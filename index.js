import CanvasRecorder from "./canvasrecorder.js"

const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
ctx.fillStyle = "white"
ctx.fillRect(0, 0, canvas.width, canvas.height)

ctx.fillStyle = "black"
canvas.addEventListener("pointermove", (e) =>{
    ctx.fillRect(e.offsetX, e.offsetY, 10, 10)
})

CanvasRecorder(canvas)