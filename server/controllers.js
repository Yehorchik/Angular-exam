var Pet = require('./models.js');

module.exports = {
    all:(req,res) =>{
        Pet.find({})
        .then(results =>{
            res.json(results);
        })
        .catch(err =>{
            res.json(err);
        })
    },

    one : (req,res) =>{
        Pet.findById(req.params.id)
        .then(results =>{
            res.json(results);
        })
        .catch(err =>{
            res.json(err);
        })
    },

    create: (req,res) =>{
        Pet.create(req.body)
        .then(results =>{
            res.json(results);
        })
        .catch(err =>{
            res.json(err);
        })
    },

    update: (req,res) =>{
        var id = req.params.id;
        var data = req.body;
        Pet.findById({_id:id},function(err,pet){
            pet.name=data.name;
            pet.type = data.type;
            pet.description = data.description;
            pet.skills = data.skills;
            pet.save();
            if (err){
                res.json(err);
                console.log(err);
            }
            else{
                res.json(pet);
            }
        })

    },

    delete: (req,res) =>{
        Pet.findByIdAndDelete(req.params.id)
        .then(author =>{
            res.json(results);
        })
        .catch(err =>{
            res.json(err);
        })
     }
}