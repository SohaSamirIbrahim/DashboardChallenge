const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
    Instructor: {
        type: String,
    },
    Course: {
        type: String
    },
    AnnouncementText: {
        type: String
    }

})

const announcement = mongoose.model('announcement', announcementSchema);
module.exports = announcement;