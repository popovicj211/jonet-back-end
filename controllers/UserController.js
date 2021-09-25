const User = require('../models/User');



const getAllUsers = async (req,res) => {
  
        console.log(req)
        await User.find().then(data => res.status(200).json(data)).catch(err => res.status(500).json('Error: ' + err));
};

const getUser = async (req,res) => {
   
        console.log(req)
        let id = req.params.id;
       await User.findById(id).then(data => res.status(200).json(data)).catch(err => res.status(500).json('Error: ' + err));
       
};

const addUser = async (req,res) => {

       let user = new User(req.body);
        user.save().then( () => res.status(201).json({message: 'User is successfully added.'})).catch(err => res.status(500).json('Error: ' + err));

};


const updateUser = async  (req,res) => {
 
         let id = req.params.id;
         let data = req.body;
         const { ...updateData } = data;
         User.findByIdAndUpdate(id, updateData, { new:true }).then(() => res.status(204).json({message:'User is successfully updated.'})).catch(err => res.status(500).json('Error: ' + err));
   
};

const deleteUser = async (req,res) => {

        let id = req.params.id;
       User.findByIdAndRemove(id).then(() => res.status(204).json({message:'User is successfully deleted.'})).catch(err => res.status(500).json('Error: ' + err));;
   

};

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
  }