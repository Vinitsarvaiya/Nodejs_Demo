const UserModel = require('../model/UserSchema')

const editeController = async(req,res)=>{
    // console.log('inside edite')
    const {id}=req.params
    const data = await UserModel.findOne({_id:id})
    res.render('pages/edite.ejs',{data:data})
}

module.exports = editeController;