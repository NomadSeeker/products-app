const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/product');

dotenv.config();
mongoose.connect(process.env.DBURL)
.then(() => { console.log('Connected to database!'); })
.catch(() => { console.log('Connection failed!'); });

const createProduct = async (req, res, next) => {
    const {name, price} = req.body;

    const createdProduct = new Product({name, price});

    const result = await createdProduct.save();

    res.json(result);
};

const getProducts = async (req, res, next) => {
    const products = await Product.find().exec();

    res.json(products);
}
exports.createProduct = createProduct;
exports.getProducts = getProducts;