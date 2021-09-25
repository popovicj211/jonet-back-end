const Service = require('../models/Service');

const getAllServices = async (req, res) => {
  
         await Service.find().then(data => res.status(200).json(data)).catch(err => res.status(500).json('Error: ' + err));

};

const getService = async (req,res) => {
  
        let id = req.params.id;
         await Service.findById(id).then(data => res.status(200).json(data)).catch(err => res.status(500).json('Error: ' + err));;

};

const addService = async (req,res) => {

        console.log(req.body)
   //     req.body.DateTime = new Date();
        let serviceAdd = new Service(req.body);
       serviceAdd.save().then(() => res.status(201).json({message:'Service is successfully added.'})).catch(err => res.status(500).json('Error: ' + err));
        
 
};

const updateService = async  (req,res) => {

         let id = req.params.id;
         let data = req.body;
         const { ...updateData } = data;
         Service.findByIdAndUpdate(id, updateData, { new:true }).then(() => res.status(204).json({message:'Service is successfully updated.'})).catch(err => res.status(500).json('Error: ' + err));
         
};

const deleteService = async (req,res) => {
  
        let id = req.params.id;
        Service.findByIdAndRemove(id).then(() => res.status(204).json({message:'Service is successfully deleted.'})).catch(err => res.status(500).json('Error: ' + err));
};

module.exports = {
     getAllServices,
      getService,
      addService,
      updateService,
      deleteService
}