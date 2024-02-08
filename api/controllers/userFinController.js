import UserFin from "../schema/UserFinanceInfo.js"

export const regUserFin = async (req, res) => {
    try {
        const newUserFin = new UserFin({
            userId: req.params.id,
            totalNet: req.body.totalNet,
            stocks: req.body.stocks,
            realEstate: req.body.realEstate,
            cash: req.body.cash,
            finGoals: req.body.finGoals
        })
        const user = await newUserFin.save()
        res.status(200).json(user)
    } catch (err) {
        res.send(err)
    }
}

export const updateUserFin = async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const parameterId = req.params.id
            const ID = await UserFin.findOne({ userId : parameterId})
            const updateUser = await UserFin.findByIdAndUpdate(
                ID,
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

export const deleteUserFin = async (req, res) => {
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

export const getUserFin = async (req, res) => {
    const userid = req.params.id
    try {
        const getUSer = await UserFin.findById(userid)
        res.status(200).json(getUSer)
    } catch (err) {
        console.log("NO")
        // return res.json(err);
    }
}