const click =document.querySelector(".click")
const wrapper=document.querySelector(".wrapper")

click.onclick =()=>{
      const request = new XMLHttpRequest()
      request.open("GET",'../data/persons.json')
      request.setRequestHeader('Content-type',"application/json")
      request.send()

    request.onload=()=>{
        const cartoon =JSON.parse (request.response)
        cartoon.forEach(el =>{
            const card=document.createElement('div')
            card.setAttribute('class', 'cardBlock')
            card.innerHTML=`
<!--            -->
<!--            <div class = "body"-->
<!--            <div class = "caracters"-->
<!--            <div class = "card"-->
<!--            <div class = "card img"-->
<!--            <div class = "card h2"-->
<!--            <div class = "card p"-->
<!--            <div class = "card:hover"-->
                <h1>${el.name}</h1>
                <img src=${el.photo} alt="">
                <p>${el.CharacterDescriptions}</p>
            </div>
            `
            wrapper.append(card)
        })
        // wrapper.innerHTML = `
        // <div>
        // ${
        //     cartoon.map((el)=> <div>
        //         <h1>{el.name}</h1>
        //     </div>)
        // }
        // </div>`
        // document.querySelector(".name ").innerHTML = cartoon.name
        // document.querySelector(".CharacterDescriptions").innerHTML = cartoon.CharacterDescriptions

    }
}

