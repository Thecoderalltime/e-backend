import { Product } from "../../model/product.js";
// create product 
// while json data remove from the DB then will be work the create product controller
export const createProductController = async (req, res) => {
    console.log(req.body)
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Server error' });
    }
}


// fetch all by filter, sort and paginated 
export const fetchProductController = async (req, res) => {
    try {
        let query = Product.find()
        if (req.query.category) {
            query = query.where({ category: req.query.category })
        }
        if (req.query.brand) {
            query = query.where({ brand: req.query.brand })
        }

        if (req.query._sort && req.query._order) {
            query = query.sort({ [req.query._sort]: req.query._order });
        }

        const totalItems = await Product.countDocuments(query);
        if (req.query._page && req.query._limit) {
            const page = parseInt(req.query._page)
            const pageLimit = parseInt(req.query._limit)
            query = query.skip(pageLimit * (page - 1)).limit(pageLimit)
        }

        const data = await query.exec()
        res.status(200).json({ success: true, totalItems, data });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}


// fetch product by id 
export const fetchProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id).exec()
        res.status(200).json(product)

    } catch (error) {
        res.status(404).json({ message: 'Product not found' });

    }
}



// fetch product by id  abd update
export const fetchProductByIdAndUpdate = async (req, res) => {
    console.log(req.body)
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true }).exec()
        res.status(200).json(product)

    } catch (error) {
        res.status(404).json({ message: 'Product not found' });

    }
}
