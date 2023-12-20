import React, { useState } from 'react';
import utilStyles from '../styles/utils.module.css';
import FloatingNotification from './alert';

const ContactForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [buttonText, setButtonText] = useState("Send");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();
        if (isValidForm) {
            setButtonText("Sending...");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    fullName: fullName,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });
            const { error } = await res.json();
            if (error) {
                setShowFailureMessage(true);
                setShowSuccessMessage(false);
                setButtonText("Send");
                setFullName("");
                setEmail("");
                setMessage("");
                setSubject("");
            } else {
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
                setButtonText("Send");
                setFullName("");
                setEmail("");
                setMessage("");
                setSubject("");
            }
        }
        setTimeout(() => {
            setShowSuccessMessage(false);
            setShowFailureMessage(false);
        }, 3000)
    };

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullName.length <= 0) {
            tempErrors["fullName"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }
        setErrors({ ...tempErrors });

        return isValid;
    };

    return (
        <form onSubmit={handleSubmit} className={utilStyles.borderRoundedEnph}>
            <label htmlFor="fullName" className={utilStyles.label}>Full name
                {errors?.fullName && (
                    <span className={utilStyles.alertColor}> * this field can not be empty</span>
                )}
            </label>
            <input type="text" name="fullName" className={utilStyles.input} placeholder="Your full name..." value={fullName} onChange={e => { setFullName(e.target.value) }}></input>

            <label htmlFor="email" className={utilStyles.label}>Email
                {errors?.email && (
                    <span className={utilStyles.alertColor}> * this field can not be empty</span>
                )}
            </label>
            <input type="email" name="email" className={utilStyles.input} placeholder="Your email..." value={email} onChange={e => { setEmail(e.target.value) }}></input>

            <label htmlFor="subject" className={utilStyles.label}>Subject
                {errors?.subject && (
                    <span className={utilStyles.alertColor}> * this field can not be empty.</span>
                )}
            </label>
            <input type="text" name="subject" className={utilStyles.input} placeholder="A realy good subject..." value={subject} onChange={e => { setSubject(e.target.value) }}></input>

            <label className={utilStyles.label}>Message
                {errors?.message && (
                    <span className={utilStyles.alertColor}> * this field can not be empty.</span>
                )}
            </label>
            <textarea name="message" className={utilStyles.input} placeholder="Your message!" value={message} onChange={e => { setMessage(e.target.value) }}></textarea>

            <button type="submit" className={utilStyles.submitButton}>{buttonText}</button>
            {showSuccessMessage && (
                <FloatingNotification message="Message sent!" type="success" />
            ) || showFailureMessage && (
                <FloatingNotification message="Message not sent!" type="alert" />
            )}
        </form>
    );
};

export default ContactForm;
