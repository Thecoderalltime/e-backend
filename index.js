import express from "express";
import dotenv from "dotenv"
import colors from "colors"
import cors from "cors"
import mongoDBconnect from "./config/mogoDB.js";
import productRouter from "./routers/product/productRouters.js";
import brandRouter from "./routers/product/brandRouter.js"
import categoryRouter from "./routers/product/categoryRouter.js"
import userRouter from "./routers/user/userRouter.js"
import authRouter from "./routers/user/authRouter.js"
import cartRouter from "./routers/cart/cartRouter.js"
import orderRouter from "./routers/order/orderRouter.js"




// config dot env 
dotenv.config()
const PORT = process.env.PORT || 6000

// init app 
const app = express();

// middleware 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// useing all router 
app.use("/api/products", productRouter)
app.use("/api/brands", brandRouter)
app.use("/api/categories", categoryRouter)
app.use("/api/users", userRouter)
app.use("/api", authRouter)
app.use("/api/cart", cartRouter)
app.use("/api/orders", orderRouter)


// create server 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`.bgRed.white);
    mongoDBconnect()
})