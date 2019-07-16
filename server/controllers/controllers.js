const mongoose = require("mongoose");
const Task = mongoose.model("Task");


module.exports = {
    showAll: (req, res)  => {
        Task.find({}, (err, tasksinDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "success", tasks: tasksinDB});
            }
        });
     
    },

    showOne: (req, res)  => {
        Task.findOne({_id: req.params.id}, (err, tasksinDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "success", tasks: tasksinDB});
            }
        });
     
    },

    delete: function(req, res) {
        Task.remove({name: req.params.name}, function(err){
            console.log('removed')
        });
        res.json('User is being deleted');
        
    },



    create: (req, res) => {
        Task.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
        
    
    },

    update: function(req, res) {
        Task.update({_id: req.params.id, title: req.body.title, description: req.body.description}, function(err){
    
    
            if(err) {
                console.log('something went wrong');
              } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a user!');
              }
              res.redirect('/');
            })
          }
}


    
 




