import { Order } from "../../model/orderModel.js"

export const fetchUserOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Order.find({ user: id })
            .populate('user')
            .populate('item');

        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ message: error.message });
    }
};


export const createOrderController = async(req, res)=>{
    try {
        const order=  Order(req.body)
        const doc = await order.save(req.body)
        const result = await doc.populate('user');
        res.status(200).json(result)
    } catch (error) {
        res.status(200).json(error)

    }
}

export const updateOrderController = async (req, res) => {
    try {
        const {id}= req.params
        const doc = await Order.findByIdAndUpdate(id, req.body)
        const result = await doc.populate('user')
        res.status(200).json(result)
       
    } catch (error) {
        res.status(200).json(error)

    }
}

export const deleteOrderController = async (req, res) => {
    try {
        const { id } = req.params
        const doc = await Order.findByIdAndDelete(id)
        const result = await doc.populate('user')
        res.status(200).json(result)
    } catch (error) {
        res.status(200).json(error)

    }
}
export const fetchAllOderController = async (req, res) => {
    try {
        let query = Order.find()
        if (req.query.category) {
            query = query.where({ category: req.query.category })
        }
        if (req.query.brand) {
            query = query.where({ brand: req.query.brand })
        }

        if (req.query._sort && req.query._order) {
            query = query.sort({ [req.query._sort]: req.query._order });
        }

        const totalItems = await Order.countDocuments(query);
        
        if (req.query._page && req.query._limit) {
            const page = parseInt(req.query._page)
            const pageLimit = parseInt(req.query._limit)
            query = query.skip(pageLimit*(page-1)).limit(pageLimit)
        }

        const data = await query.exec()
        res.status(200).json({ success: true, totalItems,data} );
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}
