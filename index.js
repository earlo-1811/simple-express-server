const express = require('express') //importing the express module
const app = express()// using express function to create an express apllication stored in a variable called app
const port = 6000

//Next we define two routes to the application
//the first one defines an event handler that is used to
// handle http GET requests made to the application's root

let notes = [
    {
       id: 1,
       content: "Simple server" ,
       important: true
    },
    {
       id: 2,
       content: "Browser can only execute java script",
       important: false
    },
    {
       id: 3,
       content: "Get and POST are the most important methods of the http protocols",
       important: true
    }
   ]

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('This is the about page')
})

app.get('/contact', (req, res) => {
    res.send("<h1>This is a contact page</h1>")
})
//API Route OR resource end points
app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.listen(port ,() => {
    console.log(`Example app listening on port ${port}`)
})

//the event handler function accepts two parameters
