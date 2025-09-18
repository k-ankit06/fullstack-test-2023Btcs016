const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/database")


dotenv.config()

connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", require("./routes/contact"))
app.get("/", (req, res) => {
  res.json({ message: "Contact Form API is running!" })
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
