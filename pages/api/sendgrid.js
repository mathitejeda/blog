import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: 'speaktome@mathi.com.ar',
            from: 'noreply@mathi.com.ar',
            subject: `${req.body.subject}`,
            html: `<h1> Yeeeeeah New email <\h1>
<h2>Sent from: ${req.body.fullName}</h2>
<h2>Get in touch in: ${req.body.email}<h2/>
<p>${req.body.message}</p>`
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
    return res.status(200).json({ error: "" });
}

export default sendEmail;
