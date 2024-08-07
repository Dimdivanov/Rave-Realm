import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css'; // Import your CSS module

export default function Hero() {
    return (
        <section id="hero" className="relative bg-black bg-gradient-to-b from-purple-800 to-rgb-400 min-h-screen pt-20">
            <div className="relative px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-64">
                    <div className="text-center">
                        <h1 className={styles.title}>
                            <span>Tickets</span> For Fun, Memories For A Lifetime.
                        </h1>
                        <p className={styles.subtitle}>
                            Join us for an extraordinary adventure where music meets
                            magic. Secure your ticket today and create memories that
                            will last forever.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 relative">
                            <Link
                                to="/get-tickets"
                                className="relative z-10 rounded-full bg-gradient-to-r from-[rgb(116,47,255)] to-[rgb(230,35,196)] px-6 py-3 text-lg font-bold text-white shadow-lg transition-transform duration-200 hover:from-[rgb(100,35,255)] hover:to-[rgb(220,35,196)] hover:scale-105 hover:shadow-xl border-2 border-white"
                            >
                                Get Your Tickets
                            </Link>
                            <Link
                                to="/create-stage"
                                className="absolute z-10 rounded-full bg-transparent border-2 border-[rgb(116,47,255)] px-4 py-2 text-lg font-bold text-white shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg opacity-90"
                                style={{ top: '6rem' }}
                            >
                                Be a Creator
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
