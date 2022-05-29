import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className={styles.main}>
          <p>You do not have permission to view this page.</p>
      </section>
    </>
  )
}
