import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, countryCode, phone, domain, college, course, portfolio, role } = req.body;

        // Create a transporter using Gmail (or another service)
        // NOTE: For Gmail, you often need an App Password if 2FA is on.
        // In production, use environment variables for sensitive data.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'keshav.bytenlearn@gmail.com', // Your email
                pass: process.env.EMAIL_PASSWORD || 'your-app-password-here', // Placeholder - User needs to configure this
            },
        });

        const fullPhone = `${countryCode} ${phone}`;

        const mailOptions = {
            from: email,
            to: 'keshav.bytenlearn@gmail.com',
            subject: `New Internship Application: ${role} - ${name}`,
            html: `
                <h2>New Internship Application</h2>
                <p><strong>Role:</strong> ${role}</p>
                <p><strong>Domain:</strong> ${domain}</p>
                <hr />
                <h3>Candidate Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${fullPhone}</p>
                <p><strong>College:</strong> ${college}</p>
                <p><strong>Course:</strong> ${course}</p>
                <p><strong>Portfolio:</strong> ${portfolio || 'Not Provided'}</p>
            `,
        };

        try {
            // For now, since we haven't configured the password in env, we might just simulate success 
            // OR actually try to send if the user provided credentials. 
            // To prevent crashing without creds, we can check env.

            if (!process.env.EMAIL_PASSWORD) {
                console.log("Mock Email Sent:", mailOptions);
                // Return success for simulation purposes if no password configured yet
                return res.status(200).json({ message: 'Mock email sent successfully' });
            }

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Email send error:', error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
