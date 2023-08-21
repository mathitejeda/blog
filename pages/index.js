import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
	  props: {
		allPostsData,
	  },
	};
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hola, soy mathi! Actualmente estudio Tecnicatura Universitaria en programación en la UTN Facultad regional General Pacheco. Mi objetivo es adquirir nuevas habilidades y poder desarrollar las que ya poseo para poder crecer como programador. Me gusta aprender y conocer nuevas herramientas que me ayuden a cumplir ese objetivo. Me gusta ver series, Peliculas, leer libros o manga y jugar videojuegos. Disfruto mucho programando, especialmente todo lo relacionado a la lógica y todos los desafios que esto trae. También me gusta probar sistemas operativos basados en linux, mis distribuciones favoritas son ubuntu y fedora. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
	  <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
			<li className={utilStyles.listItem} key={id}>
			<Link href={`/posts/${id}`}>{title}</Link>
			<br />
			<small className={utilStyles.lightText}>
			<Date dateString={date} />
			</small>
			</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}