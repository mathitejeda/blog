import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import React from 'react';
import ContactForm from '../../components/contact';
import Link from 'next/link';

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1 className={utilStyles.heading2xl}>Contact</h1>
            <p> You can find me here:
                <li className={utilStyles.list}>
                    <Link href="https://www.linkedin.com/in/tejedamathias/" target="_blank">LinkedIn</Link>
                </li>
                <li className={utilStyles.list}>
                    <Link href="https://github.com/mathitejeda" target="_blank">Github</Link>
                </li>
                <h2>Contact me via email:</h2>
            </p>
            <ContactForm />
        </Layout>
    );
}
