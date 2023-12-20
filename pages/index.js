import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.presentation}`}>
                <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={128}
                    width={128}
                    alt=""
                />
                <h2 className={utilStyles.headingLg}>Hi, I'm Mathi!</h2>
        <p>I have successfully completed a Technical University Degree in Programming at UTN, General Pacheco Regional Faculty. My aim is to continually acquire new skills and enhance my existing ones to foster growth as a programmer. Linux poweruser wanna-be and smash bros amateur (little mac btw).</p>
            </section>
        </Layout>
    );
}
