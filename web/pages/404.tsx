import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Page Not Found — Jon Brennecke</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main style={{ maxWidth: 720, margin: '15vh auto', padding: 28 }}>
        <h1>Page not found</h1>
        <p>The page you are looking for could not be found.</p>
        <Link href="/">
          <a>Back to Jon Brennecke’s portfolio</a>
        </Link>
      </main>
    </>
  );
}
