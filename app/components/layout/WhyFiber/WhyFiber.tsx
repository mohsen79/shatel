import React from 'react';
import styles from './WhyFiber.module.css';
import FiberMern from '../../FiberMern/FiberMern';
import allSize from '../../../../public/assets/allSizes.svg';
import code from '../../../../public/assets/code.svg';
import time from '../../../../public/assets/time.svg';
import Diversify from '../Diversify/Diversify';

const WhyFiber = () => {
    return (
        <section className={styles.whyFiber}>
            <div className={styles.title}>
                <h4>Why Fiber?</h4>
                <h2>A good portfolio means good employability</h2>
            </div>
            <div className={styles.fiberMerns}>
                <FiberMern icon={time} title="Build in minutes"
                    description="With a selection of permade templates, you
                can build out a portfolio in less than 10 minutes."/>
                <FiberMern icon={code} title="Add custom css"
                    description="Customize your personal portfolio even more
                    with the ability to add your own custom CSS styles."/>
                <FiberMern icon={allSize} title="Responsive"
                    description="All Fiber templates are fully responsive to ensure the 
                    experience is seemless across all devieces"/>
            </div>
            <Diversify />
        </section>
    )
}

export default WhyFiber