var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

const UserModel = require("../models/UserModel");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post("/addUser",async (req, res) => {
  
  id = mongoose.Types.ObjectId(req.params.user);


    const User = new UserModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      price: req.body.price,
      email: req.body.email,
      address: req.file.address,
      password:req.body.password,
      createdAt: Date.now(),
      
    });

    try {
      
      await User.save().then(function(Users){
       return User.findByIdAndUpdate({_id:id}, 
         {$push: 
         {Users:Users._id}}, {new:true});
         })
         res.json(User)
             // response.redirect('/');
           } catch (error) {
             console.log(error);
           }
     
          
     });


      router.delete('/deleteUser/:id', (req, res) => {
        UserModel.findByIdAndRemove(req.params.id, (err, doc) => {
      
            console.log("Error :" + err);
          
        });
      });

      router.get('/getUser', async (request, res) => {
        UserModel.find({}, (err,result) => {
          if (err) { 
            res.send(err);
          }
          res.send(result);
        })
      
       
      });

      router.get("/listUsers", async (request, res) => {

        const listss = await UserModel.find();
      
        res.json(listss);
      
      });
      
     

module.exports = router;
