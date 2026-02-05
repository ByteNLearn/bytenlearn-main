import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, message } = req.body;

        // Basic validation
        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Configure the transporter
        // NOTE: For Gmail, you often need to use an App Password if 2FA is enabled.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address (bytenlearn@gmail.com)
                pass: process.env.EMAIL_PASS, // Your Gmail App Password
            },
        });

        try {
            // Email content
            const mailOptions = {
                from: `"${firstName} ${lastName}" <${email}>`, // Sender info (Note: Gmail often overrides the 'from' header to be the authenticated user for security, but puts this in Reply-To)
                to: 'bytenlearn@gmail.com', // Destination email
                replyTo: email,
                subject: `New Contact Form Submission from ${firstName} ${lastName}`,
                text: `
          Name: ${firstName} ${lastName}
          Email: ${email}
          
          Message:
          ${message}
        `,
                html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
            };

            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
