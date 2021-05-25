import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message, phone, city } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.local.user,
      pass: process.env.local.password,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: "yubbie1304@gmail.com",
      to: "ubongnt@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Phone: </strong> ${phone} </p><br>
      <p><strong>City: </strong> ${city} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>
      `,
    });

    console.log("Message Sent");
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
