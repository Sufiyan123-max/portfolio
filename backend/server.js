const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

/* =========================
   MIDDLEWARE
========================= */

// ✅ Allow frontend (Vercel) to access backend (Render)
app.use(
  cors({
    origin: "*", // you can restrict later
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

/* =========================
   NODEMAILER CONFIG
========================= */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// ✅ Verify mail server once
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ MAIL SERVER ERROR:", error);
  } else {
    console.log("✅ Mail server ready");
  }
});

/* =========================
   ROUTES
========================= */

// Health check
app.get("/", (req, res) => {
  res.status(200).send("Backend is running 🚀");
});

// Contact API
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("❌ NODEMAILER ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

/* =========================
   START SERVER
========================= */

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
