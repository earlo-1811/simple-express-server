const express = require("express");
const router = express.Router();

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

//GET request for a single resource or data
//GET api/v1/notes/3
router.get('/:id', (req, res) => {
    //res.send("Returns a single resource")
    const idx = req.params.id;
    const singleNote = notes.find(note => note.id === Number(idx));
    res.json(singleNote)
})
//Get request to fetch all the resources in the collection
//GET api/v1/notes
router.get('/', (req, res) => {
    res.json(notes)
})
// POST request to create a new resource based on request data
// POST api/v1/notes
router.post('/', (req, res) => {
    res.send("Will post or add a new resource")
})
//DELETE request to remove identified resource
//DELETE api/v1/notes/4
router.delete('/:id', (req, res) => {
    res.send("Will delete a single resource")
})
//PUT request to replace the entire identified resource with the request data
// PUT api/v1/notes/2
router.put('/:id', (req, res) => {
    res.send("Replaces all the content of a single resource a single resource")
})
//PATCH request to replace a part of the identified resource with request data
//PATCH api/v1/notes/2
router.get('/:id', (req, res) => {
    res.send("Replaces part of the content, not all of a single resource")
})


module.exports = router;