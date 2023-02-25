const mongoose=require('mongoose');
var conn =mongoose.Collection;


var passcatSchema=new mongoose.Schema({
    category_name:{
        type:String,
        required:true,
       
    },
    user_id:{
        type:String,
        required:true

    },
    date:{
        type:Date,
        default:Date.now
    }
});
var passcatModel= mongoose.model('password_categories',passcatSchema);
module.exports=passcatModel;