require('dotenv').config();

const quizRouter = require('./src/Routes/QuizesRoute');
const announcementRouter = require('./src/Routes/AnnouncementsRoute');

const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}))

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  console.log("MongoDB is now connected!")
  app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));

app.use('/quizes', quizRouter)
app.use('/announcements', announcementRouter)
