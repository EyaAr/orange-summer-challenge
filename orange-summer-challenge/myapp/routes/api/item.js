var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

const ItemModel = require("../models/ItemModel");

router.post("/addItem",async (req, res) => {
  
    id = mongoose.Types.ObjectId(req.params.user);
  
  
      const Item = new ItemModel({
        subject: req.body.subject,
        createdAt: Date.now(),
        
      });
  
      try {
        
        await Item.save().then(function(Items){
         return Item.findByIdAndUpdate({_id:id}, 
           {$push: 
           {Items:Items._id}}, {new:true});
           })
           res.json(Item)
               // response.redirect('/');
             } catch (error) {
               console.log(error);
             }
       
            
       });
  
  
        router.delete('/deleteItem/:id', (req, res) => {
            ItemModel.findByIdAndRemove(req.params.id, (err, doc) => {
        
              console.log("Error :" + err);
            
          });
        });

        router.get("/listItems", async (request, res) => {

            const lists = await ItemModel.find();
          
            res.json(lists);
          
          });
  