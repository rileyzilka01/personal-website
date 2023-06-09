"use client";

import Image from 'next/image'

import SchemeSwitch from '@/components/schemeSwitch'

import styles from '../styles/page.module.css'

import React, { useState } from 'react'

export default function Home() {

  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => {
    setClicked(!clicked);
  }

  return (
    <main className={styles.main} style={{
      '--foreground-primary': clicked ? 'black' : 'white',
      '--foreground-secondary': clicked ? 'gray': 'lightgray',

      '--switch-background-primary': clicked ? '#010048' : '#3EB7FC',
      '--switch-left': clicked ? '68px': '2px',
      '--switch-sun-transform': clicked ? 'translateX(40px)' : 'translateX(0px)',
      '--switch-sun-wrapper-transition': clicked ? '0.7s cubic-bezier(.32,0,1,1)' : '0.7s cubic-bezier(0,1,0.5,1)',
      '--switch-sun-wrapper-transform': clicked ? 'translateY(40px)' : 'translateY(0px)',
      '--switch-moon-transform': clicked ? 'translateX(0px)' : 'translateX(-40px)',
      '--switch-moon-wrapper-transition': clicked ? '0.7s cubic-bezier(0,1,0.5,1)' : '0.7s cubic-bezier(.32,0,1,1)',
      '--switch-moon-wrapper-transform': clicked ? 'translateY(0px)' : 'translateY(40px)',
    }}>
      <SchemeSwitch toggleClicked={toggleClicked}/>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
