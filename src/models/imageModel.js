const mongoose = require('mongoose');
 const Schema= mongoose.Schema;

const ImageSchema = new Schema(
  {
  titel: {
    type: String,
    required: true
  },
 
  description: {
    type: String
  },

  imageUrl: {
    type:String,
    require:true
  },

  created_by: {
    type:Schema.Types.ObjectId,
    ref:'User',
    require:true
},

  images: [{
    type: String,
    required: true
  }],

  created_at: {
    type: Date,
    default: Date.now
  },

  updated_at: {
    type: Date,
    default: Date.now
  }
},
 {timestamps:true}
);

module.exports = mongoose.model('Image', ImageSchema);
