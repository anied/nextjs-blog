import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello! Me <b>Cookie Monster</b>! Me live on Sesame Street! Me&nbsp;
          <b>love</b> cookies! ❤️🍪 Me chef in <i>delicious</i> food truck!
          Me also detective! And sometimes crack reporter 🕵️‍♂️.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}