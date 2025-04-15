import { Brand } from "../../model/brand.js"


export const brandController = async (req, res) => {
    try {
        const bands = await Brand.find()
        res.status(200).json(bands)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}