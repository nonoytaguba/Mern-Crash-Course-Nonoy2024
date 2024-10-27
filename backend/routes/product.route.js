import express from 'express';
// import mongoose from 'mongoose';
// import Product from '../models/product.model.js'
import { createProduct, getProducts, updateProduct, deleteProduct } from '../controllers/product.controller.js';
const router = express.Router();

//GET all products
router.get('/', getProducts)

//POST Data along with request
 router.post('/', createProduct )

//UPDATE product
router.put('/:id', updateProduct)

//DELETE Product
router.delete('/:id', deleteProduct)

export default router;