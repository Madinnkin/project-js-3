const click =document.querySelector(".click")


click.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open("GET",'../data/any.json')
    request.setRequestHeader('Content-type',"application/json")
    request.send()

    request.onload=()=>{
        console.log(request)
        const any =JSON.parse (request.response)
        document.querySelector(".name").innerHTML = any.name
        document.querySelector(".age").innerHTML = any.age
        document.querySelector(".height").innerHTML = any.height
        document.querySelector(".isMarried").innerHTML = any.isMarried
        document.querySelector(".addres").innerHTML = `${any.addres.street} ${any.addres.number}`
    }
}