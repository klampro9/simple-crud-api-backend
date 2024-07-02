const Product = require('../models/product.model.js');
const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json('Product not found', {new: true});
        };
        // const productUpdate = await Product.findById(id);
        res.status(200).json(product);
        
    } catch (error) {
    res.status(500).json({message: error.message});
    }
};
const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id,req.body);
        if(!product){
            return res.status(404).json('Product not found');
        };
        res.status(200).json({message: 'Product delete successfully'});
        
    } catch (error) {
    res.status(500).json({message: error.message});
    }
};
module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}