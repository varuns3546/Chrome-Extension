const mongoose = require('mongoose')

const Schema = mongoose.Schema

const storeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    gridCSSSelector: {
        type: String,
        required: true
    }, 
    productCSSTag: {
        type: String,
        required: true
    },
    productCSSAttribute: {
        type: String,
        required: true
    },
    productCSSValue: {
        type: String,
        required: true
    },
    switchPageBy: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    canDelete: {
        type: Boolean,
        required: true
    },


}, {timestamps: true})

module.exports = mongoose.model('Store', storeSchema)