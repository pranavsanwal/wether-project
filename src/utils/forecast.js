const request = require('request')
const forecast=(lat,long, callback)=>{
    const url ='http://api.weatherstack.com/current?access_key=dd8ccee1e1dbdc464bdeeb429d803bd6&query='+ lat +','+ long+'&units=f'
    request({url , json: true},(error,response)=>{
    if(error){
        callback('unable to connect',undefined)
    }else if(response.body.error){
        callback('check the entered data',undefined) 
    } else{
        callback(undefined,response.body.current.weather_descriptions[0]+' it is currently ' + response.body.current.temperature +' degrees out.It feels like ' + response.body.current.precip  + '% rain chances')
    }
})
}

module.exports=forecast