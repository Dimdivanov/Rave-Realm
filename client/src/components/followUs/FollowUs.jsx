import React from 'react';
import styles from './FollowUs.module.css';

export default function FollowUs() {
    return (
        <section className={styles.section}>
            <div className={`${styles.container} grid grid-cols-1 md:grid-cols-2`}>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img
                            src="/src/assets/icons/instagramLogo.png"
                            alt="instaLogo"
                            className={styles.iconImage}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.textTitle}>Follow us on Instagram</p>
                        <p className={styles.textHandle}>
                            @RaveRealmTickets
                        </p>
                    </div>
                </div>

                <div className={styles.partnersSection}>
                    <h2 className={styles.partnersTitle}>Our Partners</h2>
                    <h3 className={styles.partnersSubtitle}>Rave Realm</h3>
                    <div className="flex flex-wrap gap-6 mb-4">
                        <div className={styles.partner}>
                            <img
                                src="/src/assets/images/sponsorsBanner/sponsor1.jpg"
                                alt="Sumiom"
                                className={styles.partnerImage}
                            />
                            <p className={styles.partnerName}>Sumiom</p>
                        </div>
                        <div className={styles.partner}>
                            <img
                                src="/src/assets/images/sponsorsBanner/sponsor2.jpg"
                                alt="Eedm"
                                className={styles.partnerImage}
                            />
                            <p className={styles.partnerName}>Eedm</p>
                        </div>
                        <div className={styles.partner}>
                            <img
                                src="/src/assets/images/sponsorsBanner/sponsor3.jpg"
                                alt="Sept Fest"
                                className={styles.partnerImage}
                            />
                            <p className={styles.partnerName}>Sept Fest</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
