const mongoose = require("mongoose")

const shoppersSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,
    price: Number
})

let shoppersModel = mongoose.model("shoppers", shoppersSchema)

module.exports = shoppersModel

