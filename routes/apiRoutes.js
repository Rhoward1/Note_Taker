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














module.exports = router;