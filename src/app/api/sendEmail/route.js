import nodemailer from "nodemailer";
import {
  generateEmailTemplate,
  generatePlainTextEmail,
} from "./email-template";

export async function POST(req, res) {
  try {
    const { fname, lname, email, phone, content } = await req.json();

    // Validate required fields
    if (!fname || !lname || !email || !content) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
          status: "error",
        }),
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          message: "Invalid email format",
          status: "error",
        }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.de",
      port: 587,
      secure: false,
      auth: {
        user: process.env.IONOS_EMAIL,
        pass: process.env.IONOS_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Format the date
    const date = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Prepare email data
    const emailData = {
      fname,
      lname,
      email,
      phone,
      content,
      date,
    };

    const mailOptions = {
      from: {
        name: "Contact Form",
        address: process.env.IONOS_EMAIL,
      },
      to: process.env.IONOS_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${fname} ${lname}`,
      html: generateEmailTemplate(emailData),
      text: generatePlainTextEmail(emailData), // Plain text version
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: "Thank you for your message. We will contact you soon!",
        status: "success",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({
        message:
          "Sorry, we couldn't send your message. Please try again later.",
        status: "error",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
