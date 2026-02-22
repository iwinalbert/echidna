import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import '../styles/Landing.css';

const Landing = () => {
    // Show first 6 products as preview
    const previewProducts = products.slice(0, 6);
    // Show first 4 testimonials
    const previewTestimonials = testimonials.slice(0, 4);

    return (
        <div className="landing-container">
            <SEO
                title="Home"
                description="Welcome to Echidna.in! We provide premium custom sublimation printing for mugs, hoodies, shirts, and more."
            />
            {/* Hero */}
            <section className="hero">
                <h1 className="hero-heading">
                    Echidna.in<br />
                    Sublimation
                    <br />
                    <span className="underline-wrap">
                        Print Studio
                        <svg className="wavy-svg" viewBox="0 0 310 16" fill="none">
                            <path id="wavyPath" d="M2 7C40 7 40 14 80 14C120 14 120 2 160 2C200 2 200 12 240 12C275 12 310 5 310 5"
                                stroke="#111" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </span>
                </h1>

                <p className="hero-sub">
                    Realize Your World in Full Color.<br />
                    Premium custom merchandise, crafted with care.
                </p>

                <div className="hero-buttons">
                    <Link to="/products" className="btn">
                        View Catalog
                        <span className="btn-icon">→</span>
                        <div className="sparkles">
                            <svg className="sparkle s1" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
                            </svg>
                            <svg className="sparkle s2" width="7" height="7" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
                            </svg>
                        </div>
                    </Link>
                    <a href="#" className="btn">Custom Order</a>
                </div>
            </section>

            {/* Background Collage */}
            <div className="collage">
                <div className="manga-card card-1"><LazyLoadImage src="/img1.jpeg" alt="Art 1" /></div>
                <div className="manga-card card-2"><LazyLoadImage src="/img2.jpeg" alt="Art 2" /></div>
                <div className="manga-card card-3"><LazyLoadImage src="/img3.jpeg" alt="Art 3" /></div>
                <div className="manga-card card-4"><LazyLoadImage src="/img1.jpeg" alt="Art 4" /></div>
                <div className="manga-card card-5"><LazyLoadImage src="/img2.jpeg" alt="Art 5" /></div>
                <div className="manga-card card-6"><LazyLoadImage src="/img3.jpeg" alt="Art 6" /></div>
                <div className="manga-card card-7"><LazyLoadImage src="/img1.jpeg" alt="Art 7" /></div>
                <div className="manga-card card-8"><LazyLoadImage src="/img2.jpeg" alt="Art 8" /></div>
                <div className="manga-card card-9"><LazyLoadImage src="/img3.jpeg" alt="Art 9" /></div>
                <div className="manga-card card-10"><LazyLoadImage src="/img1.jpeg" alt="Art 10" /></div>
                <div className="manga-card card-11"><LazyLoadImage src="/img2.jpeg" alt="Art 11" /></div>
                <div className="manga-card card-12"><LazyLoadImage src="/img3.jpeg" alt="Art 12" /></div>
                <div className="manga-card card-13"><LazyLoadImage src="/img1.jpeg" alt="Art 13" /></div>
                <div className="manga-card card-14"><LazyLoadImage src="/img2.jpeg" alt="Art 14" /></div>
            </div>

            {/* ========= Categories Preview Section ========= */}
            <section className="landing-section">
                <div className="section-header">
                    <h2 className="section-title">Our Categories</h2>
                    <Link to="/products" className="see-more-btn">See All →</Link>
                </div>
                <div className="bento-grid">
                    <Link to="/products" className="bento-card bento-large">
                        <span className="bento-tag cyan">BODY PILLOWS</span>
                        <div className="bento-bottom">
                            <h3 className="bento-title">Dakimakura</h3>
                            <p className="bento-items">128 items</p>
                        </div>
                    </Link>
                    <Link to="/products" className="bento-card">
                        <span className="bento-tag pink">TEES & HOODIES</span>
                        <div className="bento-bottom">
                            <h3 className="bento-title">Apparel</h3>
                            <p className="bento-items">256 items</p>
                        </div>
                    </Link>
                    <Link to="/products" className="bento-card">
                        <span className="bento-tag purple">WALL ART</span>
                        <div className="bento-bottom">
                            <h3 className="bento-title">Posters</h3>
                            <p className="bento-items">312 items</p>
                        </div>
                    </Link>
                    <Link to="/products" className="bento-card">
                        <span className="bento-tag cyan">DESK MATS</span>
                        <div className="bento-bottom">
                            <h3 className="bento-title">Mousepads</h3>
                            <p className="bento-items">89 items</p>
                        </div>
                    </Link>
                    <Link to="/products" className="bento-card">
                        <span className="bento-tag pink">ALL MODELS</span>
                        <div className="bento-bottom">
                            <h3 className="bento-title">Phone Cases</h3>
                            <p className="bento-items">167 items</p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* ========= Featured Products Section ========= */}
            <section className="landing-section">
                <div className="section-header">
                    <h2 className="section-title">Featured Products</h2>
                    <Link to="/products" className="see-more-btn">Shop All →</Link>
                </div>
                <div className="featured-products-grid">
                    {previewProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            style={{ '--delay': product.delay }}
                        />
                    ))}
                </div>
            </section>

            {/* ========= Testimonials Preview Section ========= */}
            <section className="landing-section">
                <div className="section-header">
                    <h2 className="section-title">What Customers Say</h2>
                    <Link to="/testimonials" className="see-more-btn">See More →</Link>
                </div>
                <div className="testimonials-preview-grid">
                    {previewTestimonials.map((t, i) => (
                        <div key={t.id} className="testi-card" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="testi-stars">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <span key={j} className="testi-star">★</span>
                                ))}
                            </div>
                            <p className="testi-quote">"{t.text.length > 120 ? t.text.slice(0, 120) + '…' : t.text}"</p>
                            <div className="testi-author">
                                <div className="testi-avatar" style={{ background: t.color }}>{t.initials}</div>
                                <div>
                                    <p className="testi-name">{t.name}</p>
                                    <p className="testi-product">{t.product}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <p>© 2026 Echidna.in. Premium quality guaranteed.</p>
            </footer>
        </div>
    );
};

export default Landing;
