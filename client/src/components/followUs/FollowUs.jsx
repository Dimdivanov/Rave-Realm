import React from 'react';
import styles from './FollowUs.module.css';

export default function FollowUs() {
    return (
        <section className={styles.section}>
            <div className={`${styles.container} grid grid-cols-1 md:grid-cols-2`}>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/first-project-test-ea6ec.appspot.com/o/icons%2FinstagramLogo.png?alt=media&token=4db63e3d-c7e8-4308-a320-0f869d4e8177"
                            alt="instaLogo"
                            className={styles.iconImage}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.textTitle}>Follow us on Instagram</p>
                        <p className={styles.textHandle}>@RaveRealmTickets</p>
                    </div>
                </div>

                <div className={styles.partnersSection}>
                    <h2 className={styles.partnersTitle}>Our Partners</h2>
                    <h3 className={styles.partnersSubtitle}>Rave Realm</h3>
                    <div className="flex flex-wrap gap-6 mb-4">
                        <div className={styles.partner}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/first-project-test-ea6ec.appspot.com/o/images%2FsponsorsBanner%2Fsponsor1.jpg?alt=media&token=f803269c-ea37-4abe-9d00-ef312143861e"
                                alt="Sumiom"
                                className={styles.partnerImage}
                            />
                            <p className={styles.partnerName}>Sumiom</p>
                        </div>
                        <div className={styles.partner}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/first-project-test-ea6ec.appspot.com/o/images%2FsponsorsBanner%2Fsponsor2.jpg?alt=media&token=86bd6bc5-9a47-491f-9827-068dd153f525"
                                alt="Eedm"
                                className={styles.partnerImage}
                            />
                            <p className={styles.partnerName}>Eedm</p>
                        </div>
                        <div className={styles.partner}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/first-project-test-ea6ec.appspot.com/o/images%2FsponsorsBanner%2Fsponsor3.jpg?alt=media&token=a3fde589-8104-43ca-88fd-7f7d7776f0cb"
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
