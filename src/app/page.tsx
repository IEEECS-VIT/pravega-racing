'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';
import Nav from '@/components/nav';
import PrimaryLink from '@/components/links/PrimaryLink';
import UnderlineLink from '@/components/links/UnderlineLink';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <Nav></Nav>
      <main>
        <Head>
          <title>Hi</title>
        </Head>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <h1 className='mt-4'>Good Luck!</h1>
            <p>This project comes with tailwind and ts installed and configured</p>
            <p>use tailwind.config.ts to declare color variables and please use it</p>
            <p>use a color picker eyedropper web extension to get the exact colors of the website</p>
            <PrimaryLink href='https://nextjs.org/docs'>nextjs has the best docs ever refer to it</PrimaryLink>
            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://github.com/IEEECS-VIT'>
                IEEECS-VIT
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
