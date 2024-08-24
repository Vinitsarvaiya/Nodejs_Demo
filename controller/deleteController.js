const UserSchema = require('../model/UserSchema')
const fs = require('fs')
const path = require('path')

const deleteController = async (req, res) => {

    try {
        const { id } = req.params
        const result = await UserSchema.findOne({ _id: id })
        const filePath = path.join(__dirname, '..', 'upload', result.file)
        fs.unlinkSync(filePath);
        const data = await UserSchema.deleteOne({ _id: id })
        res.redirect('/get');

    } catch (error) {
        console.log(error.message)
        res.send('not delete')
    }
}

module.exports = deleteController