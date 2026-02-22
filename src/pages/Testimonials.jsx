import React from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/testimonials';
import SEO from '../components/SEO';
import '../styles/Testimonials.css';

const StarRating = ({ count }) => (
    <div className="t-stars">
        {Array.from({ length: count }).map((_, i) => (
            <span key={i} className="t-star">★</span>
        ))}
    </div>
);

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <SEO
                title="Customer Reviews"
                description="Read what our happy customers have to say about Echidna.in's custom sublimation prints, hoodies, and mugs."
            />

            {/* Simple Page Header compatible with global Navbar */}
            <div className="page-hero" style={{ paddingTop: '120px', paddingBottom: '30px', textAlign: 'center' }}>
                <span className="header-badge" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>✦ Customer Stories</span>
                <h1 className="header-title" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--text-main)', margin: '0' }}>What People Say</h1>
                <p className="header-sub" style={{ fontSize: '14px', color: 'var(--text-sec)', marginTop: '8px' }}>Real customers, real experiences with Echidna.in</p>
            </div>

            {/* Testimonials Grid */}
            <section className="t-grid">
                {testimonials.map((t) => (
                    <article key={t.id} className="t-card">
                        <div className="t-card-top">
                            <div className="t-avatar" style={{ background: t.color }}>
                                {t.initials}
                            </div>
                            <div>
                                <p className="t-name">{t.name}</p>
                                <p className="t-product">{t.product}</p>
                            </div>
                        </div>
                        <StarRating count={t.rating} />
                        <p className="t-quote">"{t.text}"</p>
                        <div className="t-card-bottom">
                            <span className="t-date">{t.date}</span>
                            <span className="t-verified">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Verified Purchase
                            </span>
                        </div>
                    </article>
                ))}
            </section>

            {/* Footer */}
            <footer className="t-footer">
                <p>© 2026 Echidna.in. Premium quality guaranteed.</p>
            </footer>
        </div>
    );
};

export default Testimonials;
