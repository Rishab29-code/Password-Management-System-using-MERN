const mongoose=require('mongoose');

const mongoURI="mongodb://0.0.0.0:27017/pms";
var MongoDB=mongoose.connect(mongoURI).connection
var conn =mongoose.Collection;


var userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        index:{
            unique:true,
        }
    },
    email:{
        type:String,
        required:true,
        index:{
            unique:true,
        }
    },
    password:{
        type:String,
        required:true,
    },
    profileImage:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }
});
var userModel= mongoose.model('users',userSchema);
module.exports=userModel;