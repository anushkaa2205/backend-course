const express = require('express');
const app = express();
const notes=[];
app.use(express.json());
app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.status(200).json({
        message:'Note created successfully'
    });
})
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:'Notes retrieved successfully',
        data:notes
    });
})
app.delete("/notes/:id",(req,res)=>{
    const id = req.params.id;
    delete notes[id];
    res.status(200).json({
        message:'Note deleted successfully'
    });
})

app.patch("/notes/:id",(req,res)=>{
    const id = req.params.id;
    const description = req.body.description;
    
    notes[id].description = description;
    res.status(200).json({
        message:'Note updated successfully'
    });
})

module.exports = app;
