var passCatModel = require('../../modules/addnewcat');
var passModel = require('../../modules/add_pass');
var getPassCat= passCatModel.find({},{'category_name':1,'_id':1});
const mongoose = require('mongoose');

exports.addNewPassword=function(req,res,next){
    var passCategory=req.body.pass_cat;
    var projectName=req.body.project_name;
    var passwordDetails=req.body.pass_details;
    
    var passDetails=new passModel({
        _id:mongoose.Types.ObjectId(),
        pass_name:passCategory,
        project_name:projectName,
        pass_details:passwordDetails  
      });

    passDetails.save()
    .then(doc=>{
        res.status(201).json({  
            message:"Password Inserted Successfully",
            results:doc
        });
    })
    .catch(err=>{
        res.json(err);
    });
    }
// get all password controller
    exports.getAllPassword=function(req,res,next){

        passModel
        .find()
        .select("pass_name project_name pass_details")
        .populate("pass_name", "pass_name")
        .exec()
    .then(data=>{
        res.status(200).json({
            message:"OK",
            results:data
        });
    })
    .catch(err=>{
        res.json(err);
    })
    }

    // get password by id

    exports.getPasswordByID=function(req,res,next){

        var id=req.params.id;
    
        passModel.findById(id)
        .select("pass_name project_name pass_details")
        .populate("pass_name", "pass_name")
        .exec()
    .then(data=>{
        res.status(200).json({
            message:"OK",
            results:data
        });
    })
    .catch(err=>{
        res.json(err);
    })
    
        }

        // delete password controller

        exports.deletePassword=function(req,res,next){
            var password_id=req.body.password_id;
            passModel.findByIdAndRemove(password_id)
              .then(doc=>{
               res.status(201).json({
                   message:"Password Deleted Successfully",
                   results:doc
               });
              })
              .catch(err=>{
                  res.json(err)
              })
           
           }