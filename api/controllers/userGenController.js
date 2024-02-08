import UserGen from '../schema/UserGenInfo.js'

export const updateUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (err) {
                return res.status(500).json(err)
            }
        }
        try {
            const updateUser = await UserGen.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.status(200).json(updateUser);
        } catch (err) {
            return res.status(500).json(err)
        }
    } else {
        res.status(403).send("You can only update your account")
    }
}

export const deleteUser = async (req, res) => {
    if (req.params.id === req.body.userId) {
        try {
            await UserFin.findByIdAndDelete(req.params.id)
            res.status(200).json("Account has been deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can delete only your account!");
    }
}

export const getUser = async (req, res) => {
    // const userid = req.query.userId
    // const userName = req.query.username
    console.log("i am here")
    const userid = req.params.id
    try {
        // const getUser = userid ? await UserFin.findById(userid) : await UserFin.findOne({ username: userName })
        // const { password, isAdmin, updatedAt, ...others } = getUser._doc
        // res.status(200).json(others)
        const getUSer = await UserGen.findById(userid)
        res.status(200).json(getUSer)
    } catch (err) {
        console.log("NO")
        // return res.json(err);
    }
}