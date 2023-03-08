import express from 'express';
const cors = require('cors');
import { json } from 'body-parser';
import mongoose from 'mongoose';
require('/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

const Product = require('./models/Product');

// Get all products
app.get('/api/products', async (req, res) => {
	try {
		const products = await Product.find({});
		res.json(products);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Get a single product by ID
app.get('/api/products/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.json(product);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Create a new project
app.post('/api/products', async (req, res) => {
	try {
		const product = new Product(req.body);
		await product.save();
		res.json(product);
	} catch (err) {
		res.status(500).json
	}
})
