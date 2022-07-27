import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message, phone, city } = req.body;

  const transporter = nodemailer.createTransport({
    service: "smtp.gmail",
    port: 465,
    secure: true,
    auth: {
      user: 'yubbie1304@gmail.com',
      pass: 'wungbo1986'
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "ubonggodwin13@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Phone: </strong> ${phone} </p><br>
      <p><strong>City: </strong> ${city} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>
      `,
    });

    console.log("Message Sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};


// export default (req, res) => {
//   console.log(req.body);
//   res.status(200).json(req.body);
// };