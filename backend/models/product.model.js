import mongoose from 'mongoose';

// Creating Schema
const productSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
price: {type: Number,
    required: true
},
image: {
    type: String,
    required: true
}
},
{
    timestamp: true //createdAt, updateAt
});

//Creating Product Model
const Product = mongoose.model('Product', productSchema) //Collection called Product

//NOTE: Why don't we call this products but instead we call it as "Product",
//       it is uppercased and it is singular?
//ANSWER: Because mongoose is going to take a look at it and it is going to convert it to be
//        something like "products", this is going to make it to be plural and just take the 
//        first letter and make it lowercased

export default Product; 





