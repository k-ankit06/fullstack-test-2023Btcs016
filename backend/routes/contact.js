const express = require("express")
const Contact = require("../models/Contact")
const { sendContactEmail } = require("../config/email")

const router = express.Router()


router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body


    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      })
    }

   
    const contact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    })                                          
    await contact.save()
    await sendContactEmail(contact)
    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    })
  } catch (error) {
    console.error("Contact form error:", error)

    console.error("Error message:", error && error.message)
    console.error("Error stack:", error && error.stack)

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message)
      return res.status(400).json({
        success: false,
        message: errors.join(", "),
      })
    }

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
      error: error && error.message, // Optionally send error message to frontend for debugging
    })
  }
})

module.exports = router