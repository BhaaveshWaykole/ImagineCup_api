import UserFin from "../schema/UserFinanceInfo.js"
import UserGen from '../schema/UserGenInfo.js'

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
            const parameterId = req.params.id
            const ID = await UserFin.findOne({ userId : parameterId})
            await UserFin.findByIdAndDelete(ID)
            res.status(200).json("Account has been deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can delete only your account!");
    }
}

export const getUserFin = async (req, res) => {
    try {
        const parameterId = req.params.id
        const ID = await UserFin.findOne({ userId : parameterId})
        const getUSer = await UserFin.findById(ID)
        const userMain = await UserGen.findById(parameterId)
        console.log(JSON.stringify(userMain.username))
        res.status(200).json(getUSer)
    } catch (err) {
        console.log("NO")
        // return res.json(err);
    }
}