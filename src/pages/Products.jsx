import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import { useCart } from '../context/CartContext';
import SEO from '../components/SEO';
import '../styles/Products.css';

const StarRating = ({ count }) => (
    <div className="p-stars">
        {Array.from({ length: count }).map((_, i) => (
            <span key={i} className="p-star">★</span>
        ))}
    </div>
);

const Products = () => {
    const { totalItems } = useCart();

    return (
        <div className="products-container">
            <SEO
                title="Products - Shop Our Collection"
                description="Browse our catalogue of high quality, edge-to-edge sublimation print apparel and ceramics perfectly tailored for anime fans and creators."
            />

            {/* Simple Page Header compatible with global Navbar */}
            <div className="page-hero" style={{ paddingTop: '120px', paddingBottom: '30px', textAlign: 'center' }}>
                <span className="header-badge" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>✦ Echidna.in Print Studio</span>
                <h1 className="header-title" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--text-main)', margin: '0' }}>Our Products</h1>
                <p className="header-sub" style={{ fontSize: '14px', color: 'var(--text-sec)', marginTop: '8px' }}>Every item printed with vibrant, fade-resistant sublimation ink</p>
            </div>

            {/* Product Grid */}
            <main className="products-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        style={{ '--delay': product.delay }}
                    />
                ))}
            </main>

            {/* Testimonials Strip */}
            <section className="p-testimonials-section">
                <div className="p-testimonials-header">
                    <span className="header-badge" style={{ display: 'block', marginBottom: '6px' }}>✦ Customer Stories</span>
                    <h2 className="p-testimonials-title">What Our Customers Say</h2>
                    <p className="header-sub">Hundreds of happy customers — here's a few of them</p>
                </div>
                <div className="p-testimonials-scroll">
                    {testimonials.map((t) => (
                        <div key={t.id} className="p-t-card">
                            <StarRating count={t.rating} />
                            <p className="p-t-quote">"{t.text}"</p>
                            <div className="p-t-author">
                                <div className="p-t-avatar" style={{ background: t.color }}>{t.initials}</div>
                                <div>
                                    <p className="p-t-name">{t.name}</p>
                                    <p className="p-t-product">{t.product}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-testimonials-cta">
                    <Link to="/testimonials" className="p-see-all-btn">See All Reviews →</Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="site-footer">
                <p className="footer-text">© 2026 Echidna.in. Premium quality guaranteed.</p>
            </footer>
        </div>
    );
};

export default Products;

