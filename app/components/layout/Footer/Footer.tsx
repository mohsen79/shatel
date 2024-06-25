import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
                <p>Homepage</p>
                <p>Pricing</p>
                <p>Testimonials</p>
                <p>Features</p>
            </div>
            <div className={styles.footerItems}>
                <h3>Resources</h3>
                <p>Support</p>
                <p>Contact</p>
                <p>FAQ</p>
            </div>
            <div className={styles.footerItems}>
                <h3>Company</h3>
                <p>About</p>
                <p>Customers</p>
                <p>Blog</p>
            </div>
            <div className={styles.footerItems}>
                <h3>Portfilios</h3>
                <p>Sarah Andrews</p>
                <p>Mathew Higgins</p>
                <p>Janice Dave</p>
            </div>
        </footer>
    )
}

export default Footer