console.log("client side entry")

fetch('http://localhost:3000/weather?address=boston').then((response)=>{
    response.json().then((data)=>{
        console.log(data.location)
        console.log(data.forecast)
    })
})