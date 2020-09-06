const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib');
const { title } = require('process');

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function (req, res) {
    res.send("ok")
})

app.get('/movies/:title', function (req, res) {
    const movieTitle = req.params.title
    urllib.request(`http://www.omdbapi.com/?apikey=a2e2ca53&s=${movieTitle}`, function (err, movieData) {
        if (err) {
            console.log("error, try again")
            throw err
        }
        const movieArr = []
        const movies = JSON.parse(movieData).Search
        for (let movie of movies) {
            const movieInfo = {
                title: movie.Title,
                img: movie.Poster,
                id: movie.imdbID,
                year: movie.Year
            }
            movieArr.push(movieInfo)
        }
        console.log(movieArr)
        res.send(movieArr)
    })
})

const port = 8080
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})