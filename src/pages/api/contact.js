import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, countryCode, phone, message, meetingDate, meetingTime } = req.body;

        // Create a transporter using Gmail (or another service)
        // NOTE: For Gmail, you often need an App Password if 2FA is on.
        // In production, use environment variables for sensitive data.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'keshav.bytenlearn@gmail.com', // Your email
                pass: process.env.EMAIL_PASSWORD || 'your-app-password-here', // Placeholder
            },
        });

        const fullPhone = `${countryCode} ${phone}`;
        const meetingDetails = meetingDate && meetingTime ? `${meetingDate} at ${meetingTime}` : 'Not Scheduled';

        const mailOptions = {
            from: email,
            to: 'keshav.bytenlearn@gmail.com',
            subject: `New Contact Request: ${name}`,
            html: `
                <h2>New Contact Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${fullPhone}</p>
                <hr />
                <h3>Message</h3>
                <p>${message}</p>
                <hr />
                <h3>Requested Meeting</h3>
                <p><strong>Date & Time:</strong> ${meetingDetails}</p>
            `,
        };

        try {
            if (!process.env.EMAIL_PASSWORD) {
                console.log("Mock Contact Email Sent:", mailOptions);
                return res.status(200).json({ message: 'Mock email sent successfully' });
            }

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Message sent successfully' });
        } catch (error) {
            console.error('Contact email send error:', error);
            res.status(500).json({ error: 'Failed to send message' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
