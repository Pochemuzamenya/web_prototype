import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 8080
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'templates'))

app.get('/', (req, res) => {
    res.render('home', { title: 'Home', active: 'Main' })
})

app.get('/contacts', (req, res) => {
    res.render('contacts', { title: 'Contacts', active: 'Contact' })
})

app.get('/services', (req, res) => {
    res.render('service', { title: 'Services', active: 'Service' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About', active: 'About' })
})

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})