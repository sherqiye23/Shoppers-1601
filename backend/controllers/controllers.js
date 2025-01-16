const shoppersModel = require("../models/models");

const controllerShoppers = {
    getAllShoppers: async (req, res) => {
        let allshoppers = await shoppersModel.find()
        res.send(allshoppers)
    },
    getById: async (req, res) => {
        let { id } = req.params
        let shopper = await shoppersModel.findById(id)
        res.send(shopper)
    },
    deleteShopper: async (req, res) => {
        let { id } = req.params
        await shoppersModel.findByIdAndDelete(id)
        res.send({
            message: "Success Delete!"
        })
    },
    postShopper: async (req, res) => {
        await shoppersModel(req.body).save()
        res.send({
            message: "Success Post",
            data: req.body
        })
    },
    putShopper: async (req, res) => {
        let { id } = req.params
        let updatedShopper = await shoppersModel.findByIdAndUpdate(id, req.body, {new:true})
        res.send({
            message: "Success Update!",
            data: updatedShopper
        })
    }
}

module.exports = controllerShoppers
