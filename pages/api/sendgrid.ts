import sendgrid from "@sendgrid/mail"
import type { NextApiRequest, NextApiResponse } from "next"

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY!)

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: "example@example.com", // Your email where you'll receive emails
      from: "example@example.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `
      <div>New email!
        <p>Name: ${req.body.name}</p> 
        <p>Message: ${req.body.message}</p>
      </div>` // Change this to your email content
    })
  } catch (e: any) {
    return res.status(e.statusCode || 500).json({ error: e.message })
  }

  return res.status(200).json({ error: "" })
}

export default sendEmail
