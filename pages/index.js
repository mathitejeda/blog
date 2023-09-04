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
            <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
            />
            <h2 className={utilStyles.headingLg}>
                Mathias Tejeda
            </h2>

            <section className={utilStyles.headingMd}>
                <p>Hola, soy mathi! Actualmente estudio Tecnicatura Universitaria en programación en la UTN Facultad regional General Pacheco. Mi objetivo es adquirir nuevas habilidades y poder desarrollar las que ya poseo para poder crecer como programador. Me gusta aprender y conocer nuevas herramientas que me ayuden a cumplir ese objetivo. Me gusta ver series, Peliculas, leer libros o manga y jugar videojuegos. Disfruto mucho programando, especialmente todo lo relacionado a la lógica y todos los desafios que esto trae. También me gusta probar sistemas operativos basados en linux, mis distribuciones favoritas son ubuntu y fedora. </p>
            </section>
        </Layout>
    );
}
