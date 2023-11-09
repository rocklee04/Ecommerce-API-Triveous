const express = require("express");
const productRoutes = express.Router();

const { ProductModel } = require("../Models/Product.Model");

//  search and sort functionality 
let adminAll =  async(req,res)=>{
 let data = await ProductModel.find(req.query)
 res.send(data)

}


//to get all the products
let getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 7 ;
        const skipIndex = (page-1) * limit;
        const sort = req.query.sortBy || '_id';
        const sortOrder = req.query.sortOrder || 'desc';


        const filter = {};
        if(req.query.title) {
            filter.title = req.query.title;
        }
        if (req.query.gender && (req.query.gender === 'Male' || req.query.gender === 'Female')) {
            filter.gender = req.query.gender;
        }
        if(req.query.arrival) {
            filter.arrival = {$gte: req.query.arrival};
        }
        if(req.query.rating) {
            filter.rating = { $gte: req.query.rating };
        }
        if (req.query.search) {
            const searchRegex = new RegExp(req.query.search, 'i');
            filter.$or = [
                { title: searchRegex },
                { category: searchRegex },
                { brand: searchRegex}
                // Add more fields to search from if needed
            ];
        }
        const products = await ProductModel.find(filter).sort({ [sort]: sortOrder }).skip(skipIndex).limit(limit);
        return res.send(products)

    } catch (error) {
        res.status(404).send(error.message)
    }
}

// get product by id
let getProductById = async (req, res) => {
    product = await ProductModel.findById({ _id: req.params.id })
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message: "Product not found."});
    }

}

//to add a new product
let addProduct = async (req, res) => {
    const { title, gender, category, brand, rating, review, price, image, available, item_left } = req.body;
    try {
        product = ProductModel(req.body)
        await product.save();
        res.status(200).send({ "message": "One product has been added " })

    } catch (error) {

        console.log(error.message)
        res.status(404).send({ "message": error.message })
    }
}

//to update the product by its id
let updateProduct = async(req, res) => {
    try{
        const { title, gender, category, brand, rating, review, price, image, available, item_left } = req.body;

        const updated = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if(!updated) {
            res.status(404).json({message: 'Product not found'}); 
        }

        res.status(200).json({message: 'Product details updated successfully'});
    } catch(err) {
        res.status(400).json({message: 'An error occured'});
    } 
}

//to delete product by its id
let deleteProduct = async(req,res)=>{

    try{
        const deleted = await ProductModel.findByIdAndDelete(req.params.id);
        if(!deleted) {
            res.status(404).json({message: 'Product not found'}); 
        }
        res.status(200).json({message: 'Product details deleted successfully'});
    } catch(err) {
        res.status(400).json({message: 'An error occured'});
    }

}

module.exports = { adminAll, getAllProducts, addProduct, getProductById, updateProduct, deleteProduct, }