import * as nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const EMAIL = process.env.NODE_MAILER_CLIENT_ID || "";
const PASSWORD = process.env.NODE_MAILER_CLIENT_SECRET || "";
const CLIENT_EMAIL = process.env.NODE_MAILER_CLIENT_EMAIL || "";

export async function POST(req) {
    try {
        const body = await req.json();

        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: EMAIL,
                pass: PASSWORD,
            },
            secure: true,
            logger: true,
        });

        const mailData = {
            from: EMAIL,
            to: CLIENT_EMAIL,
            subject: `Message From ${body.firstName} `,
            html: `
        <html>
          <body>
            <div>
              <p>
                Hi  team, I am ${body.firstName} ${body.lastName}.
              </p>
              <p>I want to contact you as soon as possible.</p>
              <p>Email: ${body.email}</p>
              <p>Phone No. ${body.phone}</p>
              <p>Message: ${body.message}</p>
              <p>Thank you</p>
            </div>
          </body>
        </html>
      `,
        };

        const info = await transporter.sendMail(mailData);

        if (info.rejected.length > 0) {
            return NextResponse.json({ error: "Email sending failed, try again later" }, { status: 500 });
        } else {
            return NextResponse.json({ message: "Thanks for your message! We'll connect soon." }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
