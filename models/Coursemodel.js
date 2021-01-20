const mongoose = require("mongoose");
const { Schema, model} = mongoose;

const courseSchema = new Schema(
    {
        name:String,
        description: String,
        category: String,
        userID: {
            type: Schema.Types.ObjectId,
      ref: "User",
        }
        
        
    },

    {
        timestamps: true
    }
        
    );

    const courseModelVariable = mongoose.model('Course', courseSchema);

    module.exports = courseModelVariable;