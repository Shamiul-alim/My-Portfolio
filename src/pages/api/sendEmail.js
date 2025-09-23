// src/pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export async function post({ request }) {
  const { name, email, message } = await request.json();

  // Setup nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your email service
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable for safety
      pass: process.env.EMAIL_PASS, // Use environment variable for safety
    },
  });

  // Email configuration
  const mailOptions = {
    from: email, // From the email submitted in the form
    to: 'samiulalim01234@gmail.com', // Where the email should be sent
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully!', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Failed to send email', { status: 500 });
  }
}
