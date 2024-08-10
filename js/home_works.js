
const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailSpan = document.querySelector("#gmail_result")

const regExp =/\w@gmail.com$/


gmailButton.onclick =()=>{
        if (regExp.test(gmailInput.value)){
            gmailSpan.innerHTML = "OK"
            gmailSpan.style.color ="green"
        }else {
            gmailSpan.innerHTML = "NOT OK"
            gmailSpan.style.color ="red"
        }
}

 // my first home work (part 2)
const parentBlock = document.querySelector(".parent_block")
const childBlock = document.querySelector(".child_block")
let positionX = 0
let positionY = 0


const moveBlock =()=> {
    if (positionX < 449 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    } else if (positionX >= 449 && positionY < 449){
        positionY++
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }else if (positionX > 0  && positionY >0){
        positionX--
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if (positionX ===0  && positionY >0){
        positionY--
        childBlock.style.top= `${positionY}px`
        requestAnimationFrame(moveBlock)
    }
}
 moveBlock()

// my second home work (part 1)
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")
const interval =document.querySelector("#seconds")


let points =0
let intervalID
function buttonAction() {
    start.onclick=()=>{
         intervalID = setInterval(()=>{
         points++
         interval.innerHTML = points
 },1000)
    start.disabled = true}
     stop.onclick=()=>{
     clearInterval(intervalID);
     start.disabled = false
 }
 reset.onclick=()=>{
    clearInterval(intervalID);
    points=0
    interval.innerHTML=points
     start.disabled = false
 }
}
buttonAction()






















