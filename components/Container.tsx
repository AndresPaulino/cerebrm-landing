import clsx from 'clsx';
import Head from 'next/head';
import React from 'react';
import { Footer } from './Footer';
import Navbar from './Navbar/Navbar';

export const Container = (props: any) => {
  const { children, className, ...customMeta } = props;

  const title = 'CEREB[RM]';
  const meta = {
    title,
    description: `CEREB[RM]`,
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='cereb[rm]' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>

      <Navbar />
      <main className={clsx('antialiased ', className)}>{children}</main>
      <Footer />
    </>
  );
};
