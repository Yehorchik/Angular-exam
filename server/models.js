const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beltdb' , {useNewUrlParser:true});

const SkillsSchema = new mongoose.Schema({
    skillfirst : {type:String},
    skillsecond : {type:String},
    skillthird : {type:String},

},{timestamps :true})

const PetSchema= new mongoose.Schema({
    name : {type:String ,required:true, minlength : [3,"Pet's name should be minimum 3 characters long "]},
    type : {type:String ,required:true, minlength : [3,"Pets's type should be minimum 3 characters long "]},
    description : {type:String , required:true,minlength : [3,"Pet's ndescription should be minimum 3 characters long "]},
    skills: [SkillsSchema]
},{timestamps : true})

module.exports=mongoose.model("Pet" , PetSchema);