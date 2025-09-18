const nodemailer = require("nodemailer")

const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

const sendContactEmail = async (contactData) => {
  const transporter = createTransporter()

  try {

    const adminMailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    await transporter.sendMail(adminMailOptions)
    console.log("Admin email sent.")


    const userMailOptions = {
      from: `"Your Company" <${process.env.EMAIL_USER}>`,
      to: contactData.email,
      subject: "Thank you for contacting us!",
      html: `
        <h2>Thank you for contacting us, ${contactData.name}!</h2>
        <p>We have received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong></p>
        <p>${contactData.message}</p>
        <br>
        <p>Best regards,<br>Your Company Team</p>
      `,
    }

    await transporter.sendMail(userMailOptions)
    console.log("User thank you email sent.")
  } catch (error) {
    console.error("Failed to send email:", error)
  }
}

module.exports = { sendContactEmail }