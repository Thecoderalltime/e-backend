import { Category } from "../../model/category.js"


export const categoryController = async (req, res) => {
    try {
        const categoris = await Category.find()
        res.status(200).json(categoris)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}