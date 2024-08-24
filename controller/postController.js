const { Console } = require('console')
const UserModel = require('../model/UserSchema')
const path = require('path')

const postController = async (req, res) => {
    // console.log(req.body)

    try {
        const { name, email, password, age, dob, datetime, week, month, time, range, radio, checkbox, color } = req.body;
        let newfile; 
        if(req.files)
        {
            const filename = req.files.file.name;
            const dir = path.join(__dirname, '..', 'upload')
            newfile = Math.random() * 3 + filename
            req.files.file.mv(dir + '/' + newfile)
        }
        else
        {
            newfile='not any file'
        }

        const data = await UserModel({
            name: name,
            email: email,
            password: password,
            age: Number(age),
            dob: new Date(dob),
            month: new Date(month),
            time: time,
            datetime: new Date(datetime),
            checkbox: Boolean(checkbox),
            radio: radio,
            range: range,
            week: week,
            color: String(color),
            file: newfile
        })
        data.save()
        res.redirect('/get');

    } catch (error) {
        console.log(error)
        res.send('data is not inserted')
    }
}

module.exports = postController