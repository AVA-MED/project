
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import multer from "multer";
import fs from "fs";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer storage setup
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage });

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: "rajdeepagri@yahoo.com",
        pass: "negwkvqcduinkjbr",
    },
});

// Common function to send emails
const sendEmail = async (mailOptions, filePath) => {
    try {
        await transporter.sendMail(mailOptions);
        if (filePath) fs.unlinkSync(filePath); // Delete file after sending
        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("Email sending error:", error);
        return { success: false, message: "Error sending email", error };
    }
};
app.post("/send-email", async (req, res) => {
    const { firstName, lastName, companyName, country, email, mobile, message } = req.body;

    if (!firstName || !lastName || !companyName || !country || !email || !mobile || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const mailOptions = {
        from: "rajdeepagri@yahoo.com",
        to: "rajdeepagri@yahoo.com",
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: `First Name: ${firstName}
Last Name: ${lastName}
Company: ${companyName}
Country: ${country}
Email: ${email}
Mobile: ${mobile}
Message: ${message}`
    };

    const result = await sendEmail(mailOptions);
    res.status(result.success ? 200 : 500).json({ message: result.message });
});


// Career form submission with file upload
app.post("/carrer-form", upload.single("cv"), async (req, res) => {
    const { firstName, lastName, email, source, ctc, noticePeriod, experience, jobTitle, message } = req.body;
    const file = req.file;

    if (!firstName || !lastName || !email || !source || !ctc || !noticePeriod || !experience || !jobTitle || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const mailOptions = {
        from: "rajdeepagri@yahoo.com",
        to: "rajdeepagri@yahoo.com",
        subject: `New Career Form Submission from ${firstName} ${lastName}`,
        text: `First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Source: ${source}
CTC: ${ctc}
Notice Period: ${noticePeriod}
Experience: ${experience}
Job Title: ${jobTitle}
Message: ${message}`,
        attachments: file ? [{ filename: file.originalname, path: file.path }] : [],
    };

    const result = await sendEmail(mailOptions, file?.path);
    res.status(result.success ? 200 : 500).json({ message: result.message });
});


// Simple form submission without file upload
app.post("/submit-form", async (req, res) => {
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !mobile || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const mailOptions = {
        from: "rajdeepagri@yahoo.com",
        to:"rajdeepagri@yahoo.com",
        subject: `New Enquiry Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
    };

    const result = await sendEmail(mailOptions);
    res.status(result.success ? 200 : 500).json({ message: result.message });
});


// Simple form subscribe without file upload
app.post("/subscribe-email", async (req, res) => {
    const {  email, mobile} = req.body;

    if ( !email || !mobile ) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const mailOptions = {
        from: "rajdeepagri@yahoo.com",
        to:"rajdeepagri@yahoo.com",
        subject: `New Contact Form Submission from ${email}`,
        text: `Email: ${email}\nMobile: ${mobile}`,
    };

    const result = await sendEmail(mailOptions);
    res.status(result.success ? 200 : 500).json({ message: result.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
