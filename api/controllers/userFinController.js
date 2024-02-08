import UserFin from "../schema/UserFinanceInfo.js"


//updateUserFin,
// deleteUserFin,
// getUserFin,
// regUserFin

export const regUserFin = async (req, res) => {
    try {
        const newUserFin = new UserFin({
            userId : req.params.id,
            totalNet: req.body.totalNet,
            stocks: req.body.stocks,
            realEstate: req.body.realEstate,
            cash: req.body.cash
        })
        const user = await newUserFin.save()
        res.send(200).json(user)
    } catch (err) {
        res.send(err) 
    }
}