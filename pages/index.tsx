import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { Post, getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

import utilStyles from '../styles/utils.module.css';

interface IHomeProps { allPostsData: Post[] };

export default function Home({ allPostsData }: IHomeProps): JSX.Element {
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
          (Me built this site with{' '}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
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


export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}