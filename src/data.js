const express = require('express');
const app = express();
const noteModel = require('./models/note.model');
app.use(express.json());
app.post('/notes',async (req,res)=>{
    const data = req.body;
    await noteModel.create({
        title:data.title,
        description:data.description
    });
    res.status(200).json({
        message:'Note created successfully'
    });
})
app.get('/notes',async (req,res)=>{
    const notes = await noteModel.find(); //find function returns array of objects of all the data present in the database find also can search based on condition like findone ...find returns array of objects of all but findone only returns a sigle object
    // const notes = await noteModel.findOne({
    //     title:"first note"
    // })//findOne function returns the first object that matches the query . if query not found then returns null;
    res.status(200).json({  
        message:'Notes fetched successfully',
        notes : notes
    });
});

app.delete('/notes/:id',async(req,res)=>{
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id:id
    });
    res.status(200).json({
        message:'Note deleted successfully'
    }); 
})

app.patch('/notes/:id',async(req,res)=>{
    const id = req.params.id;
    const description = req.body.description;
    await noteModel.findOneAndUpdate({_id:id}, { description });
    res.status(200).json({
        message:'Note updated successfully'
    });
});
module.exports = app;
