const request = require('request')
const geocode=(address,callback)=>{
const geourl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoicHJhbmF2c2Fud2FsIiwiYSI6ImNreGVueW9vNDBwZ2IydXF2Mnh4ZzVtNnoifQ.BEfVHoe7Ma-1K6Z_2nB29Q'
request ({url : geourl , json : true}, (error,response)=> {
    if(error){
        callback('unable to connect',undefined)
 } else if(response.body.features.length===0){
    callback('enter correct name')
} else {
    callback(undefined ,{ 
       longitude: response.body.features[1].center[0],
        latitude: response.body.features[1].center[1],
        location: response.body.features[1].place_name
}) 
 }
})
}

module.exports = geocode

