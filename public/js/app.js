

fetch('/weather?address=boston').then((response)=>{
    response.json().then((data)=>{
        console.log(data.location)
        console.log(data.forecast)
    })
})