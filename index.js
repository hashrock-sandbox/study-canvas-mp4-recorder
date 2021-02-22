import CanvasRecorder from "./canvasrecorder.js"

const canv = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

canv.addEventListener("pointermove", (e) =>{
    ctx.fillRect(e.offsetX, e.offsetY, 10, 10)
})

CanvasRecorder(canv)