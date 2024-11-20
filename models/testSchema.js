const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema(
{
    field1: { 
        type: String,
        required: false,
        unique: true
    },
field2 : [
{ 
  
   field2nest: { 
        type: Number,
        required: false,
        unique: false
    
},
}
],
});

module.exports = mongoose.model('Test', TestSchema);
