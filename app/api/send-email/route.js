// src/app/api/send-email.js

import nodemailer from "nodemailer";

export default async function POST(req, res) {

  if (req.method === "POST") {
    const { fname, lname, email, phone, content } = req.body;
    console.log(req.body);

    // Log environment variables to ensure they are set (should be removed in production)
    console.log("Email User:", process.env.EMAIL_USER);
    console.log("Email Pass:", process.env.EMAIL_PASS);
    console.log("Recipient Email:", process.env.RECIPIENT_EMAIL);

    // Validate form data
    if (!fname || !lname || !email || !phone || !content) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // e.g., 'gmail', 'hotmail', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use the authenticated sender's email address
      to: process.env.RECIPIENT_EMAIL, // Recipient email address
      subject: `Contact Us Form Submission from ${fname} ${lname}`,
      text: `You have a new contact form submission:\n\nName: ${fname} ${lname}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${content}`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      return res
        .status(200)
        .json({ success: true, message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send email." });
    }
  } else {
    // Handle non-POST requests
    res.setHeader("Allow", ["POST"]);
    res
      .status(405)
      .json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}
