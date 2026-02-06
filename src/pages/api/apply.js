import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, countryCode, phone, domain, college, course, portfolio, role } = req.body;

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing environment variables: EMAIL_USER or EMAIL_PASS');
            return res.status(500).json({ message: 'Server configuration error: Missing email credentials.' });
        }

        // Create a transporter using your email service
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const fullPhone = countryCode ? `${countryCode} ${phone}` : phone;

        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: process.env.EMAIL_USER, // Receiver address
            replyTo: email,
            subject: `New Internship Application: ${role} - ${name}`,
            text: `
                New Internship Application
                
                Role: ${role}
                Domain: ${domain}
                
                Candidate Details:
                Name: ${name}
                Email: ${email}
                Phone: ${fullPhone}
                College: ${college}
                Course: ${course}
                Portfolio: ${portfolio || 'Not Provided'}
            `,
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
                <p><strong>Portfolio:</strong> ${portfolio ? `<a href="${portfolio}">${portfolio}</a>` : 'Not Provided'}</p>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            // Return more specific error message for debugging (be careful in production)
            return res.status(500).json({ message: 'Error sending email', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
