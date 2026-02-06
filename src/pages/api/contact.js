import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, countryCode, phone, message, meetingDate, meetingTime } = req.body;

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing environment variables: EMAIL_USER or EMAIL_PASS');
            return res.status(500).json({ message: 'Server configuration error: Missing email credentials.' });
        }

        // Create a transporter using robust SMTP settings for production
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const fullPhone = countryCode ? `${countryCode} ${phone}` : phone;

        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: process.env.EMAIL_USER, // Receiver address (receiving on the same email)
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${fullPhone}
                
                Meeting Request:
                Date: ${meetingDate || 'Not specified'}
                Time: ${meetingTime || 'Not specified'}
                
                Message:
                ${message || 'No message provided'}
            `,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${fullPhone}</p>
                
                <h4>Meeting Request</h4>
                <p><strong>Date:</strong> ${meetingDate || 'Not specified'}</p>
                <p><strong>Time:</strong> ${meetingTime || 'Not specified'}</p>
                
                <h4>Message</h4>
                <p>${message ? message.replace(/\n/g, '<br>') : 'No message provided'}</p>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending contact email:', error);
            return res.status(500).json({ message: 'Error sending email', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
