const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const staticpath=path.join(__dirname, '../public')
// console.log(path.join(__dirname,'../../public/js'))
const viewpath = path.join(__dirname, '../templates/views')
const partialpath = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs')
app.set('views', viewpath)
hbs.registerPartials(partialpath)
app.use(express.static(staticpath))
// app.use(express.static(viewpath))
// app.use(express.static(partialpath))
app.get('', (req,res) => {
    res.render('index', {
        title:'weather app is' ,
        name:'Pranav sanwal'
    })
})
app.get('/about',(req, res)=>{
    res.render('about',{
    title:'About Me',
    name:'pranav sanwal'
})
})
app.get('/help',(req,res)=>{
    res.render('help',{
    title:'Help',
    name:'html'
})
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
    title:'404',
    name:'html',
    error:'help page not found'
})
})
app.get('*',(req,res)=>{
    res.render('404',{
    title:'404',
    name:'html',
    error:' page not found'
})
})

app.listen(3000,()=>{
    console.log('server is 3000')
})