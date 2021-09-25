const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String , 
    icons:{
            satellite: Boolean,
            wifi: Boolean,
            phone: Boolean
    },
     image:{
              path: String,
              alt: String
           },
    type: String, 
    desc: [String], 
    variations: [
               {
                  id: mongoose.Types.ObjectId , 
                  name: String,
                   price: {
                        regular : mongoose.Types.Decimal128,
                        new : mongoose.Types.Decimal128,
                   }
               }
         ],
},{
    timestamps: true,
  })

module.exports = mongoose.model('Service', ServiceSchema );