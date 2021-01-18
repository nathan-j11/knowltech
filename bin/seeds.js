const mongoose = require('mongoose');
const Course = require('../models/Coursemodel');

const DB_NAME = 'elearning-project';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const courses = [
    {
        name: 'introduction to power electronic',
        description:'This course introduce you to the basic power electronic circuit',
        category: 'electrical engineering'
    },
    {
        name: 'introduction to plc',
        description: 'this course introduce you to plc',
        category: 'control engineering'
    },
    {
        name: 'introduction to transistor',
        description: 'this course introduce you to transistor',
        category: 'electronic engineering'
    },
    {
        name: 'introduction to machining',
        description: 'this course introduce you to cnc',
        category: 'mechanical engineering'
    }
];


Course.create(courses)
  .then(coursesFromDB => {
    console.log(`Created ${coursesFromDB.length} courses`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while getting courses from the DB: ${err}`));

