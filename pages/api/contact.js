import nodemailer from "nodemailer"

export default function (req, res) {
    
    
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'ilmohikmat11@gmail.com',
        pass: "cqkjpnzzayucovjq",
      },
      secure: true,
    })
    const mailData = {
      from: 'ilmohikmat11@gmail.com',
      to: 'spreaddigitalads@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
  }