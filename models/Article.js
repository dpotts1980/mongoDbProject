var mongoose = require("mongoose"),
      Schema   = mongoose.Schema;
  
var ArticleSchema = new Schema({
      title: {
      type: String,
      required: true
    },

      // summary: {
      //   type: String,
      //   required: true
      // },
    
      link: {
        type: String,
        required: true
      },
    
      date: {
        type: Date,
        default: Date.now
      },
      
      note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
      }]
    });
    
    module.exports = mongoose.model("Article", ArticleSchema);