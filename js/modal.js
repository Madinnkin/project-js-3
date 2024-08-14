const modal=document.querySelector('.modal')
const modalTrigger =document.querySelector('#btn-get')
const modalCloseButton =document.querySelector('.modal_close')
let scroll = 0


const openModal=()=>{
    modal.style.display='block'
    document.body.style.overflow='hidden'
    window.removeEventListener('scroll', scrollEnd)
}
const closeModal =()=>{
    modal.style.display ='none'
    document.body.style.overflow=''
}
modalTrigger.onclick =()=>openModal()
modalCloseButton.onclick=()=>closeModal()
modal.onclick=(event)=>{
    if (event.target === modal){
    closeModal()
}
}
// const scrollEnd =()=>{
//  if((window.innerHeight+window.scrollY)>=document.body.offsetHeight){
//      openModal()
//      console.log('gghhggh')
//  }
//     console.log('gg')
// }
// scrollEnd()
// window.addEventListener("scroll",scrollEnd)
const scrollEnd =() =>{
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal();
    }
}
scrollEnd()
window.addEventListener('scroll', scrollEnd)

// const callModal =()=>{
//     setInterval(openModal,4000)
// }
// callModal()
// setTimeout(()=>{
//     clearInterval(callModal)
// },3000)
//
//
