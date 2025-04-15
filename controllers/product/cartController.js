import { Cart } from "../../model/cartModel.js"

export const createCartItem = async (req, res) => {
    const cart = new Cart(req.body);
    try {
        const doc = await cart.save();
        const result = await doc
            .populate('product')
            .populate('user');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const fetchCartByUserId = async (req, res) => {
    const { user } = req.query
    try {
        const cart = await Cart.find({ user: user }).populate("user").populate('product').exec()
        res.status(200).json(cart)
    } catch (error) {
        res.status(404).json(error)
    }
}
export const updateCartByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const doc = await Cart.findByIdAndUpdate(id, req.body, { new: true });
        const result = await doc.populate('product');
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error);
    }
};


export const deleteCartByUserId = async (req, res) => {
    try {
        const { id } = req.params
        await Cart.findByIdAndDelete(id).exec()
        res.status(200).json({message:"product delelted successfully"});
    } catch (error) {
        res.status(404).json(error)
    }
}