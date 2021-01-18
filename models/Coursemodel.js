const mongoose = require("mongoose");
const { Schema, model} = mongoose;

const courseSchema = new Schema(
    {
        name:String,
        description: String,
        category: String,
        
        
    },
    {
        timestamps: true
    }
        
    );

    const courseModelVariable = mongoose.model('Course', courseSchema);

    module.exports = model('Course', courseSchema );