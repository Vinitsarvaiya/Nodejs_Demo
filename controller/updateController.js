const UserModel = require('../model/UserSchema')
const fs = require('fs')
const path = require('path')

const updateController = async (req, res) => {
    console.log(req.body)
    const { name, email, password, age, dob, datetime, week, month, time, range, radio, checkbox, color, _id } = req.body;

    try {
        const result = await UserModel.findOne({ _id: _id })

        let newfile;
        if (req.files) {
            const filename = req.files.file.name;
            const dir = path.join(__dirname, '..', 'upload')
            newfile = Math.random() * 3 + filename
            req.files.file.mv(dir + '/' + newfile)
            fs.unlinkSync(dir + '/' + result.file);
        }
        else {
            newfile = result.file
        }

        const data = await UserModel.updateOne({ _id: _id }, {
            name: name,
            email: email,
            password: password,
            age: Number(age),
            dob: new Date(dob),
            month: new Date(month),
            time: time,
            datetime: new Date(datetime).toUTCString(),
            checkbox: Boolean(checkbox),
            radio: radio,
            range: range,
            week: week,
            color: String(color),
            file: newfile
        })
        res.redirect('/get');
    } catch (error) {
        console.log(error.message)
        res.send('data is not updated')
    }
}

module.exports = updateController;