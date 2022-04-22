// 3. Organize and create your routes
//     - Create a "GET" route for `/notes` that returns the `notes.html` file
//     - Create a GET route for `*` that returns `index.html` file
//     - Create a GET route for `/api/notes` that returns all saved notes as JSON
//     - Create a POST route for `api/notes` that saves a new note to the db.json file
//     - Create a DELETE route for `api/notes/:id` that deletes a note from the db.json file (bonus , not required)


const router = require('express').Router();
const fs = require('fs');



router.get('/api/notes', (req, res) => {
    const noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    return res.json(noteList);
});


router.post('/api/notes', (req, res) => {
    const noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const newNote = {
        id: noteList[noteList.length - 1].id + 1,
        title: req.body.title,
        text: req.body.text,

    };

    console.log(newNote);
    noteList.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));

    return res.json(noteList);

});

router.delete('/api/notes/:id', (req, res) => {
    console.log(req.params)
    const noteId = parseInt(req.params.id)
    const noteList = JSON.parse(fs.readFileSync("./db/db.json"));
    const newArray = noteList.filter(note => note.id !== noteId);

    fs.writeFileSync("./db/db.json", JSON.stringify(newArray));
    // console.log(newArray);
    res.json(newArray);
});









module.exports = router;