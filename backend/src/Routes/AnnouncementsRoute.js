const express = require("express");
const announcements = require('../Models/Announcements');

const announcementRouter = express.Router();

announcementRouter
.get("/", async (req,res) => {
    try {
        const result =await announcements.find({});
        return res.status(200).json(result);

    } catch (error) {
        return res.json({error})
    }

})

.get("/:id", async (req,res) => {
    var id = req.params.id;
    try {
        const result =await announcements.findOne({_id:id});
        if(!result){
            return res.status(404).json("Item Not Found")
        }
        else{
            return res.status(200).json(result);
        }

    } catch (error) {
        return res.json({error})
    }

})


.post("/createAnnouncement", async (req,res) => {
    const {Instructor, Course, AnnouncementText} = req.body;
    try {
        const result =await announcements.create({Instructor, Course, AnnouncementText});
        return res.status(200).json(result);

    } catch (error) {
        return res.json({error})
    }

})

.post("/updateAnnouncement", async (req,res) => {
    

})

.delete("/:id", async(req,res) =>{
    var id = req.params.id;
    try {
        const result =await announcements.findOneAndDelete({_id: id});
        if(!result){
            return res.status(404).json("Item Not Found")
        }
        else{
            return res.status(200).json(result);
        }

    } catch (error) {
        return res.json({error})
    }

})


module.exports = announcementRouter;