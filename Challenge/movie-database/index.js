const express = require('express')
const app = express()
const port = 3000
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
const ORDERED_BY_DATE = movies.slice().sort((x, y) => x.year - y.year)
const ORDERED_BY_RATING = movies.slice().sort((x, y) => x.rating - y.rating)
app.get('/', (req, res) => {
    res.send('ok')
})


app.get('/test', (req, res) => {
    res.send({ status: 200, message: "ok" })
})

app.get('/time', (req, res) => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = time;
    res.send({ status: 200, time: dateTime })
})


app.get('/hello/:id', (req, res) => {
    var id = req.params.id;
    res.send({ status: 200, message: "Hello, " + id })

})

app.get('/hello', (req, res) => {
    var id = req.params.id;
    res.send({ status: 200, message: "Hello" })
})

app.get('/search', (req, res) => {
    var search = req.query.s;
    if (search === undefined) res.send({ status: 500, error: true, message: "you have to provide a search" });
    else res.send({ status: 200, message: "ok", data: search })
})


app.get('/movies/read', (req, res) => {
    res.json({ status: 200, data: movies })
})



app.get('/movies/delete', (req, res) => {
    res.send({})
})

app.get('/movies/read/by-date', (req, res) => {
    res.send({ status: 200, data: ORDERED_BY_DATE })
})

app.get('/movies/read/by-rating', (req, res) => {
    res.send({ status: 200, data: ORDERED_BY_RATING })
})

app.get('/movies/read/by-title', (req, res) => {
    res.send({
        status: 200, data: movies.sort(function compare(x, y) {
            if (x.title < y.title) {
                return -1;
            }
            if (x.title > y.title) {
                return 1;
            }
            return 0;

        })
    })

})

app.get('/movies/read/id/:ID', (req, res) => {
    const ID = parseInt(req.params.ID);
    if (ID <= movies.length && ID > 0) {
        res.send({ status: 200, data: movies[ID - 1] })
    } else {
        res.send({ status: 404, error: true, message: 'the movie <ID> does not exist' })
    }
})

// app.get("movies/create/title=newTitle&year=newYear&rating=newRating", (req, res)=> {

//     const newTitle = req.query.title
//     const newYear = req.query.year
//     const newRating= req.query.rating


//     if (
//       newTitle !== undefined &&
//      newYear !== undefined &&
//       newRating !== undefined
//     ) {
//       movies.push({
//         title: newTitle,
//         year: newYear,
//         rating: newRating
//       });
//       res.send({ status: 200, data: movies });
//       if (req.query.rating === "") {
//         req.query.rating = 4;
//       }
//     } else {
//       res.send({
//         status: 403,
//         error: true,
//         message:
//           "you cannot create a movie without providing a title and a year"
//       });
//     }
//   });

app.get("/movies/create", (req,res) => {

    const movie = {
      title : req.query.title,
      year : req.query.year,
      rating : req.query.rating
    };
    if(movie.rating == undefined) {
      movie.rating = 4;
    }
    if ((movie.title) == 'undefined' || (movie.year == 'undefined') ||  (isNaN(movie.year)) || (movie.year.toString().length !== 4)){
      res.json({status:403, error:true, message:'you cannot create a movie without providing a title and a year'});
      console.log(res.json)
    }
    else{
      movies.push(movie);
      res.send(movie);
      res.json({status: 200, message: 'ok' , data: movies})
    }
  });

  app.get("/movies/update/:Id", (req, res) => {
    let id=req.params.Id;
    const myTitle=req.query.title;
    const myRating=req.query.rating;
    const myYear=req.query.year;

    if ( id > 0 && id < movies.length){
        if(myTitle != movies[id].title && myTitle != ""){
            movies[id].title=myTitle;
        }
        else if(myYear != movies[id].year && myYear.length === 4){ 
             movies[id].year=myYear;
        }
        else if( myYear.length !== 4){ 
            res.json({error:true, message: "cannot update"})
        }
        else if(myRating!=movies[id].rating){
             movies[id].rating=myRating;
        }
    res.send({status:200, data: movies})
    }        
    else{    
        res.send({error:true, message:`movie of this ${id} does not exist`})
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})