import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.aboutFiber}>
                <h2>Fiber</h2>
                <p>With Fiber, you can setup your own personal
                    portfolio in minutes with dozens of permade,
                    beautiful templates.
                </p>
                <p>Made with <FontAwesomeIcon icon={faHeart} width={15} height={15} />
                    &nbsp;in Netherlands.</p>
            </div>
            <div className={styles.footerItems}>
                <h3>Sitemap</h3>
                <Link href="/">Homepage</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">Testimonials</Link>
                <Link href="/">Features</Link>
            </div>
            <div className={styles.footerItems}>
                <h3>Resources</h3>
                <Link href="/">Support</Link>
                <Link href="/">Contact</Link>
                <Link href="/">FAQ</Link>
            </div>
            <div className={styles.footerItems}>
                <h3>Company</h3>
                <Link href="/">About</Link>
                <Link href="/">Customers</Link>
                <Link href="/">Blog</Link>
            </div>
            <div className={styles.footerItems}>
                <h3>Portfilios</h3>
                <Link href={{
                    pathname: '/profile',
                    query: {
                        name: "Sarah Andrews",
                    }
                }}>Sarah Andrews</Link>
                <Link href={{
                    pathname: '/profile',
                    query: {
                        name: "Mathew Higgins",
                    }
                }}>Mathew Higgins</Link>
                <Link href={{
                    pathname: '/profile',
                    query: {
                        name: "Janice Dave",
                    }
                }}>Janice Dave</Link>
            </div>
        </footer>
    )
}

export default Footer