const UserModel = require('../model/UserSchema')

const getController = async(req,res)=>{

    const data = await UserModel.find({})
    res.render('index.ejs',{data:data})
}

module.exports = getController;