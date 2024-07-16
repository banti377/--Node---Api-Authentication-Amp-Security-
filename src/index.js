import express from "express"
import { connectDB } from "./db/index.js"
import userRouter from "./router/user.js"

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use("/user", userRouter)

app.listen(port, () => {
    connectDB()
    console.log(`Server is running on http://localhost:${port}`)
})

app.get("/", (req, res) => {
    res.send("welcome to goa singham")
})