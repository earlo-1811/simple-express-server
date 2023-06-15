const express = require('express') //importing the express module
const pagesRoutes = require("./routes/pagesRoutes")
const apiRoutes = require("./routes/apiRoutes")
const app = express()// using express function to create an express apllication stored in a variable called app
const port = 6000

//Next we define two routes to the application
//the first one defines an event handler that is used to
// handle http GET requests made to the application's root


//Routes and Endpoints
//middleware is a function that gets executed between when a request is made and a response is returned
app.use("/", pagesRoutes)
app.use("/api/v1/notes", apiRoutes)
//API Route OR resource end points
app.listen(port ,() => {
    console.log(`Example app listening on port ${port}`)
})

//the event handler function accepts two parameters
