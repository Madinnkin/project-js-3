//lesson 1
// gmailButton.onclick =()=>{
//         if (regExp.test(gmailInput.value < 5)){
//             gmailSpan.innerHTML = "OK"
//             gmailSpan.style.color ="green"
//         }else {
//             gmailSpan.innerHTML = "NOT OK"
//             gmailSpan.style.color ="red"
//         }
// }


// console.log("hello")

// Regular expressions- regulnarnyye vyrajeniye
// const username = prompt("Enter your name ...")
// const regExp = /n/
// console.log(username.match(regExp))

// const numbers = "asgfdhdjlfkdjdsgh234567"
// const regExp = /[\W\w]/g
// console.log(numbers.match(regExp));
// console.log(numbers.replace(regExp, "*"));



// Function
// declaration
// function calc (){
// }


// expression
// const calc =()=>{
// }



// Recursion - rekursiya
// let num = 0
// const counter =()=>{
//  num ++
//     console.log(num)
//     if (num <1000){
//         requestAnimationFrame(counter)
//     }
// }
// counter()
// 60 FPS - frame per second


// Phone Block
// const phoneInput = document.querySelector("#phone_input")
// const phoneButton = document.querySelector("#phone_button")
// const phoneSpan = document.querySelector("#phone_result")
//
// const regExp =/^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
//
// phoneButton.onclick =()=>{
//         if (regExp.test(phoneInput.value)){
//             phoneSpan.innerHTML = "OK"
//             phoneSpan.style.color ="green"
//         }else {
//             phoneSpan.innerHTML = "NOT OK"
//             phoneSpan.style.color ="red"
//         }
//
// }



// DOM  - document object model
// DOM = > document =>HTML


// lesson 2
// osnovy asinhronnosti


 //sinhronniy kod
 // console.log(1)
 // console.log(2)
 // console.log(3)
 // console.log(4)
 // console.log(5)
 //
 // //asinhronniy kod
 // setTimeout(() =>{
 //     console.log(1)
 // },1000)
 //
 // setTimeout(() =>{
 //     console.log(2)
 // },700)
 //
 // console.log(3)

// const Interval = setInterval(() =>{
//      console.log("ok")
//  },1000)
//
//
//  setTimeout(() =>{
//      clearInterval(Interval)
//  },5000)




//  next lesson podkaska
// let num = 0
// const h2 =document.querySelector('h2')
//  setInterval(()=>{
//      num++
//      h2.innerHTML = num
//      // document.write(num)
//      // console.log(num)
//  },1000)

 //
 // const button = document.querySelector("button")
 // button.onclick= ()=>{
 //    setTimeout(()=>{
 //        console.log(1)
 //    },800)
 //
 // }
 // console.log(2)


 //event loop - sikl sabytiy
// JS =>  v8 (dvijok chrome) => eventloop => vyzov

//TAP SLIDER
// const tapContentBlocks=document.querySelectorAll('.tab_content_block')
// const taps= document.querySelectorAll('.tab_content_item')
// const tapParent=document.querySelector('.tab_content_items')
// let  currentTap =0
// const hideTapContent =()=> {
//     tapContentBlocks.forEach((item) => {
//        item.style.display ='none '
//     })
//     taps.forEach((item)=>{
//         item.classList.remove('tab_content_item_active')
//     })
// }
// const showTapContenet=(index=0)=>{
//     tapContentBlocks[index].style.display='block'
//     taps[index].classList.add('tab_content_item_active')
// }
// const nextclick =() =>{
//     hideTapContent()
//     currentTap =(currentTap+ 1) % taps.length
//     showTapContenet(currentTap)
//
// }
//
//
// tapParent.onclick=(event)=>{
//     if(event.target.classList.contains('tab_content_item')){
//         taps.forEach((item, index) => {
//             if (event.target===item){
//                 hideTapContent()
//                 currentTap = index
//                 showTapContenet(index)
//             }
//
//         })
//     }
// }
//
//
// hideTapContent()
// showTapContenet()
// setInterval(nextclick,4000)


//
// const somInput=document.querySelector("#som")
// const usdInput=document.querySelector("#usd")
// const euroInput =document.querySelector('#eur')

// somInput.oninput=()=> {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//
//     }
// }
// usdInput.oninput=()=> {
//     const request = new XMLHttpRequest()
//     request.open('GET', './data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//
//     }
// }

// const converter =(element,targetElement1, targetElement2)=>{
//     element.oninput=()=>{
    // const request = new XMLHttpRequest()
    // request.open('GET', '../data/converter.json')
    // request.setRequestHeader('Content-type', 'application/json')
    // request.send()
    //
    //   request.onload = () => {
    //     const data = JSON.parse(request.response)
    //       if (element.id==='som'){
    //         targetElement1.value = (element.value / data.usd).toFixed(2)
    //         targetElement2.value = (element.value / data.eur).toFixed(2)
//
//           }
//           else if (element.id==='usd'){
//             targetElement1.value = (element.value * data.usd).toFixed(2)
//             targetElement2.value = (element.value * data.usd  /data.eur ).toFixed(2)
//           }
//           else if (element.id==='eur'){
//             targetElement1.value = (element.value * data.eur).toFixed(2)
//             targetElement2.value = (element.value * data.eur / data.usd).toFixed(2)
//           }
//           element.value ==="" && (targetElement1.value = "")
//     }
//     }
// }
// converter(somInput,usdInput,euroInput)
// converter(usdInput,somInput,euroInput)
// converter(euroInput,usdInput,somInput)

// Cart -Switcher
const cardBlock=document.querySelector(".card")
const btnNext =document.querySelector("#btn-next")
const btnPrev =document.querySelector("#btn-prev")
let cardId=1

function card (){
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
       .then(response =>response.json())
       .then(data => {
         cardBlock.innerHTML =`
             <p>${data.title}</p>
             <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
             <span>${data.id}</span>`
       })
}
btnNext.onclick=()=>{
    cardId=(cardId%200)+1
    card()
}
btnPrev.onclick=()=>{
    cardId=(cardId===1)?200:cardId -1
    card()
}
  card()




const url = `https://jsonplaceholder.typicode.com/posts`

fetch(url)
    .then(response =>response.json())
    .then(data => {
        console.log("posts:", data);
    })
    .catch(error=>{
        console.log("error",error)
    })




