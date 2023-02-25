const mongoose=require('mongoose');
var conn =mongoose.Collection;


var passSchema=new mongoose.Schema({
    pass_name:{
        type:String,
        required:true,
    },
    project_name:{
        type:String,
        required:true,
    },
    pass_details:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
});
var passModel= mongoose.model('password_details',passSchema);
module.exports=passModel;